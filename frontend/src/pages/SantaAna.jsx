import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function SantaAna() {
  return (
    <>
      <Seo
        title="Santa Ana Smog Check | STAR-Certified Station Near You — In & Out Smog"
        description="Looking for a fast smog check near Santa Ana, CA? In & Out Smog Check is just minutes away in Placentia — STAR-certified, walk-ins welcome, most cars done in 20 minutes."
        path="/santa-ana-smog-check"
      />

      <section className="page-hero">
        <h1>Santa Ana Smog Check</h1>
        <p className="lead">
          Serving Santa Ana drivers with fast, STAR-certified smog inspections
          just a short drive away in Placentia. Skip the long lines and
          dealership upsells — get your DMV smog certificate in 20 minutes flat.
        </p>
        <a
          className="primary"
          href="https://www.google.com/maps/dir/?api=1&origin=Santa+Ana,+CA&destination=144+S+Bradford+Ave,+Placentia,+CA+92870"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="santaana-directions-btn"
        >
          Directions from Santa Ana
        </a>
      </section>

      <section className="prose">
        <h2>Why Santa Ana Drivers Visit Us</h2>
        <p>
          Santa Ana is one of the busiest smog inspection markets in Orange
          County, and most local stations book up days in advance. Our shop in
          Placentia — about a 20-minute drive up the 55 — takes walk-ins all
          day, with most inspections completed in under half an hour. If your
          DMV notice requires a <Link to="/star-certified-smog">STAR-certified
          station</Link>, we can handle that too.
        </p>

        <h2>Vehicles We Smog for Santa Ana Customers</h2>
        <div className="cards">
          <div className="card">
            <h3>Cars &amp; SUVs</h3>
            <p>Gas-powered passenger vehicles, 1976 and newer (most years).</p>
          </div>
          <div className="card">
            <h3>Trucks &amp; Vans</h3>
            <p>Pickups, work vans, and box trucks up to 14,000 lbs GVWR.</p>
          </div>
          <div className="card">
            <h3>Hybrids &amp; Diesels</h3>
            <p>1998+ diesel vehicles up to 14,000 lbs and all hybrid models.</p>
          </div>
        </div>

        <h2>Driving Directions from Santa Ana</h2>
        <ol className="step-list">
          <li>Take CA-55 N (Costa Mesa Fwy) toward Anaheim / Riverside.</li>
          <li>Merge onto CA-91 E toward Riverside.</li>
          <li>Take Exit 31 for Kraemer Blvd toward Placentia.</li>
          <li>Turn left on Kraemer, right on E Chapman Ave, left on S Bradford Ave.</li>
          <li>We’re at <strong>144 S Bradford Ave</strong> — look for the yellow mascot.</li>
        </ol>

        <h2>Hours &amp; Walk-Ins</h2>
        <p>
          Open <strong>Monday – Saturday, 8AM to 6PM</strong>. Closed Sundays.
          No appointment needed — but feel free to call ahead at{" "}
          <a href="tel:+17145550000">(714) 555-0000</a> if you’re on a tight
          schedule.
        </p>
      </section>
    </>
  );
}
