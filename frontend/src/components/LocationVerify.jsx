/**
 * "Finding Us Is Easy" — full location section.
 * Order per spec:
 *   1) Illustrated map FIRST (image used AS-IS, no crop/redraw/overlay)
 *   2) Warning banner: OC Smog Shop by Valvoline is NOT us
 *   3) Google Map embed
 *   4) Large "Get Directions" CTA
 *   5) Address card + real storefront/sign/driveway photos + landmarks
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

        {/* 1) ILLUSTRATED MAP — used exactly as provided, no cropping or overlay */}
        <figure className="lv-illmap" data-testid="lv-illmap">
          <picture>
            <source srcSet="/photos/illustrated-map.webp" type="image/webp" />
            <img
              src="/photos/illustrated-map.png"
              alt="Illustrated street map of Bradford Ave and Chapman Ave in Placentia showing the exact location of In & Out Smog Check at Bradford & Center St. The map labels the Valvoline plaza (OC Smog Shop is NOT us), the church, fire station, Tony's Deli, El Farolito, and other nearby landmarks so drivers can identify the correct shop."
              width="1402"
              height="1122"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <figcaption className="lv-illmap-caption">
            Our own illustrated map — showing exactly where to go.
          </figcaption>
        </figure>

        {/* 2) WARNING BANNER */}
        <div className="lv-warning" data-testid="lv-warning" role="note">
          <span className="lv-warning-icon" aria-hidden="true">⚠️</span>
          <div>
            <strong>OC Smog Shop by Valvoline is NOT In &amp; Out Smog Check.</strong>
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

        {/* 6) REAL PHOTOS */}
        <div className="lv-photos" data-testid="lv-photos">
          <figure className="lv-photo" data-testid="lv-photo-storefront">
            <div className="lv-photo-inner">
              <img
                src="/photos/storefront.webp"
                alt="In & Out Smog Check storefront on S Bradford Ave in Placentia — white brick building with red-trim SMOG CHECK ONLY CENTER sign and STAR Certified badge"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">Storefront</span>
            </div>
            <figcaption>This is our building</figcaption>
          </figure>

          <figure className="lv-photo" data-testid="lv-photo-sign">
            <div className="lv-photo-inner">
              <img
                src="/photos/sign.webp"
                alt="Close-up of the In & Out Smog Check red SMOG CHECK ONLY CENTER sign with STAR Certified badge"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">Our Sign</span>
            </div>
            <figcaption>Look for this sign</figcaption>
          </figure>

          <figure className="lv-photo" data-testid="lv-photo-driveway">
            <div className="lv-photo-inner">
              <img
                src="/photos/driveway.webp"
                alt="Wide concrete driveway and parking area at 144 S Bradford Ave — the view when pulling into In & Out Smog Check"
                loading="lazy"
                decoding="async"
              />
              <span className="lv-photo-tag">Driveway</span>
            </div>
            <figcaption>Pull in right here</figcaption>
          </figure>
        </div>

        {/* 7) STEP-BY-STEP LANDMARKS */}
        <div className="lv-landmarks" data-testid="lv-landmarks">
          <h3>How to spot us</h3>
          <ul>
            <li>
              <span className="lm-num">1</span>
              <div>
                <strong>From E Chapman Ave</strong>, turn{" "}
                <strong>south onto S Bradford Ave</strong> — not into the
                Valvoline plaza.
              </div>
            </li>
            <li>
              <span className="lm-num">2</span>
              <div>
                Continue south down Bradford past the notary, barber, and
                flower shop.
              </div>
            </li>
            <li>
              <span className="lm-num">3</span>
              <div>
                We&rsquo;re on the <strong>corner of Bradford &amp; Center St</strong>
                {" "}— look for the red <strong>SMOG CHECK ONLY CENTER</strong>{" "}
                sign and STAR Certified badge.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
