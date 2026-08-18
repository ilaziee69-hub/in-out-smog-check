import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function Placentia() {
  return (
    <>
      <Seo
        title="Placentia Smog Check | STAR-Certified Neighborhood Station — In & Out Smog"
        description="Placentia's go-to STAR-Certified Test-Only smog station at 144 S Bradford Ave. Walk-ins welcome, most cars done in 10 minutes. Mon–Fri 8–5, Sat 8–3. (714) 993-1660."
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
        }}
      />

      <section className="page-hero">
        <h1>Placentia Smog Check</h1>
        <p className="lead">
          Your neighborhood STAR-certified smog station — right here on
          S Bradford Ave. Honest pass-or-fail inspections, no long lines, and
          friendly faces who actually live and work in Placentia.
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
          E Chapman Ave between Kraemer Memorial Park and the old Atchison
          Topeka rail corridor. Whether you live in Old Town Placentia, near
          Tri-City Park, up toward the Yorba Linda border, or down by Valencia
          High School, we’re minutes from your driveway.
        </p>

        <h2>Why Placentia Drivers Choose Us</h2>
        <div className="cards">
          <div className="card">
            <h3>5 Minutes from Anywhere in 92870</h3>
            <p>
              Right off S Bradford Ave, easy in-and-out parking, no detour off
              your way to Albertsons or the 57.
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
            <h3>Done in About 20 Minutes</h3>
            <p>
              Most Placentia smog checks are completed in about 10 minutes.
              Grab a coffee at Golden State Coffee Roasters across the way —
              your car will be ready before you finish it.
            </p>
          </div>
        </div>

        <h2>Smog Check Services for Placentia Residents</h2>
        <ul className="check-list">
          <li>
            <strong>Biennial Registration Renewal</strong> — the standard
            two-year smog check most 1976+ gas vehicles need.
          </li>
          <li>
            <strong>Change of Ownership</strong> — buying or selling a car in
            Placentia? We’ll get your transfer-of-title smog done same day.
          </li>
          <li>
            <strong>Out-of-State Registration</strong> — new to California?
            Bring your title and we’ll handle the STAR-certified inspection.
          </li>
          <li>
            <strong>Diesel Smog Inspections</strong> — 1998+ diesels up to
            14,000 lbs GVWR.
          </li>
          <li>
            <strong>Hybrid &amp; Plug-In Hybrid</strong> inspections — yes, we
            handle Priuses, Volts, and the rest.
          </li>
        </ul>

        <h2>Easy to Find</h2>
        <p>
          Look for the yellow mascot on the sign at{" "}
          <strong>144 S Bradford Ave</strong>, between E Chapman Ave and
          E Crowther Ave. Plenty of off-street parking, and we’re fully
          accessible for trucks and larger SUVs.
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
          <Link to="/yorba-linda-smog-check">Yorba Linda</Link>,{" "}
          <Link to="/fullerton-smog-check">Fullerton</Link>, and the rest of
          North Orange County.
        </p>
      </section>
    </>
  );
}
