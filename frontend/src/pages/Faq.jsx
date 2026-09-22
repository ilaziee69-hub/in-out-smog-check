import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const FAQS = [
  {
    q: "How fast is a smog check at your Placentia shop?",
    a: "Most standard inspections are completed in about 10 minutes. Older vehicles, some diesel inspections, and vehicles that need additional testing can take longer.",
  },
  {
    q: "Do you transmit my smog result directly to the DMV?",
    a: "Yes. Smog inspection results are transmitted electronically to the California DMV after the inspection is completed.",
  },
  {
    q: "Which vehicles are exempt from California smog checks?",
    a: "California exemptions depend on model year, fuel type, vehicle weight, and registration situation. For biennial renewal testing, gasoline, hybrid, and alternative-fuel vehicles eight model years and newer are generally exempt. Your DMV notice is the best guide for your specific vehicle.",
  },
  {
    q: "What is Jay Leno’s Law (SB 1392), and does my classic car still need a smog check?",
    a: "California’s SB 1392, commonly called Jay Leno’s Law, was signed in September 2026 and creates a phased-in Smog Check exemption for certain qualifying collector vehicles from model years 1976 through 1985. The exemption is not immediate. Until your vehicle qualifies under the phase-in and meets the collector-use requirements, normal California Smog Check rules still apply.",
  },
  {
    q: "Are all 1976–1985 cars now smog exempt in California?",
    a: "No. SB 1392 is limited to qualifying collector vehicles and is being phased in over time. The law applies to eligible collector vehicles in the 1976–1985 range that meet its limited-use requirements, including collector insurance or fewer than 1,000 miles driven per year. If you are unsure whether your car currently qualifies, check your DMV renewal notice before skipping a required inspection.",
  },
  {
    q: "What is a Test-Only station?",
    a: "A Test-Only station performs Smog Check inspections but does not perform smog-related repairs. At our shop, the visit is focused on testing and certification rather than selling repair work.",
  },
  {
    q: "What does STAR certified mean?",
    a: "Some vehicles are directed by the California Smog Check Program to a STAR-certified station. If your DMV notice says a STAR station is required, our STAR-certified Test-Only station can perform the inspection.",
  },
  {
    q: "Do I need an appointment?",
    a: "No. Walk-ins are welcome Monday through Friday from 8AM to 5PM and Saturday from 8AM to 3PM.",
  },
  {
    q: "What does a smog check cost?",
    a: "Our published pricing starts at $60 for 2000 and newer cars, with the certificate fee included. Prices vary by vehicle year and type, so check our Pricing page for the complete current list.",
  },
  {
    q: "What if my vehicle fails?",
    a: "You’ll receive the inspection result showing the failure information. Because we are Test-Only, we do not perform the repair. Our current pricing includes one free retest within 30 days after a failed inspection.",
  },
  {
    q: "Do you smog out-of-state vehicles?",
    a: "Yes. Vehicles being registered in California may require a California Smog Check. Bring your registration paperwork or DMV notice so we can see what type of inspection is required.",
  },
  {
    q: "What vehicles can you inspect?",
    a: "We inspect eligible 1976 and newer gasoline, hybrid, and alternative-fuel vehicles, plus eligible 1998 and newer diesel vehicles up to 14,000 lbs GVWR.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <Seo
        title="Smog Check FAQ | Jay Leno Law, DMV & STAR | In & Out Smog"
        description="California Smog Check FAQ covering Jay Leno’s Law (SB 1392), DMV rules, STAR requirements, classic-car exemptions, pricing, and failed inspections."
        path="/faq"
        jsonLd={jsonLd}
      />

      <main className="placentia-page">
        <section className="pl-hero">
          <div className="pl-hero-copy">
            <p className="pl-kicker">SMOG CHECK ANSWERS · NO GUESSWORK</p>
            <p className="pl-local">STAR CERTIFIED · TEST-ONLY</p>
            <h1>Smog Check FAQ.<br /><span>Quick Answers Before You Drive In.</span></h1>
            <p className="pl-lead">Questions about STAR, DMV transmission, exemptions, pricing or a failed inspection? Start here, or call us at <strong>(714) 993-1660</strong>.</p>
            <div className="pl-actions">
              <a className="pl-btn pl-btn-red" href="tel:+17149931660">Call (714) 993-1660</a>
              <Link className="pl-btn pl-btn-outline" to="/smog-check-pricing">See Pricing →</Link>
            </div>
            <p className="pl-hours">Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM</p>
          </div>
          <figure className="pl-shop-photo">
            <img src="/_next/image?url=%2Fphotos%2Finspection-bay.jpg&w=828&q=75" width="864" height="648" alt="Smog inspection bay at In & Out Smog Check in Placentia" />
            <figcaption>FAST ANSWERS · FAST TEST-ONLY SERVICE</figcaption>
          </figure>
        </section>

        <section className="pl-proof" aria-label="Smog check FAQ highlights">
          <div><strong>★</strong><span>STAR<br />CERTIFIED</span></div>
          <div><strong>~10</strong><span>MINUTE<br />STANDARD TESTS</span></div>
          <div><strong>$60</strong><span>2000+ CARS<br />START HERE</span></div>
          <div><strong>0</strong><span>REPAIR<br />UPSELLS</span></div>
        </section>

        <section className="prose">
          <h2>Frequently Asked Smog Check Questions</h2>
          <div className="faq-list" data-testid="faq-list">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`faq-item ${isOpen ? "open" : ""}`} data-testid={`faq-item-${i}`}>
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} data-testid={`faq-question-${i}`}>
                    <span>{item.q}</span>
                    <span className="faq-icon">{isOpen ? "–" : "+"}</span>
                  </button>
                  <div className="faq-a" data-testid={`faq-answer-${i}`} hidden={!isOpen}>{item.a}</div>
                </div>
              );
            })}
          </div>

          <div className="cta-row">
            <Link to="/star-certified-smog" className="primary">STAR Smog Check Info</Link>
            <Link to="/contact" className="secondary">Hours & Directions</Link>
          </div>
        </section>
      </main>
    </>
  );
}
