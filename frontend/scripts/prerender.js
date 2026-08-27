/**
 * Prerender each React route to static HTML at build time.
 * - Serves the freshly-built /build folder locally.
 * - Uses puppeteer-core + system Chromium to render every listed route.
 * - Extracts the *effective* SEO tags (queried directly from the live DOM
 *   after react-helmet-async settles) then rewrites the head with clean,
 *   unique tags — eliminating Helmet's accumulated duplicates.
 * - Writes each route to build/{route}/index.html for static hosting.
 *
 * Runtime hosting is unchanged; this is purely a build-time SEO step.
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const handler = require("serve-handler");
const puppeteer = require("puppeteer-core");

const ROOT = path.join(__dirname, "..");
const BUILD_DIR = path.join(ROOT, "build");
const PORT = 5175;
const DEPLOYED_ORIGIN =
  (process.env.REACT_APP_BACKEND_URL || "").replace(/\/+$/, "") || "";

const ROUTES = [
  "/",
  "/star-certified-smog",
  "/placentia-smog-check",
  "/fullerton-smog-check",
  "/yorba-linda-smog-check",
  "/faq",
  "/contact",
];

const CHROMIUM_CANDIDATES = [
  process.env.CHROME_PATH,
  process.env.PUPPETEER_EXECUTABLE_PATH,
  "/root/bin/chromium",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
].filter(Boolean);

function findChromium() {
  for (const p of CHROMIUM_CANDIDATES) {
    try {
      if (fs.existsSync(p)) return p;
    } catch (_) {}
  }
  return null;
}

/**
 * Extract the effective SEO tags from the live DOM. When helmet-async has
 * inserted multiple copies of the same tag, prefer the LAST one — that's the
 * value the browser is actually honouring.
 */
async function extractTruthTags(page) {
  return await page.evaluate(() => {
    const last = (sel) => {
      const nodes = document.querySelectorAll(sel);
      return nodes[nodes.length - 1];
    };
    const attr = (el, a) => (el ? el.getAttribute(a) : null);

    // Title: honour document.title (set by helmet-async imperatively)
    const title = document.title;

    // Descriptions / canonical — take last-wins content.
    const description = attr(last('meta[name="description"]'), "content");
    const canonical = attr(last('link[rel="canonical"]'), "href");

    // OG + Twitter tags — collect last-wins for each property/name.
    const collect = (selectorAttr, prefix) => {
      const out = {};
      document
        .querySelectorAll(`meta[${selectorAttr}^="${prefix}"]`)
        .forEach((m) => {
          const key = m.getAttribute(selectorAttr);
          out[key] = m.getAttribute("content");
        });
      return out;
    };
    const og = collect("property", "og:");
    const twitter = collect("name", "twitter:");

    // Every JSON-LD script — filter to only schemas matching the current
    // route. helmet-async accumulates copies from earlier renders; we keep:
    //  - AutomotiveBusiness only when url matches canonical (or no url present)
    //  - FAQPage: keep at most one (the last one)
    //  - Others (Service, etc.): keep one per @type (last wins)
    const canonicalUrl =
      document.querySelector('link[rel="canonical"]')?.href || null;
    const rawScripts = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]')
    ).map((s) => s.textContent);
    const byType = new Map(); // last-wins per @type key
    for (const body of rawScripts) {
      let obj;
      try {
        obj = JSON.parse(body);
      } catch {
        continue;
      }
      if (!obj || !obj["@type"]) continue;
      // For business schemas, only keep the one for THIS canonical URL.
      if (
        obj["@type"] === "AutomotiveBusiness" &&
        canonicalUrl &&
        obj.url &&
        obj.url !== canonicalUrl
      ) {
        continue;
      }
      byType.set(obj["@type"], body);
    }
    const jsonLd = Array.from(byType.values());

    return { title, description, canonical, og, twitter, jsonLd };
  });
}

/**
 * Rewrite the head of the captured HTML with clean unique tags built from
 * the truth values extracted from the DOM.
 */
