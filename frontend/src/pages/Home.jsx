import { Link } from "react-router-dom";
import Seo, { SITE_URL, OG_IMAGE } from "@/components/Seo";
import LocationVerify from "@/components/LocationVerify";
import WhatToExpect from "@/components/WhatToExpect";
import WhyFaster from "@/components/WhyFaster";
import TrustBadges from "@/components/TrustBadges";
import NearbyCities from "@/components/NearbyCities";
import Reviews from "@/components/Reviews";

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
  sameAs: [
    "https://www.google.com/maps/search/?api=1&query=In+%26+Out+Smog+Check%2C+144+S+Bradford+Ave%2C+Placentia%2C+CA+92870",
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
            <h1 id="fh-title">Fast. Honest.<br />Reliable Smog Checks<br />in <span>Placentia, CA.</span></h1>
            <p className="fh-lead">Get in. Get out. No repairs, no upsells — just a fast, honest smog check from a local shop serving drivers since 1999.</p>
            <div className="fh-actions">
              <a className="fh-btn fh-btn-primary" href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870" target="_blank" rel="noopener noreferrer">🚗 Get a Smog Check →</a>
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

        <section className="fh-process-strip" aria-label="In and Out Smog Check highlights">
          <div><b>◷</b><span><strong>10 Minute</strong><small>Smog Checks</small></span></div>
          <div><b>⌂</b><span><strong>Local & Family Owned</strong><small>Serving Placentia</small></span></div>
          <div><b>▣</b><span><strong>DMV Certificate Sent</strong><small>Electronically</small></span></div>
          <div><b>●●●</b><span><strong>25+ Years</strong><small>in the Community</small></span></div>
        </section>

        <section className="fh-main-grid">
          <figure className="fh-bay-photo">
            <img src="/photos/inspection-bay.jpg" alt="In & Out Smog Check inspection bay in Placentia" />
            <figcaption>INSPECTION BAY</figcaption>
          </figure>

          <div className="fh-why-panel">
            <div className="fh-why-copy">
              <h2>Why Drivers Choose Us</h2>
              <p>In & Out Smog Check provides fast, honest STAR-certified test-only smog checks in Placentia. We don’t sell repairs, so there’s no repair upsell — just straightforward testing, quick service, and a smooth experience from start to finish.</p>
              <a className="fh-btn fh-btn-primary" href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870" target="_blank" rel="noopener noreferrer">Get a Smog Check →</a>
            </div>

            <div className="fh-feature-grid">
              <div><b>🛠</b><strong>No Repairs or Upsells</strong><small>Honest, test-only smog checks.</small></div>
              <div><b>◷</b><strong>Fast 10-Minute Process</strong><small>Get in and out quickly.</small></div>
              <div><b>🚗</b><strong>We Smog All Cars</strong><small>Cars of all years and types welcome.</small></div>
              <div><b>●●●</b><strong>Trusted for 25+ Years</strong><small>Serving local drivers since 1999.</small></div>
            </div>

            <div className="fh-find-card">
              <div>
                <h3>Find Us in Placentia</h3>
                <p>📍 144 S Bradford Ave<br />Placentia, CA 92870</p>
                <a className="fh-btn fh-btn-dark" href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870" target="_blank" rel="noopener noreferrer">Get Directions →</a>
              </div>
              <img src="/photos/illustrated-map-v2.png" alt="Map showing In & Out Smog Check on Bradford Avenue in Placentia" />
            </div>
          </div>
        </section>
      </main>

      <LocationVerify />
      <WhatToExpect />
      <WhyFaster />

      <section className="heritage" data-testid="heritage-section">
        <div className="heritage-inner">
          <span className="heritage-badge">Since 1999</span>
          <h2>Been serving <span className="accent">Placentia, Yorba Linda, Anaheim, Fullerton</span> and the surrounding area since 1999.</h2>
          <p>Over two decades of honest, no-upsell smog inspections for Orange County drivers. Same shop. Same integrity. Same fast turnaround.</p>
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
        </div>
      </section>

      <TrustBadges />
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
    </>
  );
}
