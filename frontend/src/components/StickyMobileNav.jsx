/**
 * Sticky bottom mobile nav — static links to avoid client-side JS on the homepage.
 * Hidden on ≥841px (desktop), always visible on mobile.
 */
export default function StickyMobileNav() {
  return (
    <nav className="sticky-mobile-nav" data-testid="sticky-mobile-nav" aria-label="Quick actions">
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870"
        target="_blank"
        rel="noopener noreferrer"
        className="smn-item"
        data-testid="smn-directions"
      >
        <span className="smn-icon" aria-hidden="true">📍</span>
        <span className="smn-label">Directions</span>
      </a>
      <a
        href="tel:+17149931660"
        className="smn-item smn-primary"
        data-testid="smn-call"
      >
        <span className="smn-icon" aria-hidden="true">📞</span>
        <span className="smn-label">Call</span>
      </a>
      <a
        href="/smog-check-pricing"
        className="smn-item"
        data-testid="smn-pricing"
      >
        <span className="smn-icon" aria-hidden="true">💲</span>
        <span className="smn-label">Pricing</span>
      </a>
      <a
        href="/#contact"
        className="smn-item"
        data-testid="smn-hours"
      >
        <span className="smn-icon" aria-hidden="true">⏰</span>
        <span className="smn-label">Hours</span>
      </a>
    </nav>
  );
}
