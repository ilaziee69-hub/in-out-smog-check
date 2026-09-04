/**
 * "Finding Us Is Easy" — full location section.
 * Order per spec:
 *   1) Illustrated map FIRST (image used AS-IS, no crop/redraw/overlay)
 *   2) Warning banner: OC Smog Lab by Valvoline is NOT us
 *   3) Google Map embed
 *   4) Large "Get Directions" CTA
 *   5) Address card
 *   6) Consolidated HOW TO SPOT US photo journey:
 *      Storefront → Bradford & Center → Tony's Deli → El Farolito
 *      → Senior Center / Old Library → California Licensed · STAR
 *      → Bay Entrance
 *   7) Step-by-step arrival list
 */
export default function LocationVerify() {
  const ADDRESS = "144 S Bradford Ave, Placentia, CA 92870";
  const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
  const MAPS_DIR = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

  return (
    <section
      className="location-verify"
      data-testid="location-verify-section"
      id="finding-us"
      aria-labelledby="finding-us-heading"
    >
      <div className="lv-inner">
        <div className="lv-header">
          <span className="lv-eyebrow" data-testid="lv-eyebrow">📍 Finding Us Is Easy</span>
          <h2 id="finding-us-heading" data-testid="lv-heading">
            Make Sure You&rsquo;re at the{" "}
            <span className="accent">Right Shop</span>
          </h2>
          <p className="lv-lead">
            If you searched for <em>In &amp; Out Smog Check</em>, please
            double-check your GPS before heading over. Our shop is on{" "}
            <strong className="hl">S&nbsp;Bradford&nbsp;Ave</strong> — south of
            E&nbsp;Chapman, at the corner of Center&nbsp;St.
          </p>
        </div>

        {/* 1) ILLUSTRATED MAP — corrected v2, used exactly as provided.
             Preserve full image (no crop/stretch/recolor). Aspect ratio held
             so the El Farolito row and OC SMOG LAB warning at the top of
             the map are never cut off. */}
        <figure className="lv-illmap" data-testid="lv-illmap">
          <img
            src="/photos/illustrated-map-v2.png"
            alt="Illustrated street map of Bradford Ave and Chapman Ave in Placentia showing the exact location of In & Out Smog Check at Bradford & Center St. The map labels the Valvoline plaza (OC Smog Lab is NOT us), the church, fire station, Tony's Deli, El Farolito, Senior Center, and other nearby landmarks so drivers can identify the correct shop."
            loading="lazy"
            decoding="async"
          />
          <figcaption className="lv-illmap-caption">
            Our own illustrated map — showing exactly where to go.
          </figcaption>
        </figure>

        {/* 2) WARNING BANNER */}
        <div className="lv-warning" data-testid="lv-warning" role="note">
          <span className="lv-warning-icon" aria-hidden="true">⚠️</span>
          <div>
            <strong>
              OC Smog Lab by Valvoline is NOT us. We are In &amp; Out Smog
              Check at Bradford &amp; Center.
            </strong>
            {" "}Continue south on <strong>Bradford&nbsp;Ave</strong> to{" "}
            <strong>Center&nbsp;St</strong>.
          </div>
        </div>

        {/* 3) REAL GOOGLE MAP */}
        <div className="lv-map" data-testid="lv-map">
          <iframe
            title="Google Map showing In & Out Smog Check at 144 S Bradford Ave, Placentia, CA"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="lv-map-pill" data-testid="lv-map-pill">
            <span className="dot" /> Look for the pin on{" "}
            <strong>S Bradford Ave</strong>
          </div>
        </div>

        {/* 4) LARGE GET DIRECTIONS CTA */}
        <div className="lv-directions-row" data-testid="lv-directions-row">
          <a
            href={MAPS_DIR}
            target="_blank"
            rel="noopener noreferrer"
            className="lv-directions-btn"
            data-testid="lv-directions-cta"
          >
            <span className="lv-directions-icon" aria-hidden="true">🧭</span>
            <span>
              <span className="lv-directions-title">
                Get Directions to In &amp; Out Smog Check
              </span>
              <span className="lv-directions-sub">
                144 S Bradford Ave, Placentia, CA 92870
              </span>
            </span>
          </a>
          <a
            href="tel:+17149931660"
            className="lv-call-btn"
            data-testid="lv-call-cta"
          >
            <span aria-hidden="true">📞</span> (714) 993-1660
          </a>
        </div>

        {/* 5) ADDRESS CARD */}
        <div className="lv-address-card" data-testid="lv-address-card">
          <div className="lv-address-main">
            <div className="lv-pin" aria-hidden="true">📍</div>
            <div>
              <div className="lv-address-line1" data-testid="lv-address-line">
                144 S Bradford Ave
              </div>
              <div className="lv-address-line2">Placentia, CA 92870</div>
            </div>
          </div>
          <div className="lv-verify-note-inline" data-testid="lv-verify-note">
            ✅ Please verify <strong>&ldquo;144 S Bradford Ave&rdquo;</strong>{" "}
            in your GPS before driving over.
          </div>
        </div>

        {/* 6) HOW TO SPOT US — one consolidated visual journey. Opens with
             the wide storefront (replacing the old "This Is Our Shop"
             section entirely), then walks the driver through the approach:
             intersection → nearby landmarks → your block → our signage →
             the bay entrance. No duplicate photos within this section. */}
        <div className="lv-photos-header" data-testid="lv-how-to-spot-heading">
          <h3>How to Spot Us</h3>
          <p>
            See our storefront, recognize the nearby landmarks, and pull into
            the correct bay.
          </p>
        </div>
        <div className="lv-photos" data-testid="lv-photos">
          <figure className="lv-photo lv-photo-lead" data-testid="lv-photo-storefront">
            <div className="lv-photo-inner">
              <img
                src="/photos/storefront.jpg"
                alt="Wide exterior of In & Out Smog Check white brick building with the large red SMOG CHECK ONLY CENTER and STAR Certified sign at 144 S Bradford Ave"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">LOOK FOR OUR SHOP</span>
            </div>
            <figcaption>
              Look for our white brick building with the large red SMOG CHECK
              ONLY CENTER sign at 144 S Bradford Ave.
            </figcaption>
          </figure>

          <figure className="lv-photo" data-testid="lv-photo-bradford">
            <div className="lv-photo-inner">
              <img
                src="/photos/bradford-center.jpg"
                alt="Bradford Avenue and Center Street intersection in Old Town Placentia — the turn-off toward In & Out Smog Check"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">BRADFORD &amp; CENTER</span>
            </div>
            <figcaption>Turn near this intersection</figcaption>
          </figure>

          <figure className="lv-photo" data-testid="lv-photo-tonys">
            <div className="lv-photo-inner">
              <img
                src="/photos/tonys-deli.jpg"
                alt="Tony's Deli storefront on Bradford Avenue in Placentia — a nearby landmark just north of In & Out Smog Check"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">TONY&rsquo;S DELI</span>
            </div>
            <figcaption>
              Tony&rsquo;s Deli is a nearby landmark just north of us on
              Bradford Ave.
            </figcaption>
          </figure>

          <figure className="lv-photo" data-testid="lv-photo-farolito">
            <div className="lv-photo-inner">
              <img
                src="/photos/el-farolito.jpg"
                alt="View from In & Out Smog Check across Center Street toward the El Farolito landmark"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">ACROSS FROM EL FAROLITO</span>
            </div>
            <figcaption>El Farolito is directly across the street</figcaption>
          </figure>

          <figure className="lv-photo" data-testid="lv-photo-senior">
            <div className="lv-photo-inner">
              <img
                src="/photos/senior-center.jpg"
                alt="Placentia Senior Center / Old Library building near Bradford Avenue and Center Street, across from In & Out Smog Check"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">SENIOR CENTER / OLD LIBRARY</span>
            </div>
            <figcaption>
              The Placentia Senior Center / Old Library is across from us near
              Bradford &amp; Center.
            </figcaption>
          </figure>

          <figure className="lv-photo" data-testid="lv-photo-licensed">
            <div className="lv-photo-inner">
              <img
                src="/photos/licensed-bay-sign.jpg"
                alt="California Licensed Smog Check and STAR Certified Test-Only signage at In & Out Smog Check, 144 S Bradford Ave"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">CALIFORNIA LICENSED &middot; STAR TEST-ONLY</span>
            </div>
            <figcaption>Confirm the California Licensed / STAR Test-Only signage</figcaption>
          </figure>

          <figure className="lv-photo" data-testid="lv-photo-bay-entrance">
            <div className="lv-photo-inner">
              <img
                src="/photos/bay-entrance.jpg"
                alt="Bay entrance at In & Out Smog Check, 144 S Bradford Ave in Placentia — where drivers pull in for their smog inspection"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">BAY ENTRANCE</span>
            </div>
            <figcaption>Pull straight into the bay — you&rsquo;re here</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
