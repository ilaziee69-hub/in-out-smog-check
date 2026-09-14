import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

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
          sameAs: [
            "https://www.google.com/maps/search/?api=1&query=In+%26+Out+Smog+Check%2C+144+S+Bradford+Ave%2C+Placentia%2C+CA+92870",
          ],
        }}
      />

      <section className="page-hero">
        <h1>Placentia Smog Check</h1>
        <p className="lead">
          Your neighborhood STAR-certified smog station — right here on
          S Bradford Ave. Honest pass-or-fail inspections, no repair upsells,
          and friendly service from a local shop serving Placentia since 1999.
        </p>
        <a
          className="primary"
          href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="placentia-directions-btn"
        >
          Get Directions
        </a>
      </section>

      <section className="prose">
        <h2>Placentia’s Local Smog Check Station</h2>
        <p>
          We’re a family-feel shop in the heart of Placentia, just off
          E Chapman Ave. Whether you live in Old Town Placentia, near
          Tri-City Park, up toward the Yorba Linda border, or down by Valencia
          High School, we’re a convenient drive from your neighborhood.
        </p>

        <h2>Why Placentia Drivers Choose Us</h2>
        <div className="cards">
          <div className="card">
            <h3>Easy to Reach from 92870</h3>
            <p>
              Right on S Bradford Ave with direct pull-in access and a simple
              route from E Chapman Ave.
            </p>
          </div>
          <div className="card">
            <h3>STAR Certified</h3>
            <p>
              Got a DMV notice requiring a{" "}
              <Link to="/star-certified-smog">STAR-certified station</Link>?
              We’ve got you covered.
            </p>
          </div>
          <div className="card">
            <h3>Done in About 10 Minutes</h3>
            <p>
              Most standard Placentia smog checks are completed in about 10
              minutes, depending on the vehicle and inspection type.
            </p>
          </div>
        </div>

        <h2>Smog Check Services for Placentia Residents</h2>
        <ul className="check-list">
          <li>
            <strong>Biennial Registration Renewal</strong> — the standard
            two-year smog check most eligible vehicles need.
          </li>
          <li>
            <strong>Change of Ownership</strong> — buying or selling a car in
            Placentia? We can handle the required smog inspection.
          </li>
          <li>
            <strong>Out-of-State Registration</strong> — new to California?
            Bring your registration paperwork and we can perform the required
            California smog inspection. If your DMV notice directs you to a
            STAR station, we can handle that too.
          </li>
          <li>
            <strong>Diesel Smog Inspections</strong> — eligible diesel vehicles
            within California smog-program requirements.
          </li>
          <li>
            <strong>Hybrid &amp; Plug-In Hybrid</strong> inspections — eligible
            hybrid vehicles are welcome.
          </li>
        </ul>

        <h2>Easy to Find</h2>
        <p>
          Look for the large red <strong>SMOG CHECK ONLY CENTER</strong> sign at{" "}
          <strong>144 S Bradford Ave</strong>, near Bradford &amp; Center St.
          If you see the Valvoline plaza, keep going south on Bradford — that
          smog shop is not us.
        </p>

        <h2>Hours &amp; Walk-Ins</h2>
        <p>
          Open <strong>Monday – Friday, 8AM to 5PM</strong> and{" "}
          <strong>Saturday, 8AM to 3PM</strong>. Closed Sunday.
          No appointment needed — but if you want to time your visit, give us
          a quick call at{" "}
          <a href="tel:+17149931660">(714) 993-1660</a>.
        </p>

        <h2>Serving Nearby Cities</h2>
        <p>
          We&rsquo;re Placentia&rsquo;s home smog shop, but we also serve
          drivers coming in from{" "}
          <Link to="/yorba-linda-smog-check">Yorba Linda</Link> and folks who
          need a{" "}
          <Link to="/fullerton-smog-check">smog check near Fullerton</Link>,
          including the Cal State Fullerton area.
        </p>
      </section>
    </>
  );
}
