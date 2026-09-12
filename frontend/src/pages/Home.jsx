import Seo, { SITE_URL, OG_IMAGE } from "@/components/Seo";
import SpeedTimeline from "@/components/SpeedTimeline";
import WhatToExpect from "@/components/WhatToExpect";
import WhyFaster from "@/components/WhyFaster";
import TrustBadges from "@/components/TrustBadges";
import NearbyCities from "@/components/NearbyCities";
import Reviews from "@/components/Reviews";
import LocationVerify from "@/components/LocationVerify";

const HERO_IMAGE = "data:image/jpeg;base64,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";

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
        <section className="mock-hero" aria-labelledby="mock-title">
          <div className="mock-copy">
            <p className="mock-kicker">STAR CERTIFIED · TEST-ONLY STATION</p>
            <div className="mock-rating" aria-label="4.8 stars from 160 Google reviews">
              <span className="mock-stars">★★★★★</span>
              <strong>4.8</strong>
              <span>160 Google reviews</span>
            </div>
            <p className="mock-seo-line">STAR-Certified Smog Check in Placentia, CA</p>
            <h1 id="mock-title">
              <span>10-Minute Smog Checks.</span>
              <span>In. Out. Done.</span>
            </h1>
            <p className="mock-lead">
              Fast, honest smog checks in Placentia. As a STAR-Certified <strong>Test-Only</strong> station, we don’t sell repairs — so there’s zero incentive to fail your car. Just plug in, test, pass, and drive.
            </p>
            <div className="mock-actions">
              <a className="mock-btn mock-btn-black" href={directionsUrl} target="_blank" rel="noopener noreferrer">Drive In Now</a>
              <a className="mock-btn mock-btn-call" href="tel:+17149931660"><span>Call </span><strong>(714) 993-1660</strong></a>
            </div>
            <p className="mock-hours">Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM</p>
            <div className="mock-badges" aria-label="Service highlights">
              <span>⚡ Most Visits ~10 Minutes</span>
              <span>★ STAR Certified</span>
              <span>🚗 Walk-Ins Welcome</span>
              <span>▣ DMV Electronic Cert</span>
              <span>👥 Local Family Owned</span>
            </div>
          </div>

          <div className="mock-photo-card">
            <img src={HERO_IMAGE} alt="In & Out Smog Check storefront in Placentia, California" />
          </div>
        </section>

        <SpeedTimeline />

        <section className="fh-main-grid" aria-labelledby="why-drivers-title">
          <figure className="fh-bay-photo">
            <img src="/photos/inspection-bay.jpg" alt="Interior inspection bay at In & Out Smog Check in Placentia" />
            <figcaption>INSPECTION BAY</figcaption>
          </figure>

          <div className="fh-why-panel">
            <div className="fh-why-copy">
              <p className="fh-eyebrow" style={{ background: "#000", color: "#fff", opacity: 1 }}>WHY DRIVERS CHOOSE US</p>
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

        <LocationVerify />

        <WhatToExpect />
        <WhyFaster />

        <section className="heritage" data-testid="heritage-section">
          <div className="heritage-inner">
            <span className="heritage-badge">Since 1999</span>
            <h2>
              Been serving <span className="accent">Placentia, Yorba Linda,
              Anaheim, Fullerton</span> and the surrounding area since 1999.
            </h2>
            <p>
              Over two decades of honest, no-upsell smog inspections for Orange County drivers. Same shop. Same integrity. Same fast turnaround.
            </p>
            <div className="heritage-stats">
              <div className="stat"><span className="stat-num">25+</span><span className="stat-label">Years in Business</span></div>
              <div className="stat"><span className="stat-num">1999</span><span className="stat-label">Serving OC Since</span></div>
              <div className="stat"><span className="stat-num">~10<span className="stat-unit">min</span></span><span className="stat-label">Average Test Time</span></div>
            </div>
          </div>
        </section>

        <section className="seo-content" data-testid="seo-content-section" aria-labelledby="seo-content-heading">
          <div className="seo-content-inner">
            <h2 id="seo-content-heading">Fast, Convenient Smog Checks in Placentia</h2>
            <p>In &amp; Out Smog Check provides fast and convenient smog testing for drivers in Placentia and nearby communities. Our shop is a licensed STAR Station, so we can inspect vehicles that require a STAR-certified smog check as well as vehicles needing a standard emissions inspection.</p>
            <p>We focus on making the smog check process simple and efficient. Customers can bring in their cars, trucks, SUVs, hybrids, and other eligible vehicles for emissions testing without unnecessary delays.</p>
            <p>Our shop is located on S Bradford Ave in Placentia, making us convenient for customers coming from Placentia, Yorba Linda, Fullerton, Anaheim, Brea, and surrounding Orange County communities.</p>
            <p>If your DMV registration renewal requires a smog inspection or specifically directs you to a STAR Station, we can help.</p>
          </div>
        </section>

        <TrustBadges />

        <section className="banner" data-testid="banner-section">
          <h2>Drive In. Smog Done. Drive Out.</h2>
        </section>

        <Reviews />
        <NearbyCities />

        <section id="contact" className="contact" data-testid="contact-section">
          <h2>Visit In & Out Smog Check</h2>
          <div className="contact-box">
            <div><h3>Location</h3><p>144 S Bradford Ave<br />Placentia, CA 92870</p></div>
            <div><h3>Phone</h3><p><a href="tel:+17149931660">(714) 993-1660</a></p></div>
            <div><h3>Hours</h3><p>Mon – Fri: 8AM – 5PM<br />Sat: 8AM – 3PM<br />Sun: Closed</p></div>
          </div>
        </section>
      </main>
    </>
  );
}
