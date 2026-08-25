import { Link } from "react-router-dom";
import Seo, { SITE_URL, OG_IMAGE } from "@/components/Seo";

const ADDRESS = "144 S Bradford Ave, Placentia, CA 92870";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const DIR_FROM_YL = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
  "Yorba Linda, CA"
)}&destination=${encodeURIComponent(ADDRESS)}`;

const FAQS = [
  {
    q: "Where is the nearest In & Out Smog Check location to Yorba Linda?",
    a: "Our shop is at 144 S Bradford Ave, Placentia, CA 92870 — about 3 to 5 miles west of most Yorba Linda neighborhoods. For most drivers coming from the Nixon Library, East Lake Village, or Bryant Ranch, we're a straight 10-to-15 minute drive down Yorba Linda Blvd, which becomes E Chapman Ave once you cross into Placentia. Turn south on S Bradford Ave and we're on your right.",
  },
  {
    q: "Do you perform STAR smog checks for Yorba Linda residents?",
    a: "Yes. We're a fully STAR-Certified Test-Only station licensed by the California Bureau of Automotive Repair. If your DMV renewal notice says 'STAR Certified Station Required,' we can complete your inspection and transmit the pass result electronically to the DMV before you leave the lot.",
  },
  {
    q: "How long does a typical smog inspection take?",
    a: "Most gasoline vehicles are completed in about 10 minutes. Diesel inspections, older tailpipe tests, and STAR-directed vehicles may take a few minutes longer. We'll always give you a clear time estimate the moment you drive in.",
  },
  {
    q: "Do I need an appointment?",
    a: "No — walk-ins are welcome. We're open Monday through Friday 8AM to 5PM, and Saturday 8AM to 3PM. If you want to time your visit, you're welcome to call ahead at (714) 993-1660.",
  },
  {
    q: "Can I bring a STAR-directed vehicle from Yorba Linda?",
    a: "Absolutely. Yorba Linda's driveways see a lot of well-cared-for classic cars, luxury SUVs, and older diesel trucks — exactly the vehicles the DMV often directs to a STAR-Certified station. Bring your DMV renewal notice and we'll take care of it in one visit.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

// AutomotiveBusiness schema — real Placentia address, areaServed includes Yorba Linda
const bizJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "In & Out Smog Check",
  image: OG_IMAGE,
  url: `${SITE_URL}/yorba-linda-smog-check`,
  telephone: "+1-714-993-1660",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "144 S Bradford Ave",
    addressLocality: "Placentia",
    addressRegion: "CA",
    postalCode: "92870",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.google.com/maps/search/?api=1&query=In+%26+Out+Smog+Check%2C+144+S+Bradford+Ave%2C+Placentia%2C+CA+92870",
  ],
  areaServed: [
    { "@type": "City", name: "Yorba Linda" },
    { "@type": "City", name: "Placentia" },
    { "@type": "City", name: "Fullerton" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "160",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "15:00",
    },
  ],
};

export default function YorbaLinda() {
  return (
    <>
      <Seo
        title="Yorba Linda Smog Check | Fast STAR Station Near You"
        description="Need a smog check near Yorba Linda? Visit In & Out Smog in nearby Placentia for fast STAR-certified smog testing, walk-in service, and no repair-shop upselling."
        path="/yorba-linda-smog-check"
        jsonLd={[bizJsonLd, faqJsonLd]}
      />

      <section className="page-hero" data-testid="yl-hero">
        <span className="page-hero-eyebrow" data-testid="yl-eyebrow">
          Serving Yorba Linda Drivers Since 1999
        </span>
        <h1>Need a Smog Check Near Yorba Linda? Drive In Today.</h1>
        <p className="lead">
          In &amp; Out Smog Check is <strong>not located in Yorba Linda</strong>
          — we&rsquo;re just a short drive west at{" "}
          <strong>144 S Bradford Ave, Placentia, CA 92870</strong>. Same
          STAR-Certified Test-Only station Yorba Linda drivers have trusted for
          over 25 years.
        </p>

        <div className="page-hero-ctas" data-testid="yl-ctas">
          <a
            href={DIR_FROM_YL}
            target="_blank"
            rel="noopener noreferrer"
            className="primary"
            data-testid="yl-directions-btn"
          >
            Get Directions from Yorba Linda
          </a>
          <a
            href="tel:+17149931660"
            className="secondary"
            data-testid="yl-call-btn"
          >
            Call (714) 993-1660
          </a>
        </div>
      </section>

      <section className="prose" data-testid="yl-body">
        <h2>Why Yorba Linda Drivers Come to Us</h2>
        <p>
          Yorba Linda&rsquo;s neighborhoods — from the historic streets around
          the <strong>Nixon Presidential Library</strong> to the newer
          hillside communities of Kerrigan Ranch, Bryant Ranch, and East Lake
          Village — sit surprisingly far from a STAR-Certified Test-Only
          station. Most of the closest smog shops are combination test-and-repair
          shops, which means there&rsquo;s always pressure to sell you something.
        </p>
        <p>
          We&rsquo;re different. We only test — we never sell repairs — so
          Yorba Linda drivers get an honest pass-or-fail inspection with zero
          upsell pressure. That&rsquo;s the same reason we&rsquo;ve been the
          go-to shop for the Land of Gracious Living since 1999.
        </p>

        <h2>Advantages Yorba Linda Customers Get</h2>
        <div className="cards">
          <div className="card">
            <h3>~10-Minute Turnaround</h3>
            <p>
              Most inspections completed in about 10 minutes. Your DMV
              certificate is transmitted electronically before you drive off.
            </p>
          </div>
          <div className="card">
            <h3>STAR Certified · Test-Only</h3>
            <p>
              Handles every STAR-directed vehicle the DMV sends your way —
              exactly what most Yorba Linda renewal notices require.
            </p>
          </div>
          <div className="card">
            <h3>No Repair Upsells</h3>
            <p>
              We can&rsquo;t sell you repairs even if we wanted to. Test-Only
              means Test-Only. Your result is 100% independent.
            </p>
          </div>
          <div className="card">
            <h3>Great for Classic &amp; Older Vehicles</h3>
            <p>
              Yorba Linda has plenty of well-cared-for classic cars, luxury
              SUVs, and older diesel trucks. We handle every California-legal
              smog category from 1976+ gas to 1998+ diesels up to 14,000 lbs.
            </p>
          </div>
          <div className="card">
            <h3>Walk-Ins Welcome</h3>
            <p>
              No online booking. No calling ahead. Just drive down and pull
              into the bay — most Yorba Linda visitors are second in line, if
              that.
            </p>
          </div>
          <div className="card">
            <h3>Straight-Shot Drive</h3>
            <p>
              Yorba Linda Blvd becomes E Chapman Ave the moment you cross into
              Placentia. One right on S Bradford and you&rsquo;re at our door.
            </p>
          </div>
        </div>

        <h2>Simple Directions from Yorba Linda</h2>
        <ol className="step-list">
          <li>Head west on <strong>Yorba Linda Blvd</strong> — the road runs straight through the heart of Yorba Linda from Bryant Ranch through Old Town.</li>
          <li>Continue past N Lakeview Ave and N Rose Dr. Yorba Linda Blvd becomes <strong>E Chapman Ave</strong> as you cross into Placentia.</li>
          <li>Continue west about half a mile past N Kraemer Blvd.</li>
          <li>Turn <strong>south (left) onto S Bradford Ave</strong>.</li>
          <li>We&rsquo;re on the corner of Bradford &amp; Center St — next door to <strong>Tony&rsquo;s Deli</strong>. Look for the red <strong>SMOG CHECK ONLY CENTER</strong> sign.</li>
        </ol>
        <p>
          Total drive: about <strong>10 to 15 minutes</strong> from most Yorba
          Linda neighborhoods. Faster than an appointment slot at most local
          shops.
        </p>

        <h2>Our Location — 144 S Bradford Ave, Placentia</h2>
        <p>
          To be clear: <strong>we do not have a physical location in Yorba
          Linda</strong>. Our single STAR-Certified Test-Only shop is at 144 S
          Bradford Ave in Placentia — and Yorba Linda drivers make up a big
          portion of the vehicles we test every week. If you&rsquo;re
          searching &ldquo;smog check Yorba Linda&rdquo; on Google, this is
          the closest independent Test-Only station you&rsquo;ll find.
        </p>

        <div className="map-wrap" data-testid="yl-map">
          <iframe
            title="In & Out Smog Check location on Google Maps — 144 S Bradford Ave, Placentia"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <h2>Yorba Linda Smog Check FAQ</h2>
        <div className="faq-list" data-testid="yl-faq">
          {FAQS.map((item, i) => (
            <details
              key={i}
              className="faq-item"
              data-testid={`yl-faq-item-${i}`}
              open={i === 0}
            >
              <summary className="faq-q">
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>Also Serving Nearby Cities</h2>
        <p>
          Yorba Linda is one of several North Orange County cities we serve
          from our Placentia shop. If you&rsquo;re coming from a neighboring
          area, we have dedicated guides for those too:
        </p>
        <ul className="check-list" data-testid="yl-cross-links">
          <li>
            <Link to="/placentia-smog-check">Placentia Smog Check</Link>{" "}
            &mdash; our home city, 5 minutes away
          </li>
          <li>
            <Link to="/fullerton-smog-check">Fullerton Smog Check</Link>{" "}
            &mdash; 5 minutes west
          </li>
          <li>
            <Link to="/star-certified-smog">STAR Certified Test-Only</Link>{" "}
            &mdash; what STAR means and when the DMV requires it
          </li>
          <li>
            <Link to="/faq">General Smog Check FAQ</Link> &mdash; DMV
            transmission, exemptions, cost, and more
          </li>
        </ul>

        <div className="cta-row" data-testid="yl-cta-row">
          <a
            href={DIR_FROM_YL}
            target="_blank"
            rel="noopener noreferrer"
            className="primary"
            data-testid="yl-cta-directions"
          >
            Drive In from Yorba Linda
          </a>
          <a
            href="tel:+17149931660"
            className="secondary"
            data-testid="yl-cta-call"
          >
            Call (714) 993-1660
          </a>
        </div>
      </section>
    </>
  );
}
