import Seo from "@/components/Seo";

/**
 * Smog Check Pricing page (/smog-check-pricing).
 *
 * Content is exact per the specified pricing sheet. Do not reinterpret,
 * round, or invent prices. Certificate fee is included in every listed
 * price; one free retest within 30 days after a failed inspection.
 */

const priceGroups = [
  {
    heading: "2000 & Newer",
    rows: [
      { label: "Cars", price: "$60", featured: true },
      { label: "Trucks, SUVs & Vans", price: "$70" },
    ],
  },
  {
    heading: "1996–1999",
    rows: [
      { label: "Cars", price: "$80" },
      { label: "Trucks, SUVs & Vans", price: "$90" },
    ],
  },
  {
    heading: "1976–1995",
    rows: [
      { label: "Cars", price: "$90" },
      { label: "Trucks, SUVs & Vans", price: "$100" },
    ],
  },
  {
    heading: "Diesel & RV",
    rows: [
      { label: "Diesel", price: "$80" },
      { label: "RV", price: "$120" },
    ],
  },
];

const whyChoose = [
  {
    title: "Fast",
    body: "Most standard inspections are completed in about 10 minutes.",
  },
  {
    title: "Experienced",
    body: "25+ years of smog industry experience and trusted locally since 1999.",
  },
  {
    title: "Test-Only",
    body: "We perform smog inspections, not repairs, so there are no repair upsells.",
  },
  {
    title: "Upfront Pricing",
    body: "Published prices with the certificate fee already included.",
  },
  {
    title: "Free Retest",
    body: "One free retest within 30 days following a failed inspection.",
  },
];

const priceSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "In & Out Smog Check",
  telephone: "+1-714-993-1660",
  address: {
    "@type": "PostalAddress",
    streetAddress: "144 S Bradford Ave",
    addressLocality: "Placentia",
    addressRegion: "CA",
    postalCode: "92870",
    addressCountry: "US",
  },
  priceRange: "$60–$120",
  makesOffer: [
    { "@type": "Offer", name: "2000 & Newer — Car Smog Check", price: "60", priceCurrency: "USD" },
    { "@type": "Offer", name: "2000 & Newer — Truck / SUV / Van Smog Check", price: "70", priceCurrency: "USD" },
    { "@type": "Offer", name: "1996–1999 — Car Smog Check", price: "80", priceCurrency: "USD" },
    { "@type": "Offer", name: "1996–1999 — Truck / SUV / Van Smog Check", price: "90", priceCurrency: "USD" },
    { "@type": "Offer", name: "1976–1995 — Car Smog Check", price: "90", priceCurrency: "USD" },
    { "@type": "Offer", name: "1976–1995 — Truck / SUV / Van Smog Check", price: "100", priceCurrency: "USD" },
    { "@type": "Offer", name: "Diesel Smog Check", price: "80", priceCurrency: "USD" },
    { "@type": "Offer", name: "RV Smog Check", price: "120", priceCurrency: "USD" },
  ],
};

export default function Pricing() {
  return (
    <>
      <Seo
        title="Smog Check Prices Placentia | STAR Test-Only | In & Out"
        description="Upfront smog check pricing in Placentia. Cars from $60 with certificate fee included, one free retest within 30 days, and no repair upsells."
        path="/smog-check-pricing"
        jsonLd={priceSchema}
      />

      <section className="page-hero" data-testid="pricing-hero">
        <h1>Smog Check Pricing</h1>
        <p className="lead">Upfront pricing. Fast service. No surprise add-ons.</p>
        <p className="pricing-trustline" data-testid="pricing-trustline">
          Trusted locally since 1999 &middot; 25+ years experience &middot; STAR
          Test-Only &middot; Walk-ins welcome
        </p>
        <p className="pricing-reinforce" data-testid="pricing-reinforce">
          Fast inspections &middot; No repair upsells &middot; Straightforward
          pricing
        </p>
      </section>

      <section className="prose pricing-body">
        {/* Featured most-common price */}
        <aside
          className="price-featured"
          aria-labelledby="pricing-featured-title"
          data-testid="pricing-featured"
        >
          <p id="pricing-featured-title" className="pf-eyebrow">
            2000 &amp; Newer — Cars
          </p>
          <p className="pf-price" data-testid="pricing-featured-price">
            $60
          </p>
          <ul className="pf-highlights" data-testid="pricing-featured-highlights">
            <li>
              <span aria-hidden="true">✓</span> CERTIFICATE FEE INCLUDED
            </li>
            <li>
              <span aria-hidden="true">✓</span> ONE FREE RETEST WITHIN 30 DAYS
            </li>
          </ul>
          <p className="pf-time">
            Most standard inspections completed in about 10 minutes.
          </p>
          <p className="pf-sub">
            STAR Test-Only &middot; No repair upsells &middot; Walk-ins welcome
          </p>
          <div className="pf-actions" data-testid="pricing-featured-actions">
            <a
              href="tel:+17149931660"
              className="btn primary"
              data-testid="pricing-call-btn"
            >
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              data-testid="pricing-directions-btn"
            >
              Get Directions
            </a>
          </div>
        </aside>

        {/* Full pricing */}
        <h2>Full Pricing</h2>
        <div className="price-grid" data-testid="pricing-grid">
          {priceGroups.map((g) => (
            <div className="price-group" key={g.heading}>
              <h3>{g.heading}</h3>
              <ul>
                {g.rows.map((r) => (
                  <li
                    key={r.label}
                    className={r.featured ? "price-row featured" : "price-row"}
                    data-testid={`price-${g.heading.replace(/[^A-Za-z0-9]+/g, "-")}-${r.label.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  >
                    <span className="pr-label">{r.label}</span>
                    <span className="pr-price">{r.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2>Important Pricing Notes</h2>
        <ul className="pricing-notes" data-testid="pricing-notes">
          <li>
            <span className="pn-red">Certificate fee included</span> in all listed
            prices.
          </li>
          <li>
            One <span className="pn-red">FREE retest within 30 days</span> after
            a failed inspection.
          </li>
          <li>
            STAR-directed vehicles are priced the same as their applicable
            standard vehicle category above.
          </li>
        </ul>

        <h2>Why Choose In &amp; Out Smog Check</h2>
        <div className="cards" data-testid="why-choose-cards">
          {whyChoose.map((w) => (
            <div className="card" key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>

        <p className="pricing-footer-cta">
          Ready to get smogged?{" "}
          <a href="tel:+17149931660" data-testid="pricing-tel-inline">
            Call (714) 993-1660
          </a>{" "}
          or drive in — 144 S Bradford Ave, Placentia, CA 92870. Same STAR
          Test-Only shop that&rsquo;s served{" "}
          <a href="/placentia-smog-check">Placentia</a>,{" "}
          <a href="/fullerton-smog-check">Fullerton</a>, and{" "}
          <a href="/yorba-linda-smog-check">Yorba Linda</a> drivers since 1999.
        </p>
      </section>
    </>
  );
}
