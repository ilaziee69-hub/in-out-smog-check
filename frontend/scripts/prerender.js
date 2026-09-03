/**
 * Prerender each React route to static HTML at build time (pure Node).
 *
 * IMPORTANT: This script deliberately does NOT depend on headless Chromium.
 * Emergent's production build container does not ship Chromium; the previous
 * puppeteer-based version silently exited without writing per-route HTML,
 * so the crawler-visible files never reached production and every URL was
 * served the generic SPA shell.
 *
 * How it works now:
 *   1. Register @babel/register so we can require the React source tree
 *      (JSX + `@/…` alias) directly from Node.
 *   2. For each route, install a `globalThis.__CAPTURE_SEO__` sentinel that
 *      the <Seo> component (see src/components/Seo.jsx) uses to hand its
 *      props to the build step.
 *   3. Call ReactDOMServer.renderToString with a StaticRouter for the route.
 *      This produces hydration-safe body HTML (React 19 emits <!-- --> text
 *      node boundary markers) and also fires the __CAPTURE_SEO__ hook so
 *      we know that route's title / description / canonical / jsonLd.
 *   4. Assemble the final HTML:
 *        - Base head from build/index.html (charset, viewport, favicon,
 *          hashed CSS/JS <script>/<link>, etc.).
 *        - Injected head: <title>, <meta name=description>, <link canonical>,
 *          og:xxx / twitter:xxx mirrors — one clean set, from captured SEO.
 *        - Base body wrapper + empty <noscript></noscript> + the SSR body
 *          inside <div id="root">. JSON-LD <script type="application/ld+json">
 *          tags remain inline in the body where React 19 rendered them
 *          (Google reads JSON-LD anywhere in the doc).
 *   5. Write to build/<route>/index.html.
 *
 * Hydration behaviour:
 *   - The client bundle uses the same <Seo> component. Because <Seo> renders
 *     zero head elements in JSX (only optional JSON-LD scripts), React 19
 *     has nothing to hoist during hydration → no #418 mismatches. The
 *     component's useEffect then idempotently re-asserts the same head tags
 *     during SPA route navigation.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const BUILD_DIR = path.join(ROOT, "build");

// CRA inlines `REACT_APP_*` env vars into the JS bundle at build time via
// webpack, but our pure-Node prerender loads the JSX source directly and
// therefore needs the .env file loaded into process.env manually. This
// keeps SITE_URL identical between the client bundle and the SSR output
// (so canonicals + og:url match the deployed origin).
require("dotenv").config({ path: path.join(ROOT, ".env") });

const DEPLOYED_ORIGIN =
  (process.env.REACT_APP_BACKEND_URL || "").replace(/\/+$/, "") || "";

const ROUTES = [
  "/",
  "/star-certified-smog",
  "/placentia-smog-check",
  "/smog-check-pricing",
  "/fullerton-smog-check",
  "/yorba-linda-smog-check",
  "/faq",
  "/contact",
];

/**
 * Register @babel/register so we can `require()` JSX/ESM source from Node,
 * plus stub CSS/asset imports so they don't blow up in the SSR pass.
 */
function registerBabel() {
  if (registerBabel._done) return;
  require("@babel/register")({
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
    extensions: [".js", ".jsx"],
    only: [/\/app\/frontend\/src\//],
    cache: false,
  });
  require.extensions[".css"] = () => ({});
  require.extensions[".webp"] = () => "";
  require.extensions[".png"] = () => "";
  require.extensions[".jpg"] = () => "";
  require.extensions[".svg"] = () => "";
  // Resolve the CRA `@/…` alias exactly the way webpack does.
  const Module = require("module");
  const origResolve = Module._resolveFilename;
  Module._resolveFilename = function (r, p, ...rest) {
    if (r && r.startsWith("@/")) r = path.join(ROOT, "src", r.slice(2));
    return origResolve.call(this, r, p, ...rest);
  };
  registerBabel._done = true;
}

/**
 * Render one route via ReactDOMServer.renderToString AND capture its SEO
 * props via the __CAPTURE_SEO__ hook exposed by src/components/Seo.jsx.
 * Returns { body, seo } — `body` is hydration-safe HTML that gets dropped
 * inside <div id="root">, `seo` is the captured props for head injection.
 */
function renderRoute(route) {
  registerBabel();
  const React = require("react");
  const { renderToString } = require("react-dom/server");
  const RRD = require("react-router-dom");
  const Layout = require(path.join(ROOT, "src/components/Layout.jsx")).default;
  const Home = require(path.join(ROOT, "src/pages/Home.jsx")).default;
  const StarCertified = require(path.join(ROOT, "src/pages/StarCertified.jsx")).default;
  const Placentia = require(path.join(ROOT, "src/pages/Placentia.jsx")).default;
  const Fullerton = require(path.join(ROOT, "src/pages/Fullerton.jsx")).default;
  const YorbaLinda = require(path.join(ROOT, "src/pages/YorbaLinda.jsx")).default;
  const Faq = require(path.join(ROOT, "src/pages/Faq.jsx")).default;
  const Contact = require(path.join(ROOT, "src/pages/Contact.jsx")).default;
  const Pricing = require(path.join(ROOT, "src/pages/Pricing.jsx")).default;
  const NotFound = require(path.join(ROOT, "src/pages/NotFound.jsx")).default;

  let captured = null;
  globalThis.__CAPTURE_SEO__ = (props) => {
    // The first Seo() invocation during a route render wins (each page
    // renders exactly one <Seo>). Ignore accidental extras.
    if (captured == null) captured = props;
  };

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
        React.createElement(RRD.Route, { path: "/smog-check-pricing", element: React.createElement(Pricing) }),
        React.createElement(RRD.Route, { path: "*", element: React.createElement(NotFound) })
      )
    )
  );

  const body = renderToString(tree);
  const seo = captured || {};
  delete globalThis.__CAPTURE_SEO__;
  return { body, seo };
}

