# In & Out Smog Check — Multi-Page SEO Site

## Problem Statement
Build a website for In & Out Smog Check (Placentia, CA) using user-provided HTML/CSS/mascot, then expand into a multi-page SEO site with location landing pages, FAQ, and contact.

## Implementation (Jan 2026)

### Pages & Routes (React Router v7)
- `/` — Home (hero, services, banner, contact + map)
- `/star-certified-smog` — STAR certification explainer
- `/santa-ana-smog-check` — Local landing page for Santa Ana
- `/fullerton-smog-check` — Local landing page for Fullerton
- `/faq` — Accordion FAQ with FAQPage JSON-LD schema
- `/contact` — Address, phone, hours, map, CTAs
- `*` — 404 Not Found

### SEO Infrastructure
- `react-helmet-async` per-route title / description / canonical / OG / Twitter / JSON-LD
- Sitemap.xml + robots.txt
- AutomotiveBusiness + FAQPage + Service structured data
- OG image 1200×630 (branded card)
- Full favicon set (ico, png 16/32/180/192/512, webmanifest)

### Layout / UX
- Sticky top nav with mobile hamburger toggle
- Active link highlighting via NavLink
- Shared footer with location/hours/phone/sitelinks
- Auto scroll-to-top on route change
- Click-to-call `tel:` links on phone numbers
- "Get Directions" buttons open Google Maps directions

### Real Business Data
- Address: 144 S Bradford Ave, Placentia, CA 92870 (everywhere + JSON-LD)
- Hours: Mon–Sat 8AM–6PM
- Phone: (714) 555-0000 *(placeholder — user to replace)*

## Tech Stack
- React 18 + react-router-dom v7 + react-helmet-async
- Plain CSS (no framework) at `/app/frontend/src/site.css`
- CRA + craco, supervisor-managed on port 3000

## Files
- `/app/frontend/src/App.js` — router + helmet provider
- `/app/frontend/src/components/Layout.jsx` — nav + footer shell
- `/app/frontend/src/components/Seo.jsx` — per-page helmet wrapper
- `/app/frontend/src/pages/*.jsx` — Home, StarCertified, SantaAna, Fullerton, Faq, Contact, NotFound
- `/app/frontend/src/site.css` — all site styles
- `/app/frontend/public/{sitemap.xml,robots.txt,favicon*,og-image.jpg,mascot.png,site.webmanifest}`

## Backlog
- P1: Real phone number from owner (currently placeholder 714-555-0000)
- P1: Add 1–2 real photos of the shop / team
- P2: Booking/lead form (name + phone + preferred time) → email/SMS notification
- P2: Google Reviews embed / testimonials section
- P2: More location landing pages (Yorba Linda, Anaheim, Brea)
- P2: Blog (e.g., "What to bring to your smog check", "What is a gross polluter")
