import { Link } from "react-router-dom";
import Seo, { SITE_URL, OG_IMAGE } from "@/components/Seo";

const ADDRESS = "144 S Bradford Ave, Placentia, CA 92870";
const DIR_FROM_YL = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
  "Yorba Linda, CA"
)}&destination=${encodeURIComponent(ADDRESS)}`;
const NIXON_LIBRARY_PHOTO = "https://commons.wikimedia.org/wiki/Special:Redirect/file/Nixon_Presidential_Library_%26_Museum_%2830273078213%29.jpg";
const NIXON_LIBRARY_SOURCE = "https://commons.wikimedia.org/wiki/File:Nixon_Presidential_Library_%26_Museum_%2830273078213%29.jpg";

const FAQS = [
  {
    q: "Where is In & Out Smog Check from Yorba Linda?",
    a: "Our STAR-Certified Test-Only station is at 144 S Bradford Ave in Placentia, just west of Yorba Linda. Most Yorba Linda drivers reach us by taking Yorba Linda Blvd west toward Placentia, where it continues as E Chapman Ave, then turning south on Bradford Ave.",
  },
  {
    q: "Do you perform STAR smog checks for Yorba Linda residents?",
    a: "Yes. We are a STAR-Certified Test-Only station and can handle DMV-directed STAR inspections for Yorba Linda drivers.",
  },
  {
    q: "How long does a typical smog inspection take?",
    a: "Most standard inspections are completed in about 10 minutes. Some diesel, older, or specially directed vehicles may take longer.",
  },
  {
    q: "Do I need an appointment?",
    a: "No. Walk-ins are welcome Monday through Friday from 8AM to 5PM and Saturday from 8AM to 3PM.",
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
  ],
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
        title="Yorba Linda Smog Check | Fast STAR Test-Only Station Nearby"
        description="Need a smog check near Yorba Linda? Visit our nearby STAR-Certified Test-Only station in Placentia for fast service, walk-ins, and no repair upsells."
        path="/yorba-linda-smog-check"
        jsonLd={[bizJsonLd, faqJsonLd]}
      />

      <main className="placentia-page">
        <section className="pl-hero">
          <div className="pl-hero-copy">
            <p className="pl-kicker">STAR CERTIFIED · TEST-ONLY STATION</p>
            <p className="pl-local">SERVING YORBA LINDA DRIVERS SINCE 1999</p>
            <h1>Yorba Linda Smog Check.<br /><span>Worth the Short Drive.</span></h1>
            <p className="pl-lead">Need a smog check near Yorba Linda? Our shop is just west in Placentia at <strong>144 S Bradford Ave</strong>. Fast testing, no repair upsells, and walk-ins are always welcome.</p>
            <div className="pl-actions">
              <a className="pl-btn pl-btn-red" href={DIR_FROM_YL} target="_blank" rel="noopener noreferrer">Directions from Yorba Linda →</a>
              <a className="pl-btn pl-btn-outline" href="tel:+17149931660">Call (714) 993-1660</a>
            </div>
            <p className="pl-hours">Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM</p>
          </div>
          <figure className="pl-shop-photo">
            <img src="/_next/image?url=%2Fphotos%2Fstorefront-approved-final.jpg&w=828&q=75" width="1147" height="828" alt="In & Out Smog Check storefront near Yorba Linda in Placentia" />
            <figcaption>144 S BRADFORD AVE · JUST WEST OF YORBA LINDA</figcaption>
          </figure>
        </section>

        <section className="pl-proof" aria-label="Smog station highlights">
          <div><strong>~10</strong><span>MINUTE<br />SMOG CHECKS</span></div>
          <div><strong>★</strong><span>STAR<br />CERTIFIED</span></div>
          <div><strong>25+</strong><span>YEARS SERVING<br />LOCAL DRIVERS</span></div>
          <div><strong>0</strong><span>REPAIR<br />UPSELLS</span></div>
        </section>

        <section className="pl-service-split pl-local-split">
          <figure>
            <img src="/_next/image?url=%2Fphotos%2Finspection-bay.jpg&w=828&q=75" width="864" height="648" alt="Vehicle inspection bay at In & Out Smog Check near Yorba Linda" />
            <figcaption>FAST TEST-ONLY SERVICE FOR YORBA LINDA DRIVERS</figcaption>
          </figure>
          <div>
            <p className="pl-label">A SIMPLE DRIVE WEST</p>
            <h2>Yorba Linda Blvd takes you almost straight here.</h2>
            <p>From central Yorba Linda, head west on Yorba Linda Blvd toward Placentia. The road continues as E Chapman Ave; from there, turn south on Bradford Ave and you’re at our shop.</p>
            <div className="pl-local-points">
              <span><b>NIXON LIBRARY</b> Easy starting landmark from central Yorba Linda</span>
              <span><b>EAST LAKE</b> Straightforward route west toward Placentia</span>
              <span><b>BRADFORD AVE</b> Final turn to our smog station</span>
            </div>
          </div>
        </section>

        <section className="pl-water-tower">
          <div className="pl-water-copy">
            <p className="pl-label">A YORBA LINDA LANDMARK</p>
            <h2>Know the Nixon Library? You’re already on the right side of town.</h2>
            <p>The Richard Nixon Presidential Library is one of Yorba Linda’s most recognizable landmarks. From central Yorba Linda, the route to our shop stays simple: head west toward Placentia, continue onto Chapman Ave, then turn south on Bradford Ave.</p>
            <a className="pl-btn pl-btn-red" href={DIR_FROM_YL} target="_blank" rel="noopener noreferrer">Directions from Yorba Linda →</a>
          </div>
          <figure>
            <img src={NIXON_LIBRARY_PHOTO} alt="Exterior of the Richard Nixon Presidential Library and Museum in Yorba Linda, California" loading="lazy" />
            <figcaption>RICHARD NIXON PRESIDENTIAL LIBRARY · YORBA LINDA · EXTERIOR LANDMARK</figcaption>
          </figure>
        </section>

        <section className="pl-services">
          <p className="pl-label">WHAT WE TEST</p>
          <h2>Smog Check Services for Yorba Linda Drivers</h2>
          <div className="pl-service-grid">
            <article><span>01</span><h3>Registration Renewal</h3><p>Bring your DMV renewal notice and we’ll handle the required smog inspection.</p></article>
            <article><span>02</span><h3>STAR-Directed Vehicles</h3><p>If your notice requires a STAR station, our STAR-Certified Test-Only shop can perform the inspection.</p></article>
            <article><span>03</span><h3>Change of Ownership</h3><p>Buying or selling a vehicle? We handle California transfer smog inspections.</p></article>
            <article><span>04</span><h3>Gas, Hybrid & Diesel</h3><p>We inspect eligible 1976+ gasoline, hybrid and alternative-fuel vehicles, plus eligible 1998+ diesel vehicles up to 14,000 lbs GVWR.</p></article>
          </div>
          <p className="pl-star-link">Want more details about STAR requirements? <Link to="/star-certified-smog">See our STAR-certified smog guide →</Link></p>
        </section>

        <section className="pl-local-history">
          <div className="pl-history-copy">
            <p className="pl-label">SERVING NORTH ORANGE COUNTY</p>
            <h2>Local shop. Short drive. No appointment.</h2>
            <p>In &amp; Out Smog Check has served drivers from Placentia, Yorba Linda, Fullerton and nearby communities since 1999. We keep the process simple: drive in, get tested, and get back on the road.</p>
            <a className="pl-btn pl-btn-black" href={DIR_FROM_YL} target="_blank" rel="noopener noreferrer">Get Directions →</a>
          </div>
        </section>

        <section className="pl-find">
          <div>
            <p className="pl-label">EASY TO FIND</p>
            <h2>144 S Bradford Ave</h2>
            <p>From Yorba Linda, take Yorba Linda Blvd west toward Placentia, continue onto E Chapman Ave, then turn south on Bradford Ave. Our shop is just off the main route.</p>
          </div>
          <div className="pl-find-actions">
            <a className="pl-btn pl-btn-red" href={DIR_FROM_YL} target="_blank" rel="noopener noreferrer">Directions from Yorba Linda →</a>
            <a className="pl-btn pl-btn-outline-dark" href="tel:+17149931660">Call Us</a>
          </div>
        </section>

        <section className="pl-seo">
          <h2>Yorba Linda Smog Check FAQ</h2>
          <div className="faq-list" data-testid="yl-faq">
            {FAQS.map((item, i) => (
              <details key={i} className="faq-item" open={i === 0}>
                <summary className="faq-q"><span>{item.q}</span><span className="faq-icon" aria-hidden="true">+</span></summary>
                <div className="faq-a">{item.a}</div>
              </details>
            ))}
          </div>
          <p>We also serve drivers looking for a <Link to="/placentia-smog-check">Placentia smog check</Link> or <Link to="/fullerton-smog-check">Fullerton smog check</Link>.</p>
          <p style={{fontSize:"12px",color:"#666"}}>Landmark photo source: <a href={NIXON_LIBRARY_SOURCE} target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.</p>
        </section>
      </main>
    </>
  );
}