/** Escape a value for safe HTML attribute placement. */
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Build the head-injection block for a route from its captured SEO. Emits
 * one clean set: <title>, meta description, canonical, og:*, twitter:*.
 * JSON-LD is intentionally NOT included here — it stays inline in the body
 * where React 19 rendered it, so hydration remains lossless.
 */
function buildHeadInjection(seo) {
  const { title, description, url } = seo;
  const ogImage = `${DEPLOYED_ORIGIN}/og-image.jpg`;
  const canonical = url || DEPLOYED_ORIGIN + "/";
  const lines = [];
  if (title) lines.push(`<title>${esc(title)}</title>`);
  if (description) lines.push(`<meta name="description" content="${esc(description)}"/>`);
  lines.push(`<link rel="canonical" href="${esc(canonical)}"/>`);
  if (title) lines.push(`<meta property="og:title" content="${esc(title)}"/>`);
  if (description) lines.push(`<meta property="og:description" content="${esc(description)}"/>`);
  lines.push(`<meta property="og:url" content="${esc(canonical)}"/>`);
  lines.push(`<meta property="og:image" content="${esc(ogImage)}"/>`);
  if (title) lines.push(`<meta name="twitter:title" content="${esc(title)}"/>`);
  if (description) lines.push(`<meta name="twitter:description" content="${esc(description)}"/>`);
  lines.push(`<meta name="twitter:image" content="${esc(ogImage)}"/>`);
  return lines.join("");
}

/**
 * Read the base CRA index.html shell produced by `craco build`. This gives
 * us the correct hashed <script> / <link> asset URLs plus the empty
 * <noscript></noscript> and other meta already fixed in public/index.html.
 */
function readShell() {
  const shellPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(shellPath)) {
    throw new Error(`[prerender] build/index.html missing — run \`craco build\` first.`);
  }
  return fs.readFileSync(shellPath, "utf8");
}

/**
 * Assemble the final route HTML: shell head with route-specific SEO
 * injected before </head>, and shell body with <div id="root"> filled
 * with the SSR-rendered body.
 */
function composeRouteHtml(shell, seo, ssrBody) {
  const headInjection = buildHeadInjection(seo);

  // Inject SEO tags immediately before </head>. Do not touch any other
  // head content (charset, viewport, favicon, hashed asset links, etc.).
  let html = shell.replace(/<\/head>/i, `${headInjection}</head>`);

  // Replace the empty <div id="root"></div> in the shell with the SSR
  // body content. Match either self-closing/empty forms.
  html = html.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${ssrBody}</div>`
  );

  return html;
}

/** Simple ANSI-free logger. */
function log(...args) {
  console.log("[prerender]", ...args);
}

async function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    throw new Error(`[prerender] build directory missing: ${BUILD_DIR}`);
  }
  const shell = readShell();

  const results = [];
  for (const route of ROUTES) {
    let out;
    try {
      const { body, seo } = renderRoute(route);
      const html = composeRouteHtml(shell, seo, body);
      const outDir =
        route === "/" ? BUILD_DIR : path.join(BUILD_DIR, route.replace(/^\//, ""));
      fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, "index.html");
      fs.writeFileSync(outFile, html, "utf8");
      out = {
        route,
        file: outFile.replace(ROOT + "/", ""),
        bytes: html.length,
        title: seo.title || "",
        description: (seo.description || "").slice(0, 80) + ((seo.description || "").length > 80 ? "…" : ""),
      };
    } catch (err) {
      out = { route, error: err.message };
      console.error(`[prerender] FAILED ${route}: ${err.stack || err.message}`);
    }
    results.push(out);
  }

  // Pretty summary
  const w = (s, n) => (s + " ".repeat(n)).slice(0, n);
  log(`rendered ${results.filter((r) => !r.error).length}/${ROUTES.length} routes`);
  for (const r of results) {
    if (r.error) {
      log(`  ${w(r.route, 26)} ERROR: ${r.error}`);
    } else {
      log(`  ${w(r.route, 26)} -> ${w(r.file, 46)} ${String(r.bytes).padStart(6)}B  title="${r.title}"`);
    }
  }

  const failures = results.filter((r) => r.error);
  if (failures.length > 0) {
    console.error(`[prerender] ${failures.length} route(s) failed.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("[prerender] fatal:", err.stack || err);
  process.exit(1);
});
