import Seo, { SITE_URL, OG_IMAGE } from "@/components/Seo";
import SpeedTimeline from "@/components/SpeedTimeline";
import WhatToExpect from "@/components/WhatToExpect";
import WhyFaster from "@/components/WhyFaster";
import TrustBadges from "@/components/TrustBadges";
import NearbyCities from "@/components/NearbyCities";
import Reviews from "@/components/Reviews";
import LocationVerify from "@/components/LocationVerify";

const HERO_IMAGE = "data:image/jpeg;base64,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[... ELLIPSIZATION ...]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";

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
