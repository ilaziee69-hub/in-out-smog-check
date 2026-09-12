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
