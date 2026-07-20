import { useState } from "react";
import Seo from "@/components/Seo";

const FAQS = [
  {
    q: "How fast is a smog check at your Placentia shop?",
    a: "Most gasoline vehicles are done in about 10 minutes. Older tailpipe (ASM) tests and diesel inspections can take a few minutes longer, but we’ll always give you a clear time estimate the moment you drive in.",
  },
  {
    q: "Do you transmit my smog result directly to the DMV?",
    a: "Yes. As a STAR-Certified station, we electronically transmit every pass or fail result to the California DMV in real time — usually before you even leave the driveway. There’s no paper certificate to hand-carry, and no waiting for the DMV to process anything. If you renew your registration online right after your pass, the system will already see it.",
  },
  {
    q: "Which vehicles are exempt from smog checks in California?",
    a: "You do NOT need a smog check if your vehicle is: (1) gasoline-powered and 1975 or older, (2) diesel-powered and 1997 or older, (3) diesel with a GVWR over 14,000 lbs, (4) electric, (5) natural gas over 14,000 lbs GVWR, (6) a motorcycle, (7) a trailer, or (8) a gasoline vehicle within its 8-year new-car exemption (the first 8 model years after purchase, though the DMV charges a smog abatement fee those years). If you’re not sure, bring your DMV renewal notice — it will state exactly what’s required.",
  },
  {
    q: "What is a Test-Only station and why does it matter?",
    a: "A Test-Only station is licensed to inspect vehicles but is NOT allowed to perform smog repairs. That’s a good thing for you: since we can’t make money by finding problems, we have zero incentive to fail your car. Some DMV notices — especially for STAR-directed and gross-polluter vehicles — actually require a Test-Only station.",
  },
  {
    q: "Do I need an appointment?",
    a: "No — walk-ins are welcome Monday through Friday 8AM to 5PM, and Saturday 8AM to 3PM. We rarely have a wait, but you’re welcome to call ahead at (714) 993-1660 to time your visit.",
  },
  {
    q: "What does a smog check cost?",
    a: "Our pricing is competitive and includes the state certificate fee. Cost varies slightly by vehicle year, fuel type, and whether your DMV notice requires a STAR inspection. Call (714) 993-1660 for today’s exact rate — we’ll always tell you the total upfront before we start.",
  },
  {
    q: "What if my car fails?",
    a: "We’ll show you exactly which test it failed — OBD-II codes, tailpipe readings, visual issues, or readiness monitors — and hand you a printed report. Because we’re Test-Only, we don’t do the repair; that keeps our test result 100% independent. We’re happy to refer you to a trusted local smog repair shop, and California’s Consumer Assistance Program (CAP) can help cover repairs if you income-qualify.",
  },
  {
    q: "Do you smog out-of-state vehicles?",
    a: "Yes. Vehicles being registered in California for the first time require a STAR-Certified smog inspection. Bring the title and the current out-of-state registration and we’ll take care of it same-day.",
  },
  {
    q: "Do you accept credit cards?",
    a: "Yes. Cash, debit, Visa, MasterCard, American Express, and Discover. We do not accept personal checks.",
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
        title="Smog Check FAQ | DMV Transmission, Exemptions & Cost — In & Out Smog Check"
        description="Placentia smog check FAQ: how the DMV gets your result, which vehicles are exempt, Test-Only benefits, cost, and what to do if your car fails. (714) 993-1660."
        path="/faq"
        jsonLd={jsonLd}
      />

      <section className="page-hero">
        <h1>Smog Check FAQ</h1>
        <p className="lead">
          Straight answers to what Orange County drivers actually ask us. If
          you don’t see your question here, call us at{" "}
          <a href="tel:+17149931660">(714) 993-1660</a>.
        </p>
      </section>

      <section className="prose">
        <div className="faq-list" data-testid="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? "open" : ""}`}
                data-testid={`faq-item-${i}`}
              >
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  data-testid={`faq-question-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faq-a" data-testid={`faq-answer-${i}`}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
