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
 * the truth values extracted from the DOM. With React 19 native head
 * hoisting, duplicates are rare — but we defensively re-emit clean tags so
 * that head order and content match the truth extracted from the live DOM.
 *
 * IMPORTANT: JSON-LD scripts are rendered INLINE by React 19 (they are not
 * hoisted). Prerender leaves them exactly where React put them in the body
 * so that client hydration matches. Google reads JSON-LD from anywhere in
 * the document; head vs body placement is semantically equivalent.
 */
function rewriteHead(html, truth) {
  const managedSelectors = [
    /<title[^>]*>[\s\S]*?<\/title>/gi,
    /<meta\s+[^>]*name=["']description["'][^>]*>/gi,
    /<link\s+[^>]*rel=["']canonical["'][^>]*>/gi,
    /<meta\s+[^>]*property=["']og:[^"']+["'][^>]*>/gi,
    /<meta\s+[^>]*name=["']twitter:[^"']+["'][^>]*>/gi,
  ];

  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
  if (!headMatch) return html;
  let head = headMatch[1];

  // Strip all managed head tags — we'll re-emit them cleanly.
  // (JSON-LD scripts are NOT touched — they belong in body with the React
  //  tree and stripping them would break hydration.)
  for (const re of managedSelectors) head = head.replace(re, "");

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

  // Insert cleaned tags at end of head (before </head>).
  head = head.trimEnd() + "\n" + clean.join("\n") + "\n";

  return html.replace(headMatch[0], `<head>${head}</head>`);
}

/**
 * Registers @babel/register (with CSS/asset stubs) so we can require the
 * React source tree in Node and call renderToString for hydration-safe body
 * HTML. Called lazily so that non-SSR use of this file (if any) still works.
 */
function ensureBabel() {
  if (ensureBabel._done) return;
  require("@babel/register")({
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
    extensions: [".js", ".jsx"],
    // Only transpile /app/frontend/src (the app tree) and its Seo/Layout deps.
    only: [/\/app\/frontend\/src\//],
    cache: false,
  });
  require.extensions[".css"] = () => ({});
  require.extensions[".webp"] = () => "";
  require.extensions[".png"] = () => "";
  require.extensions[".jpg"] = () => "";
  require.extensions[".svg"] = () => "";
  const Module = require("module");
  const origResolve = Module._resolveFilename;
  Module._resolveFilename = function (r, p, ...rest) {
    if (r && r.startsWith("@/")) r = "/app/frontend/src/" + r.slice(2);
    return origResolve.call(this, r, p, ...rest);
  };
  ensureBabel._done = true;
}

/**
 * Render the app tree for a given route to a hydration-safe HTML string
 * using ReactDOMServer.renderToString. This preserves React 19 hydration
 * comment markers (`<!-- -->`) between adjacent JSX text nodes — which is
 * what a client puppeteer capture cannot produce (browsers serialize DOM
 * without those markers, and the resulting HTML fails hydration).
 *
 * Returns the raw #root inner HTML for the given route.
 */
function renderRouteBody(route) {
  ensureBabel();
  const React = require("react");
  const { renderToString } = require("react-dom/server");
  const RRD = require("react-router-dom");
  const Layout = require("/app/frontend/src/components/Layout.jsx").default;
  const Home = require("/app/frontend/src/pages/Home.jsx").default;
  const StarCertified = require("/app/frontend/src/pages/StarCertified.jsx").default;
  const Placentia = require("/app/frontend/src/pages/Placentia.jsx").default;
  const Fullerton = require("/app/frontend/src/pages/Fullerton.jsx").default;
  const YorbaLinda = require("/app/frontend/src/pages/YorbaLinda.jsx").default;
  const Faq = require("/app/frontend/src/pages/Faq.jsx").default;
  const Contact = require("/app/frontend/src/pages/Contact.jsx").default;
  const NotFound = require("/app/frontend/src/pages/NotFound.jsx").default;

  const tree = React.createElement(
    RRD.StaticRouter,
    { location: route },
    React.createElement(
      Layout,
      null,
      React.createElement(
        RRD.Routes,
        null,
        React.createElement(RRD.Route, { path: "/", element: React.createElement(Home) }),
        React.createElement(RRD.Route, { path: "/star-certified-smog", element: React.createElement(StarCertified) }),
        React.createElement(RRD.Route, { path: "/placentia-smog-check", element: React.createElement(Placentia) }),
        React.createElement(RRD.Route, { path: "/fullerton-smog-check", element: React.createElement(Fullerton) }),
        React.createElement(RRD.Route, { path: "/yorba-linda-smog-check", element: React.createElement(YorbaLinda) }),
        React.createElement(RRD.Route, { path: "/faq", element: React.createElement(Faq) }),
        React.createElement(RRD.Route, { path: "/contact", element: React.createElement(Contact) }),
        React.createElement(RRD.Route, { path: "*", element: React.createElement(NotFound) })
      )
    )
  );
  return renderToString(tree);
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

      // Replace the puppeteer-captured #root body with a React SSR
      // renderToString output for the same route. This is what makes the
      // prerendered HTML hydration-safe: renderToString emits React 19's
      // text-node comment markers (`<!-- -->`) between adjacent JSX text
      // nodes, which a client puppeteer capture cannot preserve (browser
      // DOM serialization merges them into single text nodes, causing
      // hydration `text` mismatches on the client).
      try {
        const ssrBody = renderRouteBody(route);
        // The React SSR output for our tree begins with <div class="site-nav-wrap"> ...
        // We wrap it back in <div id="root"> ... </div> before replacing.
        html = html.replace(
          /<div id="root">[\s\S]*?<\/div>(\s*(?:<script|<\/body>))/,
          `<div id="root">${ssrBody}</div>$1`
        );
      } catch (e) {
        console.warn(
          `[prerender] SSR body render failed for ${route}: ${e.message}. ` +
            `Falling back to puppeteer-captured body (may cause hydration mismatch).`
        );
      }

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
