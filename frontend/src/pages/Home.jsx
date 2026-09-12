import Seo, { SITE_URL, OG_IMAGE } from "@/components/Seo";
import SpeedTimeline from "@/components/SpeedTimeline";
import WhatToExpect from "@/components/WhatToExpect";
import WhyFaster from "@/components/WhyFaster";
import TrustBadges from "@/components/TrustBadges";
import NearbyCities from "@/components/NearbyCities";
import Reviews from "@/components/Reviews";
import LocationVerify from "@/components/LocationVerify";

const HERO_IMAGE = "https://raw.githubusercontent.com/ilaziee69-hub/in-out-smog-check/nextjs-migration/frontend/public/photos/storefront-hero.jpg";

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
