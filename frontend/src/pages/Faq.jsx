import { useState } from "react";
import Seo from "@/components/Seo";

const FAQS = [
  {
    q: "How fast is a smog check at your Placentia shop?",
    a: "Most gasoline vehicles are done in about 10 minutes. Older tailpipe tests and some diesel inspections can take longer, and we’ll give you a time estimate when you drive in.",
  },
  {
    q: "Do you transmit my smog result directly to the DMV?",
    a: "Yes. We electronically transmit smog inspection results to the California DMV. There’s no paper certificate you need to hand-carry for the DMV transmission.",
  },
  {
    q: "Which vehicles are exempt from smog checks in California?",
    a: "California smog exemptions depend on vehicle year, fuel type, weight, and registration situation. Your DMV renewal notice is the best source for what your specific vehicle requires. If you’re unsure, call us with the vehicle year and fuel type and we’ll help you understand what kind of inspection you need.",
  },
  {
    q: "What is a Test-Only station and why does it matter?",
    a: "A Test-Only station is licensed to perform smog inspections but does not perform smog repairs. Because our shop focuses on testing rather than repair work, there are no repair upsells tied to your inspection.",
  },
  {
    q: "Do I need an appointment?",
    a: "No — walk-ins are welcome Monday through Friday 8AM to 5PM, and Saturday 8AM to 3PM. You’re also welcome to call ahead at (714) 993-1660.",
  },
  {
    q: "What does a smog check cost?",
    a: "Our published pricing starts at $60 for 2000 and newer cars, with the certificate fee included. Prices vary by vehicle year and type. See our Pricing page for the full current price list.",
  },
  {
    q: "What if my car fails?",
    a: "We’ll give you the inspection result showing what caused the failure. Because we’re Test-Only, we don’t perform the repair. Our published pricing includes one free retest within 30 days after a failed inspection.",
  },
  {
    q: "Do you smog out-of-state vehicles?",
    a: "Yes. Vehicles being registered in California may need a California smog inspection. If your DMV paperwork specifically directs you to a STAR-certified station, we can perform that inspection as well. Bring your registration paperwork so we can confirm what your vehicle needs.",
  },
  {
    q: "Do you accept credit cards?",
    a: "Yes. Cash, debit, Visa, MasterCard, American Express, and Discover are accepted. We do not accept personal checks.",
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
        title="Smog Check FAQ | DMV, STAR & Exemptions | In & Out Smog"
        description="Get answers about California smog checks, STAR requirements, pricing, exemptions, failed tests, free retests, and what to expect during your inspection."
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
                <div
                  className="faq-a"
                  data-testid={`faq-answer-${i}`}
                  hidden={!isOpen}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
