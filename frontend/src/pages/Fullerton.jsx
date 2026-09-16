import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "@/components/Seo";

const ADDRESS = "144 S Bradford Ave, Placentia, CA 92870";
const DIR_FROM_FULLERTON = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
  "Fullerton, CA"
)}&destination=${encodeURIComponent(ADDRESS)}`;
const CSUF_PHOTO = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Cal_State_Fullerton_Student_Recreation_Center_%28Fullerton%2C_CA%29.jpg";
const CSUF_SOURCE = "https://commons.wikimedia.org/wiki/File:Cal_State_Fullerton_Student_Recreation_Center_(Fullerton,_CA).jpg";

export default function Fullerton() {
  return (
    <>
      <Seo
        title="Fullerton Smog Check | STAR Test-Only | In & Out Smog"
        description="Need a smog check near Fullerton? Visit our nearby STAR-Certified Test-Only station in Placentia for fast service, walk-ins, and no repair upsells."
        path="/fullerton-smog-check"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fullerton Smog Check — STAR Certified Test-Only",
          serviceType: "STAR Certified Test-Only Smog Check",
          description: "STAR-Certified Test-Only smog inspections for Fullerton drivers at In & Out Smog Check in neighboring Placentia.",
          provider: {
            "@type": "AutomotiveBusiness",
            name: "In & Out Smog Check",
            telephone: "+1-714-993-1660",
            url: `${SITE_URL}/`,
            address: {
              "@type": "PostalAddress",
              streetAddress: "144 S Bradford Ave",
              addressLocality: "Placentia",
              addressRegion: "CA",
              postalCode: "92870",
              addressCountry: "US",
            },
          },
          areaServed: { "@type": "City", name: "Fullerton" },
        }}
      />

      <main className="placentia-page">
        <section className="pl-hero">
          <div className="pl-hero-copy">
            <p className="pl-kicker">STAR CERTIFIED · TEST-ONLY STATION</p>
            <p className="pl-local">SERVING FULLERTON DRIVERS SINCE 1999</p>
            <h1>Fullerton Smog Check.<br /><span>Quick Drive. Quick Test.</span></h1>
            <p className="pl-lead">Our shop is just east of Fullerton in neighboring Placentia at <strong>144 S Bradford Ave</strong>. Walk in for fast smog testing with no repair upsells.</p>
            <div className="pl-actions">
              <a className="pl-btn pl-btn-red" href={DIR_FROM_FULLERTON} target="_blank" rel="noopener noreferrer">Directions from Fullerton →</a>
              <a className="pl-btn pl-btn-outline" href="tel:+17149931660">Call (714) 993-1660</a>
            </div>
            <p className="pl-hours">Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM</p>
          </div>
          <figure className="pl-shop-photo">
            <img src="/photos/storefront-approved-final.jpg" alt="In & Out Smog Check storefront near Fullerton in Placentia" />
            <figcaption>144 S BRADFORD AVE · JUST EAST OF FULLERTON</figcaption>
          </figure>
        </section>

        <section className="pl-proof" aria-label="Smog station highlights">
          <div><strong>~10</strong><span>MINUTE<br />SMOG CHECKS</span></div>
          <div><strong>★</strong><span>STAR<br />CERTIFIED</span></div>
          <div><strong>25+</strong><span>YEARS SERVING<br />LOCAL DRIVERS</span></div>
          <div><strong>0</strong><span>REPAIR<br />UPSELLS</span></div>
        </section>

        <section className="pl-service-split pl-local-split">
          <figure>
            <img src="/photos/inspection-bay.jpg" alt="Vehicle inspection bay at In & Out Smog Check near Fullerton" />
            <figcaption>FAST TEST-ONLY SERVICE FOR FULLERTON DRIVERS</figcaption>
          </figure>
          <div>
            <p className="pl-label">EASY FROM EAST FULLERTON</p>
            <h2>Chapman Ave brings you straight toward us.</h2>
            <p>From east Fullerton and the Cal State Fullerton area, head east on Chapman Ave toward Placentia, then turn south on Bradford Ave. Our shop is right off that main route.</p>
            <div className="pl-local-points">
              <span><b>CSUF</b> A familiar starting point for east Fullerton drivers</span>
              <span><b>CHAPMAN AVE</b> Main route east toward Placentia</span>
              <span><b>BRADFORD AVE</b> Final turn to our smog station</span>
            </div>
          </div>
        </section>

        <section className="pl-water-tower">
          <div className="pl-water-copy">
            <p className="pl-label">A FULLERTON LANDMARK</p>
            <h2>Coming from Cal State Fullerton? You’re already close.</h2>
            <p>Cal State Fullerton is one of the easiest landmarks to recognize on the east side of Fullerton. From the CSUF area, stay on Chapman Ave heading east into Placentia, then turn south on Bradford Ave.</p>
            <p>That makes our Test-Only station especially convenient for students, staff, faculty, and nearby residents who want a straightforward smog check without a repair sales pitch.</p>
            <a className="pl-btn pl-btn-red" href={DIR_FROM_FULLERTON} target="_blank" rel="noopener noreferrer">Directions from Fullerton →</a>
          </div>
          <figure>
            <img src={CSUF_PHOTO} alt="Cal State Fullerton Student Recreation Center in Fullerton, California" loading="lazy" />
            <figcaption>CAL STATE FULLERTON · FULLERTON · PHOTO: SPATMS / CC BY-SA 4.0</figcaption>
          </figure>
        </section>

        <section className="pl-services">
          <p className="pl-label">WHAT WE TEST</p>
          <h2>Smog Check Services for Fullerton Drivers</h2>
          <div className="pl-service-grid">
            <article><span>01</span><h3>Registration Renewal</h3><p>Bring your DMV renewal notice and we’ll handle the required smog inspection.</p></article>
            <article><span>02</span><h3>STAR-Directed Vehicles</h3><p>If your DMV notice requires a STAR station, our STAR-Certified Test-Only shop can perform the inspection.</p></article>
            <article><span>03</span><h3>Change of Ownership</h3><p>Buying or selling a vehicle? We handle California transfer smog inspections.</p></article>
            <article><span>04</span><h3>Gas, Hybrid & Diesel</h3><p>We inspect eligible 1976+ gasoline, hybrid and alternative-fuel vehicles, plus eligible 1998+ diesel vehicles up to 14,000 lbs GVWR.</p></article>
          </div>
          <p className="pl-star-link">Need more information about STAR requirements? <Link to="/star-certified-smog">See our STAR-certified smog guide →</Link></p>
        </section>

        <section className="pl-local-history">
          <div className="pl-history-copy">
            <p className="pl-label">SERVING NORTH ORANGE COUNTY</p>
            <h2>Local shop. Short drive. No appointment.</h2>
            <p>In & Out Smog Check has served drivers from Fullerton, Placentia, Yorba Linda and nearby communities since 1999. Drive in, get tested, and get back on the road.</p>
            <a className="pl-btn pl-btn-black" href={DIR_FROM_FULLERTON} target="_blank" rel="noopener noreferrer">Get Directions →</a>
          </div>
        </section>

        <section className="pl-find">
          <div>
            <p className="pl-label">EASY TO FIND</p>
            <h2>144 S Bradford Ave</h2>
            <p>From Fullerton, take Chapman Ave east into Placentia, then turn south on Bradford Ave. Our shop is right off the main route.</p>
          </div>
          <div className="pl-find-actions">
            <a className="pl-btn pl-btn-red" href={DIR_FROM_FULLERTON} target="_blank" rel="noopener noreferrer">Directions from Fullerton →</a>
            <a className="pl-btn pl-btn-outline-dark" href="tel:+17149931660">Call Us</a>
          </div>
        </section>

        <section className="pl-seo">
          <h2>Fullerton’s Nearby STAR Test-Only Smog Station</h2>
          <p>In & Out Smog Check serves Fullerton drivers from our Placentia shop at <strong>144 S Bradford Ave</strong>. We provide STAR-certified Test-Only inspections, registration-renewal smog checks, change-of-ownership inspections, and eligible gasoline, hybrid and diesel testing.</p>
          <p>We also serve drivers looking for a <Link to="/placentia-smog-check">Placentia smog check</Link> or <Link to="/yorba-linda-smog-check">Yorba Linda smog check</Link>.</p>
          <p style={{fontSize:"12px",color:"#666"}}>Landmark photo source: <a href={CSUF_SOURCE} target="_blank" rel="noopener noreferrer">Spatms, Wikimedia Commons</a> · CC BY-SA 4.0.</p>
        </section>
      </main>
    </>
  );
}
