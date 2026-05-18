# In & Out Smog Check — Landing Page

## Problem Statement
User provided index.html, style.css, and mascot.png (a yellow Honda cartoon car) and asked to build the website from these assets.

## Implementation (Jan 2026)
- Migrated user's static HTML into React component (`/app/frontend/src/App.js`).
- Loaded user's CSS verbatim as `/app/frontend/src/site.css` (imported by App).
- Placed `mascot.png` in `/app/frontend/public/` and reference it as `/mascot.png`.
- Cleared default React boilerplate styles (`App.css`, `index.css`).
- Sections: Hero (logo + nav + mascot), Services (3 cards), Banner CTA, Contact (location/phone/hours), Footer.
- data-testid attributes added on all interactive/info elements.

## Tech Stack
- React (CRA + craco) frontend on port 3000 via supervisor.
- Backend (FastAPI) untouched — not used by this site.

## Backlog (P1/P2)
- Replace placeholder phone `(714) 555-0000` with real number.
- Add real address + Google Maps embed.
- Optional contact form (with backend persistence + email notification).
- SEO meta tags, OG image, favicon.

## Files
- `/app/frontend/src/App.js` — page markup
- `/app/frontend/src/site.css` — site styles
- `/app/frontend/public/mascot.png` — mascot image
