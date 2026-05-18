import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function StarCertified() {
  return (
    <>
      <Seo
        title="STAR Certified Smog Check in Placentia, CA | In & Out Smog Check"
        description="Need a STAR-certified smog check in Placentia? In & Out Smog Check is a California BAR-licensed STAR station serving Orange County drivers flagged by the DMV. Walk-ins welcome."
        path="/star-certified-smog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "STAR Certified Smog Check",
          provider: { "@type": "AutomotiveBusiness", name: "In & Out Smog Check" },
          areaServed: "Orange County, California",
          description:
            "STAR-certified smog inspections required by the California DMV for renewal, change of ownership, and out-of-state vehicles.",
        }}
      />

      <section className="page-hero">
        <h1>STAR Certified Smog Check</h1>
        <p className="lead">
          If your DMV renewal notice says <em>“STAR Certified Station Required,”</em>
          you’re in the right place. In & Out Smog Check is a fully licensed
          California BAR STAR station serving Placentia, Fullerton, Yorba Linda,
          Anaheim, and the rest of Orange County.
        </p>
        <Link to="/contact" className="primary" data-testid="star-cta-visit">
          Visit Us Today
        </Link>
      </section>

      <section className="prose">
        <h2>What is a STAR Certified Smog Station?</h2>
        <p>
          STAR is California’s program for high-performing smog test stations.
          The DMV directs about 2% of vehicles to STAR stations each renewal
          cycle — typically older vehicles, gross polluters, or vehicles flagged
          by the Bureau of Automotive Repair (BAR). A regular smog check station
          can’t finalize these inspections. We can.
        </p>

        <h2>When You Need a STAR Smog Check</h2>
        <ul className="check-list">
          <li>
            Your DMV renewal notice specifies a <strong>STAR-certified
            station</strong>.
          </li>
          <li>You’re registering an <strong>out-of-state vehicle</strong> in California.</li>
          <li>Your vehicle was previously a <strong>gross polluter</strong>.</li>
          <li>You’re completing a <strong>title transfer</strong> on certain vehicles.</li>
          <li>Your car is <strong>6+ model years old</strong> and randomly directed.</li>
        </ul>

        <h2>What We Test</h2>
        <div className="cards">
          <div className="card">
            <h3>OBD-II Inspection</h3>
            <p>
              Connect to your vehicle’s on-board diagnostics to verify emission
              controls and readiness monitors for 2000+ gasoline vehicles.
            </p>
          </div>
          <div className="card">
            <h3>Tailpipe / ASM Test</h3>
            <p>
              Dyno-based emissions test for pre-2000 vehicles, diesels (1998+),
              and any car the DMV flags for full tailpipe inspection.
            </p>
          </div>
          <div className="card">
            <h3>Visual Inspection</h3>
            <p>
              Certified inspectors verify your catalytic converter, EGR system,
              gas cap, and all required smog control equipment.
            </p>
          </div>
        </div>

        <h2>How Long Does It Take?</h2>
        <p>
          Most STAR smog checks at our Placentia shop are done in about{" "}
          <strong>20–30 minutes</strong>. We’ll print your certificate and
          electronically transmit your pass result to the California DMV the
          same day — so you can renew your registration online immediately.
        </p>

        <h2>Pricing</h2>
        <p>
          Our STAR smog check is competitively priced and includes the state
          certificate fee. Cash, debit, and all major credit cards accepted.
          Call <a href="tel:+17145550000">(714) 555-0000</a> for today’s rate.
        </p>
      </section>
    </>
  );
}
