import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function Fullerton() {
  return (
    <>
      <Seo
        title="Fullerton Smog Check | STAR-Certified Station Minutes Away — In & Out Smog"
        description="Need a smog check in Fullerton, CA? In & Out Smog Check is just 5 minutes east in Placentia. STAR-certified, walk-ins welcome, fast turnaround near the Fullerton DMV."
        path="/fullerton-smog-check"
      />

      <section className="page-hero">
        <h1>Fullerton Smog Check</h1>
        <p className="lead">
          Just 5 minutes east of downtown Fullerton, In & Out Smog Check
          delivers fast, STAR-certified smog inspections for every Fullerton
          neighborhood — from Sunny Hills to Raymond Hills to Cal State
          Fullerton.
        </p>
        <a
          className="primary"
          href="https://www.google.com/maps/dir/?api=1&origin=Fullerton,+CA&destination=144+S+Bradford+Ave,+Placentia,+CA+92870"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="fullerton-directions-btn"
        >
          Directions from Fullerton
        </a>
      </section>

      <section className="prose">
        <h2>Convenient for Fullerton Drivers</h2>
        <p>
          Our Placentia shop sits right off E Chapman Ave, which runs straight
          through Fullerton. Most Fullerton residents reach us in under 10
          minutes — and we’re a stone’s throw from the{" "}
          <strong>Fullerton DMV</strong> at 1340 S Bristol St. Drop in for your
          smog check, then drive over to finish your registration.
        </p>

        <h2>Smog Check Services for Fullerton</h2>
        <div className="cards">
          <div className="card">
            <h3>Registration Renewal</h3>
            <p>
              The standard smog check required every two years by the
              California DMV for most 1976+ gas vehicles.
            </p>
          </div>
          <div className="card">
            <h3>Change of Ownership</h3>
            <p>
              Buying or selling a car in Fullerton? A current smog certificate
              transfers the registration smoothly.
            </p>
          </div>
          <div className="card">
            <h3>
              <Link to="/star-certified-smog">STAR Inspections</Link>
            </h3>
            <p>
              Yes — we’re a STAR-certified station, so we handle the DMV’s
              random STAR-directed vehicles too.
            </p>
          </div>
        </div>

        <h2>Driving Directions from Fullerton</h2>
        <ol className="step-list">
          <li>Head east on E Chapman Ave through downtown Fullerton.</li>
          <li>Continue past N Placentia Ave into the city of Placentia.</li>
          <li>Turn right onto S Bradford Ave.</li>
          <li>We’re at <strong>144 S Bradford Ave</strong> on your left.</li>
        </ol>

        <h2>Why Fullerton Picks Us</h2>
        <p>
          No appointments. No upsells. No “we found a problem with your car” pressure.
          Just an honest pass-or-fail smog inspection at a fair price — and a
          friendly team that explains exactly what your DMV notice needs.
        </p>

        <h2>Serving Neighboring Cities Too</h2>
        <p>
          Coming from a different North Orange County city? We have dedicated
          guides for <Link to="/placentia-smog-check">Placentia</Link> and{" "}
          <Link to="/yorba-linda-smog-check">Yorba Linda</Link> drivers as well.
          Or read the <Link to="/star-certified-smog">STAR Certified Test-Only</Link>{" "}
          guide if your DMV notice requires it.
        </p>
      </section>
    </>
  );
}
