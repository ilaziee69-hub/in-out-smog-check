# In & Out Smog Check — Premium Multi-Page SEO Site

## Business
- **Name (Google):** In & Out Smog Check (Test Only)
- **Address:** 144 S Bradford Ave, Placentia, CA 92870
- **Phone:** (714) 993-1660 · tel:+17149931660
- **Hours:** Mon–Fri 8AM–5PM · Sat 8AM–3PM · Sun Closed
- **Since:** 1999 (25+ years)
- **Credentials:** STAR Certified · BAR Licensed · Test-Only
- **Nearby competitor concern:** OC Smog Shop at 100 W Chapman Ave (Valvoline plaza) — subtle disambiguation, never named on other pages

## Homepage Section Order (Jan 2026)
1. Hero with 4 premium badges (⚡ 10 Min · ⭐ STAR · 🚗 Walk-Ins · 📄 DMV Cert)
2. Speed Timeline (5-step horizontal flow: Drive In → Inspect → Test → DMV Sent → Drive Away)
3. Why Drivers Choose Us (3 cards)
4. Location Callout (amber warning banner + "See Exactly Where We Are" smooth-scroll button)
5. Finding Us Is Easy (illustrated map FIRST → warning → Google map → giant Get Directions CTA → address card → real photos → landmarks)
6. Why We're Faster (6-card premium grid)
7. Since 1999 Heritage (stats)
8. Trust Badges strip (6 credentials)
9. Banner
10. Reviews (real Google reviews link)
11. Nearby Cities SEO grid (Placentia/Fullerton internal links + Yorba Linda/Brea/Anaheim/Orange/La Habra deep-link directions)
12. Contact
13. Sticky mobile bottom nav (Directions · Call · Hours)

## Pages
- `/` Home (above)
- `/star-certified-smog` STAR + Test-Only explainer
- `/placentia-smog-check` Local landing (flagship city)
- `/fullerton-smog-check` Local landing
- `/faq` 9 Q&As with FAQPage JSON-LD
- `/contact` Address + hours + map
- `*` 404

## SEO
- react-helmet-async per-route title/desc/canonical/OG/Twitter
- AutomotiveBusiness + FAQPage + Service JSON-LD
- Sitemap.xml + robots.txt
- Real storefront photo in OG image
- Full favicon set + webmanifest

## Assets (real)
- `/photos/storefront.webp` — building with STAR + phone visible
- `/photos/sign.webp` — signage close-up
- `/photos/driveway.webp` — parking apron / entrance view
- `/photos/illustrated-map.{png,webp}` — hand-illustrated street map (used AS-IS, no crop/redraw)
- `/mascot.png` — cartoon car for hero

## Tech
- React 18 + react-router-dom v7 + react-helmet-async
- Plain CSS at `/app/frontend/src/site.css`
- CRA + craco, supervisor on port 3000

## Backlog
- P1: Interior inspection bay / technician photos (replace mascot in some sections)
- P1: Real Google star rating + review count numbers (Google CAPTCHA blocks auto-scrape)
- P2: Coupon banner (owner has not confirmed offer)
- P2: "Reserve My Spot" lead-capture form → SMS/email notifications
- P2: Breadcrumb schema
- P2: WebP conversion for remaining images + Core Web Vitals audit
- P2: Blog (What to bring, What is a gross polluter, DMV renewal walkthrough)
