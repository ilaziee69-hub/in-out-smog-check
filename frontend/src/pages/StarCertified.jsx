import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

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
          provider: { "@type": "AutomotiveBusiness", name: "In & Out Smog Check" },
          areaServed: "Orange County, California",
          description:
            "STAR-Certified Test-Only smog inspections required by the California DMV for renewal, change of ownership, and out-of-state vehicles.",
        }}
      />

      <section className="page-hero">
        <h1>STAR Certified · Test-Only Smog Station</h1>
        <p className="lead">
          Two credentials that matter — and we hold both. If your DMV renewal
          notice says <em>&ldquo;STAR Certified Station Required&rdquo;</em> or <em>&ldquo;Test-Only
          Station,&rdquo;</em> you&rsquo;re in the right place. California BAR-licensed and
          proudly serving Placentia, Fullerton, Yorba Linda, Anaheim, and the
          rest of Orange County.
        </p>
        <Link to="/contact" className="primary" data-testid="star-cta-visit">
          Visit Us Today
        </Link>
      </section>

      <section className="prose">
        <h2>What "Test-Only" Means for You</h2>
        <p>
          A Test-Only station is licensed by the California Bureau of Automotive
          Repair to <strong>inspect vehicles only</strong> — we cannot legally
          perform smog repairs. That’s a huge advantage for you: since we don’t
          profit from fixing anything, we have zero incentive to fail your car.
          You get an inspection that’s completely independent, with your result
          transmitted electronically to the DMV the moment your test finishes.
        </p>

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
          <strong>10 minutes</strong>. We print your receipt and{" "}
          <strong>electronically transmit your pass result to the California DMV
          in real time</strong>, so you can renew your registration online the
          moment you drive off.
        </p>

        <h2>Pricing</h2>
        <p>
          We publish our full price list up front — every price includes the
          state certificate fee, and every failed inspection comes with one
          free retest within 30 days. Most 2000 &amp; newer cars are{" "}
          <strong>$60</strong>; trucks, SUVs &amp; vans, older year ranges,
          diesels, and RVs are listed in full on our pricing page.
        </p>
        <p>
          <Link
            to="/smog-check-pricing"
            className="btn primary"
            data-testid="star-see-pricing-btn"
          >
            See Full Smog Check Pricing
          </Link>
        </p>
        <p>
          Cash, debit, and all major credit cards accepted. Questions? Call{" "}
          <a href="tel:+17149931660">(714) 993-1660</a>.
        </p>
      </section>
    </>
  );
}
