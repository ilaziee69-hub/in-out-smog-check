import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870";

export default function StarCertified() {
  return (
    <>
      <Seo
        title="STAR Test-Only Smog Check | Placentia, CA | In & Out Smog"
        description="Need a STAR smog check in Placentia? Visit our STAR-certified Test-Only station for fast service, upfront pricing, and no repair upsells."
        path="/star-certified-smog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "STAR Certified Test-Only Smog Check",
          provider: {
            "@type": "AutomotiveBusiness",
            name: "In & Out Smog Check",
            telephone: "+1-714-993-1660",
            address: {
              "@type": "PostalAddress",
              streetAddress: "144 S Bradford Ave",
              addressLocality: "Placentia",
              addressRegion: "CA",
              postalCode: "92870",
              addressCountry: "US",
            },
          },
          areaServed: "Orange County, California",
        }}
      />

      <main className="placentia-page">
        <section className="pl-hero">
          <div className="pl-hero-copy">
            <p className="pl-kicker">STAR CERTIFIED · TEST-ONLY</p>
            <p className="pl-local">DMV-DIRECTED VEHICLES WELCOME</p>
            <h1>STAR Smog Check.<br /><span>Fast. Clear. Test-Only.</span></h1>
            <p className="pl-lead">If your DMV notice says a <strong>STAR station is required</strong>, you can bring it straight to us. We are a STAR-certified Test-Only smog station at <strong>144 S Bradford Ave in Placentia</strong>.</p>
            <div className="pl-actions">
              <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
              <a className="pl-btn pl-btn-outline" href="tel:+17149931660">Call (714) 993-1660</a>
            </div>
            <p className="pl-hours">Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM</p>
          </div>
          <figure className="pl-shop-photo">
            <img src="/photos/inspection-bay.jpg" alt="STAR-certified Test-Only smog inspection bay at In & Out Smog Check" />
            <figcaption>STAR CERTIFIED · TEST-ONLY · SERVING LOCAL DRIVERS SINCE 1999</figcaption>
          </figure>
        </section>

        <section className="pl-proof" aria-label="STAR smog check highlights">
          <div><strong>★</strong><span>STAR<br />CERTIFIED</span></div>
          <div><strong>0</strong><span>REPAIR<br />UPSELLS</span></div>
          <div><strong>~10</strong><span>MINUTE<br />STANDARD TESTS</span></div>
          <div><strong>25+</strong><span>YEARS SERVING<br />LOCAL DRIVERS</span></div>
        </section>

        <section className="pl-service-split pl-local-split">
          <figure>
            <img src="/photos/storefront-approved-final.jpg" alt="In & Out Smog Check storefront in Placentia" />
            <figcaption>144 S BRADFORD AVE · PLACENTIA</figcaption>
          </figure>
          <div>
            <p className="pl-label">WHAT STAR MEANS</p>
            <h2>If the DMV directs you to STAR, a regular station may not be enough.</h2>
            <p>California BAR allows STAR-certified stations to inspect and certify vehicles that are specifically directed to the STAR program, including identified gross polluters. STAR certification is available to both Test-Only and Test-and-Repair stations; ours is Test-Only.</p>
            <div className="pl-local-points">
              <span><b>STAR-DIRECTED</b> We can inspect DMV-directed vehicles</span>
              <span><b>TEST-ONLY</b> We inspect — we do not sell smog repairs</span>
              <span><b>WALK-INS</b> No appointment required</span>
            </div>
          </div>
        </section>

        <section className="pl-services">
          <p className="pl-label">WHEN TO COME HERE</p>
          <h2>Bring your vehicle to a STAR station when your notice requires it.</h2>
          <div className="pl-service-grid">
            <article><span>01</span><h3>STAR-Directed Renewal</h3><p>If your DMV renewal notice says STAR station required, we can perform the inspection.</p></article>
            <article><span>02</span><h3>Gross Polluter Certification</h3><p>Vehicles identified as gross polluters must be certified at an authorized STAR station or BAR Referee.</p></article>
            <article><span>03</span><h3>Regular Smog Checks</h3><p>You do not have to be STAR-directed to use our Test-Only station. We also inspect standard eligible vehicles.</p></article>
            <article><span>04</span><h3>Gas, Hybrid & Diesel</h3><p>We inspect eligible 1976+ gasoline, hybrid and alternative-fuel vehicles, plus eligible 1998+ diesel vehicles up to 14,000 lbs GVWR.</p></article>
          </div>
        </section>

        <section className="pl-local-history">
          <div className="pl-history-copy">
            <p className="pl-label">TEST-ONLY MEANS TEST-ONLY</p>
            <h2>No repair sales pitch after your inspection.</h2>
            <p>A California Test-Only station is licensed to conduct Smog Check inspections only. That keeps your visit focused on testing and certification rather than selling repair work.</p>
            <Link className="pl-btn pl-btn-black" to="/smog-check-pricing">See Smog Check Pricing →</Link>
          </div>
        </section>

        <section className="pl-find">
          <div>
            <p className="pl-label">UPFRONT PRICING</p>
            <h2>2000+ cars start at $60</h2>
            <p>Our listed prices include the certificate fee, and a failed inspection includes one free retest within 30 days.</p>
          </div>
          <div className="pl-find-actions">
            <Link className="pl-btn pl-btn-red" to="/smog-check-pricing">See Full Pricing →</Link>
            <a className="pl-btn pl-btn-outline-dark" href="tel:+17149931660">Call Us</a>
          </div>
        </section>

        <section className="pl-seo">
          <h2>STAR-Certified Test-Only Smog Check in Placentia</h2>
          <p>In &amp; Out Smog Check is a STAR-certified Test-Only station at <strong>144 S Bradford Ave, Placentia, CA 92870</strong>. We serve Placentia, Fullerton, Yorba Linda and nearby Orange County drivers who need STAR-directed or standard Smog Check inspections.</p>
          <p>Need directions? <Link to="/contact">See our contact and location page</Link>, or view our <Link to="/smog-check-pricing">full smog check pricing</Link>.</p>
        </section>
      </main>
    </>
  );
}
