import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "@/components/Seo";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870";

const priceGroups = [
  { heading: "2000 & Newer", rows: [{ label: "Cars", price: "$60", featured: true }, { label: "Trucks, SUVs & Vans", price: "$70" }] },
  { heading: "1996–1999", rows: [{ label: "Cars", price: "$80" }, { label: "Trucks, SUVs & Vans", price: "$90" }] },
  { heading: "1976–1995", rows: [{ label: "Cars", price: "$90" }, { label: "Trucks, SUVs & Vans", price: "$100" }] },
  { heading: "Diesel & RV", rows: [{ label: "Diesel", price: "$80" }, { label: "RV", price: "$120" }] },
];

const pricingFaqs = [
  {
    q: "How much is a smog check in Placentia?",
    a: "Our published smog check prices start at $60 for 2000 and newer cars, making us an affordable option for drivers in Placentia and across Orange County. Every listed price includes the certificate fee.",
    anchorHref: "#full-pricing",
    anchorLabel: "See the full price list above.",
  },
  {
    q: "Why do smog check prices vary?",
    a: "The inspection price can vary based on the vehicle year and type. Older vehicles, trucks, SUVs, vans, diesel vehicles, and RVs use the applicable category shown in our pricing list.",
  },
  {
    q: "What does the free retest cover?",
    a: "If your vehicle fails its inspection, our current pricing includes one free retest within 30 days.",
  },
  {
    q: "Do I need an appointment?",
    a: "No. Walk-ins are welcome Monday through Friday from 8AM to 5PM and Saturday from 8AM to 3PM. Most standard inspections are completed in about 10 minutes.",
  },
  {
    q: "What should I bring to my smog check?",
    a: "Bring your vehicle registration and your DMV renewal notice if you have it.",
  },
  {
    q: "Do you test STAR-directed vehicles, and does it cost more?",
    a: "Yes. We are a STAR-certified Test-Only station. STAR-directed vehicles use the same applicable vehicle-category pricing shown on this page.",
    href: "/star-certified-smog",
    linkLabel: "Learn more about our STAR-certified smog checks.",
  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutomotiveBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "In & Out Smog Check",
      url: `${SITE_URL}/`,
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
    },
    {
      "@type": "Service",
      name: "Smog Check Service",
      serviceType: "STAR-Certified Test-Only Smog Check",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "City", name: "Placentia" },
        { "@type": "City", name: "Fullerton" },
        { "@type": "City", name: "Yorba Linda" },
      ],
      offers: priceGroups.flatMap((group) =>
        group.rows.map((row) => ({
          "@type": "Offer",
          name: `${group.heading} — ${row.label}`,
          priceCurrency: "USD",
          price: row.price.replace("$", ""),
          url: `${SITE_URL}/smog-check-pricing`,
        }))
      ),
    },
    {
      "@type": "FAQPage",
      mainEntity: pricingFaqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function Pricing() {
  return <>
    <Seo title="Affordable Smog Check Prices Placentia | In & Out Smog" description="Affordable, upfront smog check pricing in Placentia. Cars from $60 with certificate fee included, one free retest within 30 days, and no repair upsells." path="/smog-check-pricing" jsonLd={pricingSchema} />
    <main className="placentia-page">
      <section className="pl-hero"><div className="pl-hero-copy"><p className="pl-kicker">UPFRONT PRICING · CERTIFICATE INCLUDED</p><p className="pl-local">NO SURPRISE ADD-ONS</p><h1>Affordable Smog Check Prices in Placentia.<br /><span>Clear Before You Arrive.</span></h1><p className="pl-lead">Know the price before you pull into the bay. Our published prices include the certificate fee, and failed inspections include one free retest within 30 days.</p><div className="pl-actions"><a className="pl-btn pl-btn-red" href="tel:+17149931660">Call (714) 993-1660</a><a className="pl-btn pl-btn-outline" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a></div><p className="pl-hours">Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM</p></div><figure className="pl-shop-photo"><img src="/_next/image?url=%2Fphotos%2Finspection-bay.jpg&w=828&q=75" width="864" height="648" alt="Smog inspection bay at In & Out Smog Check in Placentia" /><figcaption>STAR CERTIFIED · TEST-ONLY · NO REPAIR UPSELLS</figcaption></figure></section>
      <section className="pl-proof" aria-label="Pricing highlights"><div><strong>$60</strong><span>2000+ CARS<br />START HERE</span></div><div><strong>✓</strong><span>CERTIFICATE<br />FEE INCLUDED</span></div><div><strong>1</strong><span>FREE RETEST<br />WITHIN 30 DAYS</span></div><div><strong>0</strong><span>REPAIR<br />UPSELLS</span></div></section>
      <section className="prose pricing-body">
        <aside className="price-featured" aria-labelledby="pricing-featured-title"><p id="pricing-featured-title" className="pf-eyebrow">MOST COMMON PRICE · 2000 &amp; NEWER CARS</p><p className="pf-price" style={{color:"#000000",WebkitTextFillColor:"#000000",opacity:1}}>$60</p><ul className="pf-highlights"><li style={{color:"#d71920",WebkitTextFillColor:"#d71920",opacity:1}}><span aria-hidden="true">✓</span> CERTIFICATE FEE INCLUDED</li><li style={{color:"#d71920",WebkitTextFillColor:"#d71920",opacity:1}}><span aria-hidden="true">✓</span> ONE FREE RETEST WITHIN 30 DAYS</li></ul><p className="pf-time">Most standard inspections are completed in about 10 minutes.</p><p className="pf-sub">STAR Test-Only · Walk-ins welcome · No repair sales pitch</p><div className="pf-actions"><a href="tel:+17149931660" className="btn primary">Call Now</a><a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn">Get Directions</a></div></aside>

        <h2 id="full-pricing">Full Smog Check Pricing</h2>
        <p>Our affordable smog check prices are published upfront. Choose your vehicle year and type below; every listed price already includes the certificate fee.</p>
        <div className="price-grid">
          {priceGroups.map((group) => (
            <div className="price-group" key={group.heading}>
              <h3>{group.heading}</h3>
              <ul>
                {group.rows.map((row) => (
                  <li key={row.label} className={row.featured ? "price-row featured" : "price-row"}>
                    <span className="pr-label">{row.label}</span>
                    <span className="pr-price">{row.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2>What’s Included</h2><ul className="pricing-notes"><li><span className="pn-red">Certificate fee included</span> in every listed price.</li><li>One <span className="pn-red">FREE retest within 30 days</span> after a failed inspection.</li><li>STAR-directed vehicles use the same applicable vehicle-category pricing shown above.</li><li>No appointment required — walk-ins are welcome.</li></ul>
        <h2>Why Our Pricing Is Straightforward</h2><div className="cards"><div className="card"><h3>Test-Only</h3><p>We inspect vehicles; we do not sell repairs. That keeps the visit focused on your smog test.</p></div><div className="card"><h3>No Hidden Certificate Fee</h3><p>The certificate fee is already included in the prices shown on this page.</p></div><div className="card"><h3>Free Retest</h3><p>If your vehicle fails, you get one free retest within 30 days.</p></div><div className="card"><h3>Fast Walk-In Service</h3><p>Most standard inspections are completed in about 10 minutes, and no appointment is needed.</p></div></div>

        <section className="pricing-faq" aria-labelledby="pricing-faq-title">
          <h2 id="pricing-faq-title">Smog Check Pricing FAQ</h2>
          <div className="faq-list">
            {pricingFaqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary className="faq-q"><span>{item.q}</span><span className="faq-icon" aria-hidden="true">+</span></summary>
                <div className="faq-a">{item.a}{item.anchorHref && <> <a href={item.anchorHref}>{item.anchorLabel}</a></>}{item.href && <> <Link to={item.href}>{item.linkLabel}</Link></>}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="cta-row"><a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="primary">Drive In Today</a><a href="tel:+17149931660" className="secondary">Call (714) 993-1660</a></div><p className="pricing-footer-cta">In &amp; Out Smog Check · <strong>144 S Bradford Ave, Placentia, CA 92870</strong> · STAR-Certified Test-Only · Serving local drivers since 1999.</p>
      </section>
    </main>
  </>;
}
