/**
 * "Finding Us Is Easy" — full location section.
 */
export default function LocationVerify() {
  const ADDRESS = "144 S Bradford Ave, Placentia, CA 92870";
  const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
  const MAPS_DIR = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

  return (
    <section className="location-verify" data-testid="location-verify-section" id="finding-us" aria-labelledby="finding-us-heading">
      <div className="lv-inner">
        <div className="lv-header">
          <span className="lv-eyebrow" data-testid="lv-eyebrow">📍 Finding Us Is Easy</span>
          <h2 id="finding-us-heading" data-testid="lv-heading">Make Sure You&rsquo;re at the{" "}<span className="accent">Right Shop</span></h2>
          <p className="lv-lead">If you searched for <em>In &amp; Out Smog Check</em>, please double-check your GPS before heading over. Our shop is on{" "}<strong className="hl">S&nbsp;Bradford&nbsp;Ave</strong> — south of E&nbsp;Chapman, at the corner of Center&nbsp;St.</p>
        </div>

        <figure className="lv-illmap" data-testid="lv-illmap">
          <img src="/photos/illustrated-map-v2.png" width="1536" height="1024" alt="Illustrated map showing In & Out Smog Check at Bradford Ave and Center St in Placentia" loading="lazy" decoding="async" />
          <figcaption className="lv-illmap-caption">Our own illustrated map — showing exactly where to go.</figcaption>
        </figure>

        <div className="lv-warning" data-testid="lv-warning" role="note" style={{ background: "#fff", color: "#111", opacity: 1 }}>
          <span className="lv-warning-icon" aria-hidden="true">⚠️</span>
          <div style={{ color: "#111", opacity: 1 }}><strong style={{ color: "#000", opacity: 1 }}>OC Smog Lab by Valvoline is NOT us. We are In &amp; Out Smog Check at Bradford &amp; Center.</strong>{" "}Continue south on <strong style={{ color: "#000", opacity: 1 }}>Bradford&nbsp;Ave</strong> to{" "}<strong style={{ color: "#000", opacity: 1 }}>Center&nbsp;St</strong>.</div>
        </div>

        <div className="lv-map" data-testid="lv-map">
          <iframe title="Google Map showing In & Out Smog Check at 144 S Bradford Ave, Placentia, CA" src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="lv-map-pill" data-testid="lv-map-pill"><span className="dot" /> Look for the pin on{" "}<strong>S Bradford Ave</strong></div>
        </div>

        <div className="lv-directions-row" data-testid="lv-directions-row">
          <a href={MAPS_DIR} target="_blank" rel="noopener noreferrer" className="lv-directions-btn" data-testid="lv-directions-cta"><span className="lv-directions-icon" aria-hidden="true">🧭</span><span><span className="lv-directions-title">Get Directions to In &amp; Out Smog Check</span><span className="lv-directions-sub">144 S Bradford Ave, Placentia, CA 92870</span></span></a>
          <a href="tel:+17149931660" className="lv-call-btn" data-testid="lv-call-cta"><span aria-hidden="true">📞</span> (714) 993-1660</a>
        </div>

        <div className="lv-address-card" data-testid="lv-address-card">
          <div className="lv-address-main"><div className="lv-pin" aria-hidden="true">📍</div><div><div className="lv-address-line1" data-testid="lv-address-line">144 S Bradford Ave</div><div className="lv-address-line2">Placentia, CA 92870</div></div></div>
          <div className="lv-verify-note-inline" data-testid="lv-verify-note" style={{ color: "#222", opacity: 1 }}>✅ Please verify <strong>&ldquo;144 S Bradford Ave&rdquo;</strong>{" "}in your GPS before driving over.</div>
        </div>

        <div className="lv-photos-header" data-testid="lv-how-to-spot-heading"><h3>How to Spot Us</h3><p>See our storefront, recognize the nearby landmarks, and pull into the correct bay.</p></div>
        <div className="lv-photos" data-testid="lv-photos">
          <figure className="lv-photo lv-photo-lead" data-testid="lv-photo-storefront">
            <div className="lv-photo-inner"><img src="/photos/storefront-approved-final.jpg" width="1147" height="828" alt="In & Out Smog Check storefront at 144 S Bradford Ave in Placentia" loading="lazy" decoding="async" /><span className="lv-photo-tag">LOOK FOR OUR SHOP</span></div>
            <figcaption>Look for our white brick building with the large red SMOG CHECK ONLY CENTER sign at 144 S Bradford Ave.</figcaption>
          </figure>

          <figure className="lv-photo" data-testid="lv-photo-bradford"><div className="lv-photo-inner"><img src="/photos/bradford-center.jpg" width="864" height="648" alt="Bradford Ave and Center St near In & Out Smog Check in Placentia" loading="lazy" decoding="async" /><span className="lv-photo-tag">BRADFORD &amp; CENTER</span></div><figcaption>Turn near this intersection</figcaption></figure>

          <figure className="lv-photo" data-testid="lv-photo-tonys"><div className="lv-photo-inner"><img src="/photos/tonys-deli.jpg" width="864" height="648" alt="Tony's Deli on Bradford Ave, a landmark north of In & Out Smog Check" loading="lazy" decoding="async" /><span className="lv-photo-tag">TONY&rsquo;S DELI</span></div><figcaption>Tony&rsquo;s Deli is a nearby landmark just north of us on Bradford Ave.</figcaption></figure>

          <figure className="lv-photo" data-testid="lv-photo-farolito"><div className="lv-photo-inner"><img src="/photos/el-farolito.jpg" width="864" height="648" alt="El Farolito across Center St from In & Out Smog Check in Placentia" loading="lazy" decoding="async" /><span className="lv-photo-tag">ACROSS FROM EL FAROLITO</span></div><figcaption>El Farolito is directly across the street</figcaption></figure>

          <figure className="lv-photo" data-testid="lv-photo-senior"><div className="lv-photo-inner"><img src="/photos/senior-center.jpg" width="864" height="648" alt="Placentia Senior Center across from In & Out Smog Check near Bradford Ave" loading="lazy" decoding="async" /><span className="lv-photo-tag">SENIOR CENTER / OLD LIBRARY</span></div><figcaption>The Placentia Senior Center / Old Library is across from us near Bradford &amp; Center.</figcaption></figure>

          <figure className="lv-photo" data-testid="lv-photo-licensed"><div className="lv-photo-inner"><img src="/photos/licensed-bay-sign.jpg" width="864" height="648" alt="Bay entrance at In & Out Smog Check in Placentia" loading="lazy" decoding="async" /><span className="lv-photo-tag">STOP RIGHT IN FRONT OF THE BAY DOOR</span></div><figcaption>A technician will come greet you and begin the test.</figcaption></figure>
        </div>
      </div>
    </section>
  );
}