function rewriteHead(html, truth) {
  const managedSelectors = [
    /<title[^>]*>[\s\S]*?<\/title>/gi,
    /<meta\s+[^>]*name=["']description["'][^>]*>/gi,
    /<link\s+[^>]*rel=["']canonical["'][^>]*>/gi,
    /<meta\s+[^>]*property=["']og:[^"']+["'][^>]*>/gi,
    /<meta\s+[^>]*name=["']twitter:[^"']+["'][^>]*>/gi,
    /<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
  ];

  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
  if (!headMatch) return html;
  let head = headMatch[1];

  // Strip all managed tags from HEAD — we're going to re-emit them clean.
  for (const re of managedSelectors) head = head.replace(re, "");

  // Helmet also renders <script type="application/ld+json"> tags in the body
  // (wherever they were placed in JSX). Strip ALL body-level ld+json scripts
  // so the head-emitted ones are the only source of truth.
  const jsonScriptRe =
    /<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi;
  html = html.replace(jsonScriptRe, (m, offset) => {
    // Only strip from body (offset past </head>)
    const headEnd = html.indexOf("</head>");
    return offset > headEnd ? "" : m;
  });

  const esc = (s) =>
    String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const clean = [];
  if (truth.title) clean.push(`<title>${esc(truth.title)}</title>`);
  if (truth.description)
    clean.push(`<meta name="description" content="${esc(truth.description)}">`);
  if (truth.canonical)
    clean.push(`<link rel="canonical" href="${esc(truth.canonical)}">`);
  for (const [k, v] of Object.entries(truth.og || {}))
    clean.push(`<meta property="${esc(k)}" content="${esc(v)}">`);
  for (const [k, v] of Object.entries(truth.twitter || {}))
    clean.push(`<meta name="${esc(k)}" content="${esc(v)}">`);
  for (const js of truth.jsonLd || [])
    clean.push(`<script type="application/ld+json">${js}</script>`);

  // Insert cleaned tags at end of head (before </head>).
  head = head.trimEnd() + "\n" + clean.join("\n") + "\n";

  return html.replace(headMatch[0], `<head>${head}</head>`);
}

async function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error("[prerender] No /build folder — run `yarn build` first.");
    process.exit(1);
  }
  const executablePath = findChromium();
  if (!executablePath) {
    console.warn("[prerender] No Chromium found; skipping prerender.");
    process.exit(0);
  }

  const server = http.createServer((req, res) =>
    handler(req, res, {
      public: BUILD_DIR,
      rewrites: [{ source: "**", destination: "/index.html" }],
    })
  );
  await new Promise((r) => server.listen(PORT, "127.0.0.1", r));
  console.log(`[prerender] static server up on 127.0.0.1:${PORT}`);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    for (const route of ROUTES) {
      const url = `http://127.0.0.1:${PORT}${route}`;
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 900 });
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      await new Promise((r) => setTimeout(r, 400));

      const truth = await extractTruthTags(page);
      let html = await page.content();
      await page.close();

      html = rewriteHead(html, truth);

      // Ensure any accidental local origin references are rewritten too.
      const LOCAL = `http://127.0.0.1:${PORT}`;
      if (DEPLOYED_ORIGIN && DEPLOYED_ORIGIN !== LOCAL) {
        html = html.split(LOCAL).join(DEPLOYED_ORIGIN);
      }

      const outDir =
        route === "/" ? BUILD_DIR : path.join(BUILD_DIR, route.replace(/^\//, ""));
      fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, "index.html");
      fs.writeFileSync(outFile, html, "utf8");
      console.log(
        `[prerender]  ${route.padEnd(28)} -> ${path.relative(ROOT, outFile)}  (${(
          html.length / 1024
        ).toFixed(1)} KB) · title="${truth.title.substring(0, 50)}${
          truth.title.length > 50 ? "…" : ""
        }"`
      );
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`[prerender] done — ${ROUTES.length} routes rendered.`);
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
