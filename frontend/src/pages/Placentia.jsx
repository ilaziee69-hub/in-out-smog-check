import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import waterTower from "@/waterTowerImage";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870";

export default function Placentia() {
  return (
    <>
      <Seo
        title="STAR Test-Only Smog Station Placentia | In & Out Smog"
        description="Visit our STAR-certified Test-Only station on S Bradford Ave in Placentia. Walk-ins welcome, no repair upsells, and straightforward emissions testing."
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
            <h1>STAR Test-Only Smog Checks on Bradford Ave.<br /><span>In. Out. Done.</span></h1>
            <p className="pl-lead">Fast, honest smog checks right here on S Bradford Ave. We don’t sell repairs, so there’s no incentive to fail your car — just straightforward testing from a local shop serving Placentia since 1999.</p>
            <div className="pl-actions">
              <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
              <a className="pl-btn pl-btn-outline" href="tel:+17149931660">Call (714) 993-1660</a>
            </div>
            <p className="pl-hours">Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM</p>
          </div>
          <figure className="pl-shop-photo">
            <img src="/_next/image?url=%2Fphotos%2Fstorefront-approved-final.jpg&w=640&q=50" width="1147" height="828" alt="In & Out Smog Check storefront on S Bradford Ave in Placentia" />
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
            <img src="/_next/image?url=%2Fphotos%2Finspection-bay.jpg&w=828&q=75" width="864" height="648" alt="Vehicle inspection bay at In & Out Smog Check in Placentia" />
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
            <img src={waterTower} width="1500" height="844" alt="Placentia water tower near In & Out Smog Check on Bradford Avenue" loading="lazy" referrerPolicy="no-referrer" />
            <figcaption>A PLACENTIA LANDMARK · JUST ABOUT A BLOCK FROM IN & OUT SMOG CHECK</figcaption>
          </figure>
        </section>

        <section className="pl-services">
          <p className="pl-label">WHAT WE TEST</p>
          <h2>Test-Only Inspection Services on Bradford Ave</h2>
          <div className="pl-service-grid">
            <article><span>01</span><h3>Registration Renewal</h3><p>The standard smog inspection required for many California registration renewals.</p></article>
            <article><span>02</span><h3>Change of Ownership</h3><p>Buying or selling a vehicle? Get the required transfer smog handled locally.</p></article>
            <article><span>03</span><h3>Out-of-State Vehicles</h3><p>New to California? Bring your vehicle in for its California emissions inspection.</p></article>
            <article><span>04</span><h3>Gas, Hybrid & Diesel</h3><p>We inspect eligible 1976+ gasoline, hybrid and alternative-fuel vehicles, plus eligible 1998+ diesel vehicles up to 14,000 lbs GVWR.</p></article>
          </div>
          <p className="pl-star-link">Need a DMV-required STAR inspection? <Link to="/star-certified-smog">Learn about our STAR-certified smog checks →</Link></p>
        </section>

        <section className="pl-local-history pl-local-history-clean">
          <div className="pl-history-copy">
            <p className="pl-label">PROUDLY PLACENTIA</p>
            <h2>Local roots. Local service.</h2>
            <p>Placentia grew from citrus and railroad roots into the community we serve today. In &amp; Out Smog Check has been part of that local story since 1999.</p>
            <p className="pl-history-note"><strong>25+ years in Placentia.</strong> Same Bradford Ave neighborhood, straightforward smog testing, and no repair upsells.</p>
            <a className="pl-btn pl-btn-black" href={directionsUrl} target="_blank" rel="noopener noreferrer">Drive to the Smog Station →</a>
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
          <h2>What to Expect at Our Bradford Ave Test-Only Station</h2>
          <p>In & Out Smog Check provides STAR-certified Test-Only smog inspections for Placentia residents, including registration renewal, change-of-ownership, out-of-state registration, eligible diesel vehicles, hybrids and plug-in hybrids.</p>
          <p>We’re located at <strong>144 S Bradford Ave, Placentia, CA 92870</strong>. Open <strong>Monday–Friday 8AM–5PM</strong> and <strong>Saturday 8AM–3PM</strong>. No appointment needed. <Link to="/smog-check-pricing">See our current smog check prices</Link> before you drive in. We also serve drivers from <Link to="/yorba-linda-smog-check">Yorba Linda</Link> and <Link to="/fullerton-smog-check">Fullerton</Link>.</p>
        </section>
      </main>
    </>
  );
}
