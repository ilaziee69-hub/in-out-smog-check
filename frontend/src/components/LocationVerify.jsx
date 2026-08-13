/**
 * "Make Sure You're at the Right Shop" — location verification section.
 * Designed to reduce accidental visits to nearby shops without naming them.
 */
export default function LocationVerify() {
  const ADDRESS = "144 S Bradford Ave, Placentia, CA 92870";
  const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
  const MAPS_DIR = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

  return (
    <section className="location-verify" data-testid="location-verify-section" id="verify">
      <div className="lv-inner">
        <div className="lv-header">
          <span className="lv-eyebrow" data-testid="lv-eyebrow">📍 Before You Drive</span>
          <h2 data-testid="lv-heading">
            Make Sure You&apos;re at the <span className="accent">Right Shop</span>
          </h2>
          <p className="lv-lead">
            If you searched for <em>In &amp; Out Smog Check</em>, please double-check
            your GPS before heading over. Our shop is on{" "}
            <strong className="hl">S&nbsp;Bradford&nbsp;Ave</strong> — a quiet side
            street just south of E&nbsp;Chapman.
          </p>
        </div>

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
          <div className="lv-address-cta">
            <a
              href={MAPS_DIR}
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
              data-testid="lv-directions-btn"
            >
              Get Directions
            </a>
            <a
              href="tel:+17149931660"
              className="secondary"
              data-testid="lv-call-btn"
            >
              Call (714) 993-1660
            </a>
          </div>
        </div>

        <div className="lv-verify-note" data-testid="lv-verify-note">
          ✅ Please verify the address <strong>“144 S Bradford Ave”</strong> in
          your GPS before driving over.
        </div>

        <div className="lv-grid">
          <div className="lv-map" data-testid="lv-map">
            <iframe
              title="In & Out Smog Check exact location on S Bradford Ave"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="lv-map-pill" data-testid="lv-map-pill">
              <span className="dot" /> You&apos;re looking for the pin on{" "}
              <strong>S Bradford Ave</strong>
            </div>
          </div>

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
                  alt="Close-up of In & Out Smog Check red 'SMOG CHECK ONLY CENTER' sign with STAR Certified badge visible from the street"
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
        </div>

        <div className="lv-landmarks" data-testid="lv-landmarks">
          <h3>How to spot us</h3>
          <ul>
            <li>
              <span className="lm-num">1</span>
              <div>
                <strong>From E Chapman Ave</strong>, turn <strong>south onto
                S Bradford Ave</strong> — not the shop on Chapman.
              </div>
            </li>
            <li>
              <span className="lm-num">2</span>
              <div>
                Continue about half a block. We&apos;re on your{" "}
                <strong>left-hand side</strong>.
              </div>
            </li>
            <li>
              <span className="lm-num">3</span>
              <div>
                Look for the <strong>yellow In &amp; Out Smog Check mascot</strong>
                {" "}on our sign — pull straight into our driveway.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
