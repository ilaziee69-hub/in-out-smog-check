import { useState } from "react";
import Seo from "@/components/Seo";

const FAQS = [
  {
    q: "How often do I need a smog check in California?",
    a: "Most gasoline-powered vehicles built in 1976 or later require a smog check every two years for registration renewal. Newer cars get an 8-year exemption from the time of purchase, and certain hybrids and electric vehicles are exempt. Diesels 1998 and newer up to 14,000 lbs GVWR also need smog checks.",
  },
  {
    q: "What does a smog check cost at In & Out Smog Check?",
    a: "Our smog check pricing is competitive and includes the state certificate fee. Pricing varies slightly based on vehicle year, fuel type, and whether your DMV notice requires a STAR-certified station. Call (714) 555-0000 for today’s exact rate.",
  },
  {
    q: "Do I need an appointment?",
    a: "No — walk-ins are welcome Monday through Saturday, 8AM to 6PM. We rarely have a wait. If you’d like to time your visit, give us a quick call before heading over.",
  },
  {
    q: "How long does a smog check take?",
    a: "Most smog checks at our Placentia shop are done in 20 to 30 minutes. STAR-directed and tailpipe (ASM) inspections may take slightly longer, but we’ll always give you an honest time estimate when you arrive.",
  },
  {
    q: "What if my car fails the smog check?",
    a: "If your car fails, we’ll explain exactly which test it failed (OBD-II, tailpipe, visual, or readiness monitors). California offers a Consumer Assistance Program (CAP) that can help cover repairs for income-qualified drivers. We’re happy to refer you to a trusted repair shop — note that we don’t perform smog repairs ourselves, which keeps our inspections fully independent.",
  },
  {
    q: "Do you smog out-of-state vehicles?",
    a: "Yes. Vehicles being registered in California for the first time must pass a STAR-certified smog inspection. We can handle that — bring the title and current out-of-state registration with you.",
  },
  {
    q: "Do you smog diesel vehicles?",
    a: "Yes. Diesel vehicles model year 1998 or newer with a GVWR of 14,000 lbs or less require a smog check in California. We’re fully equipped for diesel inspections.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "Cash, debit, Visa, MasterCard, American Express, and Discover. We do not accept personal checks.",
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
        title="Smog Check FAQ | Cost, Frequency, STAR & More — In & Out Smog Check"
        description="Common smog check questions answered: how often, how much, what to bring, what to do if you fail, out-of-state vehicles, diesels, and more. Placentia, CA."
        path="/faq"
        jsonLd={jsonLd}
      />

      <section className="page-hero">
        <h1>Smog Check FAQ</h1>
        <p className="lead">
          Honest answers to the questions Orange County drivers ask us most. If
          you don’t see yours, give us a call at{" "}
          <a href="tel:+17145550000">(714) 555-0000</a>.
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
