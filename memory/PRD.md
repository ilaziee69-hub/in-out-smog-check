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
- `/` Home · `/star-certified-smog` · `/placentia-smog-check` · `/fullerton-smog-check` · `/faq` · `/contact` · 404

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
