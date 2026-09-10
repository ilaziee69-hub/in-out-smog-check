import Seo, { SITE_URL, OG_IMAGE } from "@/components/Seo";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "In & Out Smog Check",
  image: OG_IMAGE,
  url: `${SITE_URL}/`,
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

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870";

export default function Home() {
  return (
    <>
      <Seo
        title="Fast Smog Check Placentia | STAR Certified | In & Out Smog"
        description="Fast STAR-certified smog checks in Placentia, CA. In & Out Smog Check offers quick, convenient emissions testing for local drivers."
        path="/"
        jsonLd={businessJsonLd}
      />

      <main className="final-home">
        <section className="fh-hero" aria-labelledby="fh-title">
          <div className="fh-hero-copy">
            <p className="fh-kicker">STAR CERTIFIED · TEST-ONLY STATION</p>
            <h1 id="fh-title">
              Fast. Honest.<br />
              Reliable Smog Checks<br />
              in <span>Placentia, CA.</span>
            </h1>
            <p className="fh-lead">
              Get in. Get out. No repairs, no upsells — just a fast, honest smog check from a local shop serving drivers since 1999.
            </p>
            <div className="fh-actions">
              <a className="fh-btn fh-btn-primary" href={directionsUrl} target="_blank" rel="noopener noreferrer">
                🚗 Get a Smog Check →
              </a>
              <a className="fh-btn fh-btn-outline" href="tel:+17149931660">☎ Call Now</a>
            </div>
            <div className="fh-mini-trust" aria-label="Quick service highlights">
              <span>★ STAR Certified Test-Only</span>
              <span>● Walk-Ins Welcome</span>
              <span>◷ Same-Day Service</span>
            </div>
          </div>

          <div className="fh-hero-photo">
            <img src="/photos/storefront.jpg" alt="In & Out Smog Check storefront in Placentia, California" />
          </div>
        </section>

        <section className="fh-process-strip" aria-label="10 minute smog check process">
          <div><b>5</b><span><strong>Vehicle / Visual</strong><small>Inspection · 5 min</small></span></div>
          <div><b>3</b><span><strong>Smog Test / OBD-II</strong><small>Testing · 3 min</small></span></div>
          <div><b>2</b><span><strong>DMV Certificate</strong><small>Sent · 2 min</small></span></div>
          <div><b>✓</b><span><strong>Get In. Get Out.</strong><small>About 10 minutes</small></span></div>
        </section>

        <section className="fh-main-grid" aria-labelledby="why-drivers-title">
          <figure className="fh-bay-photo">
            <img src="/photos/inspection-bay.jpg" alt="Interior inspection bay at In & Out Smog Check in Placentia" />
            <figcaption>INSPECTION BAY</figcaption>
          </figure>

          <div className="fh-why-panel">
            <div className="fh-why-copy">
              <p className="fh-eyebrow">WHY DRIVERS CHOOSE US</p>
              <h2 id="why-drivers-title">Fast service. Honest testing.</h2>
              <p>
                We provide STAR-certified test-only smog checks with no repair upsells. Our goal is simple: get you in, tested, and back on the road quickly.
              </p>
            </div>

            <div className="fh-feature-grid">
              <div><b>⌂</b><strong>Local & Family Owned</strong><small>Serving Placentia and nearby communities.</small></div>
              <div><b>🛠</b><strong>No Repairs or Upsells</strong><small>Test-only service means straightforward testing.</small></div>
              <div><b>🚗</b><strong>We Smog All Cars</strong><small>All cars welcome.</small></div>
              <div><b>★</b><strong>Trusted for 25+ Years</strong><small>Serving local drivers since 1999.</small></div>
            </div>

            <div className="fh-cta-row">
              <a className="fh-btn fh-btn-primary" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get a Smog Check →</a>
              <a className="fh-btn fh-btn-outline" href="tel:+17149931660">Call (714) 993-1660</a>
            </div>
          </div>
        </section>

        <section className="fh-location" aria-labelledby="find-us-title">
          <div className="fh-location-copy">
            <p className="fh-eyebrow">ONE PLACENTIA LOCATION</p>
            <h2 id="find-us-title">Find Us in Placentia</h2>
            <p className="fh-address">144 S Bradford Ave<br />Placentia, CA 92870</p>
            <p>Mon–Fri 8AM–5PM · Sat 8AM–3PM · Sun Closed</p>
            <a className="fh-btn fh-btn-dark" href={directionsUrl} target="_blank" rel="noopener noreferrer">📍 Get Directions →</a>
          </div>
          <div className="fh-map-wrap">
            <img src="/photos/illustrated-map-v2.png" alt="Illustrated directions map to In & Out Smog Check on Bradford Avenue in Placentia" />
          </div>
        </section>
      </main>
    </>
  );
}
