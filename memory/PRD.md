# In & Out Smog Check — Premium Multi-Page SEO Site

## Business
- **Name (Google):** In & Out Smog Check (Test Only)
- **Address:** 144 S Bradford Ave, Placentia, CA 92870
- **Phone:** (714) 993-1660 · tel:+17149931660
- **Hours:** Mon–Fri 8AM–5PM · Sat 8AM–3PM · Sun Closed
- **Since:** 1999 (25+ years)
- **Credentials:** STAR Certified · BAR Licensed · Test-Only
- **Google rating:** 4.8★ · 160 reviews (as of Jan 2026)
- **Nearby competitor:** OC Smog Shop, 100 W Chapman Ave (Valvoline plaza). Named on homepage LocationVerify + LocationCallout only — never on other pages.

## Homepage Section Order
1. Hero — 4 premium badges, real rating pill (4.8★ · 160 reviews)
2. Speed Timeline (5 steps, ~10 min flow)
3. Why Drivers Choose Us (3 cards)
4. Location Callout (amber warning + smooth-scroll button)
5. Finding Us Is Easy — illustrated map → warning → Google map → giant Get Directions CTA → address card → photos → landmarks
6. Why We're Faster (6 cards)
7. This Is Our Shop (real photo gallery: inspection bay + storefront + sign + driveway)
8. Since 1999 Heritage (stats)
9. Trust Badges strip (6 credentials)
10. Banner
11. Reviews (real 4.8★ rating card + featured Denise Radford quote + review tag chips + Google CTA)
12. Nearby Cities SEO grid (7 cities)
13. Contact
14. Sticky mobile bottom nav (📍 Directions · 📞 Call · ⏰ Hours)

## Pages
- `/` Home · `/star-certified-smog` · `/placentia-smog-check` · `/fullerton-smog-check` · `/yorba-linda-smog-check` · `/faq` · `/contact` · 404

## Recent Changes (Feb 2026)
- **Fullerton SEO/AEO rewrite** (iteration_6 60/60 pass): CSUF context, AEO answer block with `data-testid='fullerton-aeo'`, three service cards, driving-directions ordered list, reciprocal internal links from Placentia + Yorba Linda, exact 145-char meta description.
- **Mobile H2 sizing polish** (iteration_7): `.prose h2` at ≤420px raised from 1.3rem → 1.45rem (23.2px, ~23.7% smaller than desktop 30.4px — within 20-25% target).
- **Desktop card heading equalization** (iteration_7): added `.prose .cards .card h3 { min-height: calc(3 * 1.6em) }` inside `@media(min-width:841px)` — all three Fullerton service card headings now equal ~108px, paragraph start-points aligned at exact same Y (1426px). Mobile stack unaffected (min-height:0).
- **CRA fallback text removal** (iteration_8): emptied `<noscript>` in `public/index.html` — the literal "You need to enable JavaScript to run this app." now returns zero occurrences in raw HTML on all 7 routes.
- **SEO title cleanup**: shortened titles on `/placentia-smog-check`, `/star-certified-smog`, `/contact`, `/faq` (all ≤ 60 chars, all unique).
- **Meta description cleanup**: rewrote descriptions on `/placentia-smog-check`, `/star-certified-smog`, `/yorba-linda-smog-check`, `/faq`, `/contact` (all ≤ 155 chars, all unique).
- **React 19 hydration mismatch fix**: root cause = react-helmet-async v3 inline-then-hoist behavior + puppeteer-captured HTML losing React 19's text-node boundary markers (`<!-- -->`). Fix: (a) rewrote `src/components/Seo.jsx` to manage head tags via `useEffect` (no head tags in JSX = no hoist duplication), (b) removed `react-helmet-async` dependency, (c) removed `HelmetProvider` from `App.js`, (d) `scripts/prerender.js` now uses `ReactDOMServer.renderToString(<StaticRouter>+App)` to generate hydration-safe `#root` body HTML with proper React 19 markers. Result: zero React #418 errors, zero pageerrors, zero console.errors on all 7 routes.
- **Pure-Node prerender pipeline (no Chromium dependency)** (Sep 2026): rewrote `scripts/prerender.js` to use `ReactDOMServer.renderToString` + `StaticRouter` directly in Node, dropping the puppeteer-core + serve-handler + system Chromium chain. Root cause of production shipping the SPA shell: the Emergent deploy container has no Chromium, so `findChromium()` returned null and the previous script silently skipped writing per-route HTML. Added a lightweight `globalThis.__CAPTURE_SEO__` hook in `src/components/Seo.jsx` (zero runtime cost in the browser) so the pure-Node build step can capture each route's title/description/canonical/jsonLd without a headless browser. `dotenv` is now loaded at the top of `scripts/prerender.js` so `SITE_URL` uses the same `REACT_APP_BACKEND_URL` value the client bundle bakes in. Build time dropped from ~30s to ~11.5s. All 7 routes now emit crawler-visible per-route HTML (9.8KB-35KB) with correct route-specific `<title>`, meta description, canonical, og:*, twitter:*, JSON-LD, H1, and body copy — verified via raw `curl` (no JS) and via post-hydration DOM inspection (zero React #418, zero pageerrors, exactly 1 of each head tag).

## SEO
- react-helmet-async per-route tags
- Structured data: AutomotiveBusiness + AggregateRating (4.8/160) + Review (Denise Radford) + FAQPage + Service
- Sitemap.xml + robots.txt
- Real storefront in OG image (1200×630)
- Full favicon set + webmanifest

## Assets (real)
- `/photos/storefront.webp` · `/photos/sign.webp` · `/photos/driveway.webp` · `/photos/inspection-bay.webp`
- `/photos/illustrated-map.{png,webp}` — used AS-IS
- `/mascot.png` — brand mascot (kept in hero; matches physical sign)

## User Decisions
- ❌ No coupon section
- ❌ No reservation form
- ⏸️ Technician photo — will be sent later, ready to slot into ShopGallery
- ⏸️ Second image.webp uploaded (`7rntkcs2_image.webp`, 923×2000) — not yet placed; awaiting user direction

## Open Backlog
- P2: Technician / customer-service photo (owner will send)
- P2: Breadcrumb JSON-LD schema for sub-pages
- P2: Renewal Reminder email opt-in (2-year re-engagement loop)
- P2: Blog (What to bring, gross polluter, DMV walkthrough)

## Tech
- React 18 + react-router-dom v7 + react-helmet-async
- Plain CSS at `/app/frontend/src/site.css`
- CRA + craco, supervisor on port 3000
