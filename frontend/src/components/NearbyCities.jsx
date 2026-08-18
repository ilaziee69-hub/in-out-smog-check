import { Link } from "react-router-dom";

/**
 * "Nearby Cities" — local SEO grid.
 * Each city gets a hoverable card with a direction link.
 * Placentia + Fullerton link to their dedicated landing pages.
 */
const CITIES = [
  { name: "Placentia", note: "Home city · 5 min", to: "/placentia-smog-check", internal: true },
  { name: "Fullerton", note: "5 min east", to: "/fullerton-smog-check", internal: true },
  { name: "Yorba Linda", note: "10 min north" },
  { name: "Brea", note: "10 min north" },
  { name: "Anaheim", note: "10 min south" },
  { name: "Orange", note: "15 min south" },
  { name: "La Habra", note: "15 min west" },
];

const dirUrl = (origin) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin + ", CA"
  )}&destination=${encodeURIComponent("144 S Bradford Ave, Placentia, CA 92870")}`;

export default function NearbyCities() {
  return (
    <section
      className="nearby-cities"
      data-testid="nearby-cities-section"
      aria-labelledby="nearby-cities-heading"
    >
      <div className="nc-inner">
        <span className="nc-eyebrow" data-testid="nc-eyebrow">📍 Service Area</span>
        <h2 id="nearby-cities-heading" data-testid="nc-heading">
          Serving Drivers Across{" "}
          <span className="accent">North Orange County</span>
        </h2>
        <p className="nc-lead">
          A short drive from just about anywhere in North OC. Tap your city to
          get turn-by-turn directions to our shop at 144 S Bradford Ave.
        </p>

        <div className="nc-grid" data-testid="nc-grid">
          <Link
            to="/placentia-smog-check"
            className="nc-card nc-card-home"
            data-testid="nc-card-placentia"
          >
            <div className="nc-name">Placentia</div>
            <div className="nc-note">Home city · 5 min</div>
            <span className="nc-arrow" aria-hidden="true">→</span>
          </Link>
          <Link
            to="/fullerton-smog-check"
            className="nc-card"
            data-testid="nc-card-fullerton"
          >
            <div className="nc-name">Fullerton</div>
            <div className="nc-note">5 min east</div>
            <span className="nc-arrow" aria-hidden="true">→</span>
          </Link>
          <Link
            to="/yorba-linda-smog-check"
            className="nc-card"
            data-testid="nc-card-yorba-linda"
          >
            <div className="nc-name">Yorba Linda</div>
            <div className="nc-note">10 min north</div>
            <span className="nc-arrow" aria-hidden="true">→</span>
          </Link>
          <a
            href={dirUrl("Brea")}
            target="_blank"
            rel="noopener noreferrer"
            className="nc-card"
            data-testid="nc-card-brea"
          >
            <div className="nc-name">Brea</div>
            <div className="nc-note">10 min north</div>
            <span className="nc-arrow" aria-hidden="true">→</span>
          </a>
          <a
            href={dirUrl("Anaheim")}
            target="_blank"
            rel="noopener noreferrer"
            className="nc-card"
            data-testid="nc-card-anaheim"
          >
            <div className="nc-name">Anaheim</div>
            <div className="nc-note">10 min south</div>
            <span className="nc-arrow" aria-hidden="true">→</span>
          </a>
          <a
            href={dirUrl("Orange")}
            target="_blank"
            rel="noopener noreferrer"
            className="nc-card"
            data-testid="nc-card-orange"
          >
            <div className="nc-name">Orange</div>
            <div className="nc-note">15 min south</div>
            <span className="nc-arrow" aria-hidden="true">→</span>
          </a>
          <a
            href={dirUrl("La Habra")}
            target="_blank"
            rel="noopener noreferrer"
            className="nc-card"
            data-testid="nc-card-la-habra"
          >
            <div className="nc-name">La Habra</div>
            <div className="nc-note">15 min west</div>
            <span className="nc-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
