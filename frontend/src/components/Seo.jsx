import { useEffect } from "react";

/**
 * Per-route SEO wrapper.
 *
 * Head metadata (<title>, <meta>, <link>, og/twitter) is managed
 * IMPERATIVELY via useEffect on document.head so that:
 *
 *   1. During prerender (puppeteer client-render), useEffect runs, tags are
 *      inserted into <head>, puppeteer captures the final HTML with head
 *      populated. `scripts/prerender.js` then de-dups & re-emits clean
 *      canonical tags into <head>.
 *
 *   2. During real-user hydration, the prerendered HTML already has the
 *      correct <head>. Because <Seo> renders NO head elements in JSX, React
 *      19 has nothing to hoist, cannot duplicate, and cannot mismatch. The
 *      useEffect fires post-hydration and idempotently re-asserts the same
 *      values (no visible change).
 *
 *   3. On SPA route navigation, the effect re-runs per route and swaps head
 *      tags to the new page's values.
 *
 * JSON-LD scripts are rendered inline in JSX (React 19 does NOT hoist
 * non-async scripts, so they land in body inside #root at the JSX position).
 * Google reads JSON-LD from anywhere in the document. Because prerender
 * captures the same inline placement, hydration matches exactly.
 *
 * This replaces the previous react-helmet-async implementation, which was
 * incompatible with React 19 hydration.
 */

export const SITE_URL =
  process.env.REACT_APP_BACKEND_URL ||
  (typeof window !== "undefined" && window.location.origin) ||
  "";

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Find-or-create a single <meta> tag matched by attr/value. */
function upsertMeta(attr, value, content) {
  let el = document.head.querySelector(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Find-or-create a <link> tag matched by rel. */
function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path = "/",
  jsonLd,
}) {
  const url = `${SITE_URL}${path}`;

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (title) document.title = title;
    if (description) upsertMeta("name", "description", description);
    upsertLink("canonical", url);
    if (title) upsertMeta("property", "og:title", title);
    if (description) upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", OG_IMAGE);
    if (title) upsertMeta("name", "twitter:title", title);
    if (description) upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", OG_IMAGE);
  }, [title, description, url]);

  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
