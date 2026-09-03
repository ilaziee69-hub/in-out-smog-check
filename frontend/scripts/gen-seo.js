/**
 * Prebuild step — generate sitemap.xml and robots.txt from REACT_APP_BACKEND_URL.
 * Runs before `yarn build` and `yarn start` to keep the sitemap in sync with the
 * currently-configured public origin so the site is portable across
 * preview / staging / production / custom domains without code edits.
 */
const fs = require("fs");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const SITE_URL =
  (process.env.REACT_APP_BACKEND_URL || "").replace(/\/+$/, "") ||
  "http://localhost:3000";

const ROUTES = [
  { path: "/", priority: "1.0" },
  { path: "/star-certified-smog", priority: "0.9" },
  { path: "/placentia-smog-check", priority: "0.9" },
  { path: "/smog-check-pricing", priority: "0.9" },
  { path: "/fullerton-smog-check", priority: "0.8" },
  { path: "/yorba-linda-smog-check", priority: "0.8" },
  { path: "/faq", priority: "0.7" },
  { path: "/contact", priority: "0.7" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${r.priority}</priority>
  </url>`
).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const publicDir = path.join(__dirname, "..", "public");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

console.log(`[gen-seo] Wrote sitemap.xml + robots.txt for ${SITE_URL}`);
