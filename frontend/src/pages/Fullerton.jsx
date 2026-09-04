import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function Fullerton() {
  return (
    <>
      <Seo
        title="Fullerton Smog Check | STAR Test-Only | In & Out Smog"
        description="STAR-certified Test-Only smog checks for Fullerton drivers. In & Out Smog Check is in neighboring Placentia — walk-ins welcome, fast inspections."
        path="/fullerton-smog-check"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fullerton Smog Check — STAR Certified Test-Only",
          serviceType: "STAR Certified Test-Only Smog Check",
          description:
            "STAR-Certified Test-Only smog inspections for Fullerton, CA drivers. Performed at In & Out Smog Check in neighboring Placentia — no separate Fullerton location.",
          provider: {
            "@type": "AutomotiveBusiness",
            name: "In & Out Smog Check",
            telephone: "+1-714-993-1660",
            url: "https://download-hub-281.preview.emergentagent.com/",
            address: {
              "@type": "PostalAddress",
              streetAddress: "144 S Bradford Ave",
              addressLocality: "Placentia",
              addressRegion: "CA",
              postalCode: "92870",
              addressCountry: "US",
            },
          },
          areaServed: {
            "@type": "City",
            name: "Fullerton",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "California",
            },
          },
        }}
      />

      <section className="page-hero">
        <h1>Fullerton Smog Check</h1>
        <p className="lead">
          In &amp; Out Smog Check is a{" "}
          <strong>STAR-Certified Test-Only</strong> smog inspection station in
          neighboring <strong>Placentia</strong>, convenient for drivers coming
          from east Fullerton, Raymond Hills, Sunny Hills, and the{" "}
          Cal State Fullerton (CSUF) area. Walk-ins are welcome, and most
          inspections are quick — get in, get tested, get on with your day.
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
        {/* AEO / featured-snippet answer block — kept short so it doesn't
            repeat the hero lead verbatim, while still answering "Is there a
            STAR smog check near Fullerton?" for search snippets. */}
        <div className="aeo-answer" data-testid="fullerton-aeo">
          <p>
            <strong>Yes — Fullerton drivers can get a STAR smog check just
            minutes away in Placentia.</strong> Take Chapman Ave east and
            you&rsquo;re here. Walk-ins welcome, no appointment needed.
          </p>
        </div>

        <h2>Convenient for Fullerton Drivers</h2>
        <p>
          Our Placentia shop sits right off E Chapman Ave, the same road that
          runs through much of Fullerton. That makes us especially convenient
          for drivers coming from <strong>east Fullerton</strong>,{" "}
          <strong>Raymond Hills</strong>, <strong>Sunny Hills</strong>, and
          the neighborhoods near Chapman Ave. If your DMV renewal notice
          specifies a{" "}
          <Link to="/star-certified-smog">STAR-certified station</Link>, we
          can handle that too — same day, no appointment needed.
        </p>

        <h2>Near Cal State Fullerton (CSUF)</h2>
        <p>
          In &amp; Out Smog Check is a short drive east of{" "}
          <strong>Cal State Fullerton</strong> along E Chapman Ave, making us
          convenient for CSUF students, faculty, and staff — as well as
          residents in the surrounding neighborhoods. Whether you&rsquo;re
          renewing your registration between classes or handling a
          change-of-ownership on a used car, our Test-Only station keeps
          things straightforward: no repair upsells, just an honest smog
          inspection.
        </p>

        <h2>Smog Check Services for Fullerton Drivers</h2>
        <div className="cards">
          <div className="card">
            <h3>Registration Renewal Smog Check</h3>
            <p>
              The standard California DMV smog inspection required every two
              years for most 1976+ gasoline vehicles and 1998+ diesel
              vehicles up to 14,000 lbs GVWR.
            </p>
          </div>
          <div className="card">
            <h3>Change-of-Ownership Smog Check</h3>
            <p>
              Buying or selling a vehicle in Fullerton or the CSUF area? A
              current smog certificate is required to complete title transfer
              at the DMV.
            </p>
          </div>
          <div className="card">
            <h3>
              <Link to="/star-certified-smog">STAR-Certified Test-Only</Link>
            </h3>
            <p>
              We&rsquo;re a STAR-certified station, so we handle every
              STAR-directed vehicle the DMV sends our way — including
              out-of-state registrations and previously-flagged vehicles.
            </p>
          </div>
        </div>

        <h2>Driving Directions from Fullerton</h2>
        <ol className="step-list">
          <li>Head east on <strong>E Chapman Ave</strong> — the same road that runs through downtown Fullerton and past CSUF.</li>
          <li>Continue past N Placentia Ave into the city of Placentia.</li>
          <li>Turn right onto <strong>S Bradford Ave</strong>.</li>
          <li>We&rsquo;re at <strong>144 S Bradford Ave</strong> on your left, next door to Tony&rsquo;s Deli — look for the red <strong>SMOG CHECK ONLY CENTER</strong> sign.</li>
        </ol>

        <h2>Why Fullerton Drivers Choose Us</h2>
        <p>
          No appointments and no repair upsells. As a Test-Only station, we
          can only inspect — never repair — so we have zero incentive to fail
          your car. You get a straight pass-or-fail smog inspection, an
          electronic DMV transmission, and a friendly team that explains
          exactly what your DMV notice needs. If you have a question before
          driving over, our <Link to="/faq">smog check FAQ</Link> answers the
          most common ones, or you can{" "}
          <Link to="/contact">contact us for hours and directions</Link>.
        </p>

        <h2>Also Serving Nearby Cities</h2>
        <p>
          We&rsquo;re a short drive from most of North Orange County. See our
          dedicated guides for{" "}
          <Link to="/placentia-smog-check">Placentia smog check</Link>{" "}
          customers and{" "}
          <Link to="/yorba-linda-smog-check">Yorba Linda smog check</Link>{" "}
          customers as well.
        </p>
      </section>
    </>
  );
}
