import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reviews from "@/components/Reviews";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870";
const mapEmbedUrl = "https://www.google.com/maps?q=144+S+Bradford+Ave,+Placentia,+CA+92870&output=embed";

export default function Placentia() {
  return (
    <>
      <Seo
        title="Smog Check in Placentia, CA | STAR Test-Only | In & Out"
        description="Smog check in Placentia. STAR-certified, test-only, walk-ins welcome, no repair upsells. Open Mon–Sat, about 10 minutes. Call (714) 993-1660."
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
            <h1>Smog Check in Placentia:<br /><span>STAR Test-Only, No Repair Upsells</span></h1>
            <p className="pl-local">In. Out. Done.</p>
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

        <section className="pl-service-split">
          <figure>
            <img src="/_next/image?url=%2Fphotos%2Finspection-bay.jpg&w=828&q=75" width="864" height="648" alt="Vehicle inspection bay at In & Out Smog Check in Placentia" />
            <figcaption>WHERE PLACENTIA GETS SMOGGED</figcaption>
          </figure>
          <div>
            <p className="pl-label">SMOG STATION FIRST</p>
            <h2>Fast service. Honest testing.</h2>
            <p>We’re a STAR-certified Test-Only station in the heart of Placentia. Whether you live in Old Town, near Tri-City Park, by Valencia High School, or toward the Yorba Linda border, we make your required emissions inspection quick and simple.</p>
            <div className="pl-mini-grid">
              <article><b>⚡</b><h3>About 10 Minutes</h3><p>Most inspections are completed quickly so you can get back on the road.</p></article>
              <article><b>★</b><h3>STAR Certified</h3><p>If your DMV notice requires a STAR station, we’ve got you covered.</p></article>
              <article><b>🚗</b><h3>Walk-Ins Welcome</h3><p>No appointment needed. Drive in during business hours.</p></article>
              <article><b>✓</b><h3>No Repair Upsells</h3><p>Test-only means we focus on one thing: an honest emissions inspection.</p></article>
            </div>
          </div>
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

        <Reviews />

        <section className="pl-find">
          <div>
            <p className="pl-label">EASY TO FIND</p>
            <h2>144 S Bradford Ave</h2>
            <p>Close to Chapman Ave, about a block from the Placentia water tower. Look for the In &amp; Out Smog Check storefront on S Bradford Ave. Easy in-and-out access with room for cars, trucks and SUVs.</p>
          </div>
          <div className="pl-find-actions">
            <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
            <a className="pl-btn pl-btn-outline-dark" href="tel:+17149931660">Call Us</a>
          </div>
        </section>

        <section aria-label="Map to In & Out Smog Check" style={{ padding: "0 20px 48px", maxWidth: "1180px", margin: "0 auto" }}>
          <iframe
            title="Map to In & Out Smog Check in Placentia"
            src={mapEmbedUrl}
            width="100%"
            height="360"
            style={{ border: 0, borderRadius: "16px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>

        <section className="pl-seo">
          <h2>Placentia’s Local Smog Check Station</h2>
          <p>In &amp; Out Smog Check provides STAR-certified Test-Only smog inspections for Placentia residents, including registration renewal, change-of-ownership, out-of-state registration, eligible diesel vehicles, hybrids and plug-in hybrids.</p>
          <p>We’re located at <strong>144 S Bradford Ave, Placentia, CA 92870</strong>. Open <strong>Monday–Friday 8AM–5PM</strong> and <strong>Saturday 8AM–3PM</strong>. No appointment needed. <Link to="/smog-check-pricing">See our current smog check prices</Link> before you drive in. We also serve drivers from <Link to="/yorba-linda-smog-check">Yorba Linda</Link> and <Link to="/fullerton-smog-check">Fullerton</Link>.</p>
        </section>
      </main>
    </>
  );
}
