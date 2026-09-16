import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870";
const bradfordHouse = "https://commons.wikimedia.org/wiki/Special:Redirect/file/A.%20S.%20Bradford%20House.JPG";
const citrusGrove = "https://commons.wikimedia.org/wiki/Special:Redirect/file/Citrus%20groves%2C%20Golden%20Ave.%2C%20Placentia%2C%20June%201961.jpg";
const waterTower = "data:image/jpeg;base64,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";

export default function Placentia() {
  return (
    <>
      <Seo
        title="Placentia Smog Check | STAR Test-Only | In & Out Smog"
        description="Fast STAR-certified Test-Only smog checks in Placentia. Walk-ins welcome, upfront pricing, no repair upsells, and one free retest within 30 days."
        path="/placentia-smog-check"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "In & Out Smog Check — Placentia",
          telephone: "+1-714-993-1660",
          areaServed: "Placentia, CA",
          address: {
            "@type": "PostalAddress",
            streetAddress: "144 S Bradford Ave",
            addressLocality: "Placentia",
            addressRegion: "CA",
            postalCode: "92870",
            addressCountry: "US",
          },
          sameAs: ["https://www.google.com/maps/search/?api=1&query=In+%26+Out+Smog+Check%2C+144+S+Bradford+Ave%2C+Placentia%2C+CA+92870"],
        }}
      />

      <main className="placentia-page">
        <section className="pl-hero">
          <div className="pl-hero-copy">
            <p className="pl-kicker">STAR CERTIFIED · TEST-ONLY STATION</p>
            <p className="pl-local">YOUR LOCAL SMOG STATION IN PLACENTIA</p>
            <h1>Placentia Smog Check.<br /><span>In. Out. Done.</span></h1>
            <p className="pl-lead">Fast, honest smog checks right here on S Bradford Ave. We don’t sell repairs, so there’s no incentive to fail your car — just straightforward testing from a local shop serving Placentia since 1999.</p>
            <div className="pl-actions">
              <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
              <a className="pl-btn pl-btn-outline" href="tel:+17149931660">Call (714) 993-1660</a>
            </div>
            <p className="pl-hours">Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM</p>
          </div>
          <figure className="pl-shop-photo">
            <img src="/photos/storefront-approved-final.jpg" alt="In & Out Smog Check storefront on S Bradford Ave in Placentia" />
            <figcaption>144 S BRADFORD AVE · PLACENTIA</figcaption>
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
            <img src="/photos/inspection-bay.jpg" alt="Vehicle inspection bay at In & Out Smog Check in Placentia" />
            <figcaption>WHERE PLACENTIA RESIDENTS HAVE BEEN GETTING THEIR SMOG DONE FOR OVER 25 YEARS</figcaption>
          </figure>
          <div>
            <p className="pl-label">RIGHT HERE IN PLACENTIA</p>
            <h2>Easy to find on Bradford Ave.</h2>
            <p>Our shop is at 144 S Bradford Ave, close to Chapman Ave and just a few minutes south of Valencia High School. If you know Valencia High or the Placentia water tower, you already know the neighborhood.</p>
            <div className="pl-local-points">
              <span><b>VALENCIA HS</b> Just minutes north on Bradford Ave</span>
              <span><b>WATER TOWER</b> About a block from our shop</span>
              <span><b>SINCE 1999</b> Serving local drivers for 25+ years</span>
            </div>
          </div>
        </section>

        <section className="pl-water-tower">
          <div className="pl-water-copy">
            <p className="pl-label">A PLACENTIA LANDMARK</p>
            <h2>See the water tower? We’re right nearby.</h2>
            <p>The Placentia water tower is one of the easiest local landmarks to recognize. In &amp; Out Smog Check is about a block away at <strong>144 S Bradford Ave</strong>.</p>
            <p>Coming from Valencia High School? Head south on Bradford Ave and you’ll be at the shop in just a few minutes.</p>
            <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
          </div>
          <figure>
            <img src={waterTower} alt="Placentia water tower near In & Out Smog Check on Bradford Avenue" />
            <figcaption>A PLACENTIA LANDMARK · JUST ABOUT A BLOCK FROM IN & OUT SMOG CHECK</figcaption>
          </figure>
        </section>

        <section className="pl-services">
          <p className="pl-label">WHAT WE TEST</p>
          <h2>Smog Check Services for Placentia Drivers</h2>
          <div className="pl-service-grid">
            <article><span>01</span><h3>Registration Renewal</h3><p>The standard smog inspection required for many California registration renewals.</p></article>
            <article><span>02</span><h3>Change of Ownership</h3><p>Buying or selling a vehicle? Get the required transfer smog handled locally.</p></article>
            <article><span>03</span><h3>Out-of-State Vehicles</h3><p>New to California? Bring your vehicle in for its California emissions inspection.</p></article>
            <article><span>04</span><h3>Gas, Hybrid & Diesel</h3><p>We inspect eligible 1976+ gasoline, hybrid and alternative-fuel vehicles, plus eligible 1998+ diesel vehicles up to 14,000 lbs GVWR.</p></article>
          </div>
          <p className="pl-star-link">Need a DMV-required STAR inspection? <Link to="/star-certified-smog">Learn about our STAR-certified smog checks →</Link></p>
        </section>

        <section className="pl-local-history">
          <div className="pl-history-copy">
            <p className="pl-label">PROUDLY PLACENTIA</p>
            <h2>Local roots. Local service.</h2>
            <p>Placentia has grown from its early citrus and railroad roots into the community we serve today. In &amp; Out Smog Check has been part of that local story since 1999.</p>
            <a className="pl-btn pl-btn-black" href={directionsUrl} target="_blank" rel="noopener noreferrer">Drive to the Smog Station →</a>
          </div>
          <div className="pl-history-images">
            <figure><img src={bradfordHouse} alt="Historic A. S. Bradford House in Placentia" loading="lazy" /><figcaption>A. S. BRADFORD HOUSE · PLACENTIA</figcaption></figure>
            <figure><img src={citrusGrove} alt="Historic citrus groves in Placentia" loading="lazy" /><figcaption>PLACENTIA CITRUS GROVES · 1961</figcaption></figure>
          </div>
        </section>

        <section className="pl-find">
          <div>
            <p className="pl-label">EASY TO FIND</p>
            <h2>144 S Bradford Ave</h2>
            <p>Look for In & Out Smog Check between E Chapman Ave and E Crowther Ave. From Valencia High School, head south on Bradford Ave. The Placentia water tower is about a block from the shop.</p>
          </div>
          <div className="pl-find-actions">
            <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
            <a className="pl-btn pl-btn-outline-dark" href="tel:+17149931660">Call Us</a>
          </div>
        </section>

        <section className="pl-seo">
          <h2>Placentia’s Local Smog Check Station</h2>
          <p>In & Out Smog Check provides STAR-certified Test-Only smog inspections for Placentia residents, including registration renewal, change-of-ownership, out-of-state registration, eligible diesel vehicles, hybrids and plug-in hybrids.</p>
          <p>We’re located at <strong>144 S Bradford Ave, Placentia, CA 92870</strong>. Open <strong>Monday–Friday 8AM–5PM</strong> and <strong>Saturday 8AM–3PM</strong>. No appointment needed. We also serve drivers from <Link to="/yorba-linda-smog-check">Yorba Linda</Link> and <Link to="/fullerton-smog-check">Fullerton</Link>.</p>
        </section>
      </main>
    </>
  );
}
