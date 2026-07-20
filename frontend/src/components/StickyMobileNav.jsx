/**
 * Sticky bottom mobile nav — Directions | Call | Hours
 * Hidden on ≥841px (desktop), always visible on mobile.
 */
import { useState } from "react";

const HOURS_TEXT = [
  ["Monday", "8AM – 5PM"],
  ["Tuesday", "8AM – 5PM"],
  ["Wednesday", "8AM – 5PM"],
  ["Thursday", "8AM – 5PM"],
  ["Friday", "8AM – 5PM"],
  ["Saturday", "8AM – 3PM"],
  ["Sunday", "Closed"],
];

export default function StickyMobileNav() {
  const [hoursOpen, setHoursOpen] = useState(false);

  return (
    <>
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
        <button
          type="button"
          className="smn-item"
          onClick={() => setHoursOpen(true)}
          data-testid="smn-hours"
        >
          <span className="smn-icon" aria-hidden="true">⏰</span>
          <span className="smn-label">Hours</span>
        </button>
      </nav>

      {hoursOpen && (
        <div
          className="hours-sheet-backdrop"
          onClick={() => setHoursOpen(false)}
          data-testid="hours-sheet-backdrop"
        >
          <div
            className="hours-sheet"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Business hours"
            data-testid="hours-sheet"
          >
            <div className="hours-sheet-head">
              <h3>Open Hours</h3>
              <button
                type="button"
                aria-label="Close"
                className="hours-sheet-close"
                onClick={() => setHoursOpen(false)}
                data-testid="hours-sheet-close"
              >
                ×
              </button>
            </div>
            <ul className="hours-sheet-list">
              {HOURS_TEXT.map(([day, hrs]) => (
                <li key={day}>
                  <span>{day}</span>
                  <span className={hrs === "Closed" ? "closed" : ""}>{hrs}</span>
                </li>
              ))}
            </ul>
            <div className="hours-sheet-foot">
              📍 144 S Bradford Ave, Placentia, CA 92870
              <br />
              <a href="tel:+17149931660">(714) 993-1660</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
