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

      <main className="new-home">
        <section className="nh-hero" aria-labelledby="nh-title">
          <div className="nh-hero-copy">
            <p className="nh-kicker">STAR CERTIFIED · TEST-ONLY STATION</p>
            <h1 id="nh-title">Fast. Honest.<br />Reliable Smog Checks<br />in <span>Placentia, CA.</span></h1>
            <p className="nh-lead">Get in. Get out. No repairs, no upsells — just a fast, honest smog check from a team serving local drivers since 1999.</p>
            <div className="nh-actions">
              <a className="nh-btn nh-btn-red" href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870" target="_blank" rel="noopener noreferrer">🚗 Get a Smog Check →</a>
              <Link className="nh-btn nh-btn-outline" to="/smog-check-pricing">View Prices</Link>
            </div>
            <div className="nh-mini-trust">
              <span>★ STAR Certified Test-Only</span>
              <span>● Walk-Ins Welcome</span>
              <span>◷ Same-Day Service</span>
            </div>
          </div>
          <div className="nh-hero-photo">
            <img src="/photos/storefront.jpg" alt="In & Out Smog Check storefront in Placentia, California" />
          </div>
        </section>

        <section className="nh-trust-strip" aria-label="Why choose In & Out Smog Check">
          <div><b>◷</b><span><strong>10 Minute</strong><small>Smog Checks</small></span></div>
          <div><b>◆</b><span><strong>STAR Certified</strong><small>Test-Only</small></span></div>
          <div><b>$</b><span><strong>Transparent</strong><small>Pricing</small></span></div>
          <div><b>●●●</b><span><strong>25+ Years</strong><small>in the Community</small></span></div>
        </section>

        <section className="nh-overview">
          <div className="nh-shop-photo">
            <img src="/photos/inspection-bay.jpg" alt="In & Out Smog Check inspection bay" />
          </div>
          <div className="nh-copy-block">
            <h2>A Cleaner Air.<br /><span>A Brighter Tomorrow.</span></h2>
            <p>At In & Out Smog Check, we help keep Placentia and surrounding communities on the road with fast, reliable smog checks. We’re a STAR-Certified Test-Only station, which means we don’t do repairs — just honest testing, done right.</p>
            <Link className="nh-btn nh-btn-red" to="/placentia-smog-check">About Our Shop →</Link>
          </div>
          <div className="nh-flow-card">
            <h3>Our 10-Minute Smog Check Flow</h3>
            <div className="nh-flow-row">
              <div><b>5</b><small>min</small><span>Vehicle / Visual Inspection</span></div>
              <i>→</i>
              <div><b>3</b><small>min</small><span>Smog Test / OBD-II</span></div>
              <i>→</i>
              <div><b>2</b><small>min</small><span>DMV Cert Sent</span></div>
            </div>
            <div className="nh-value-grid">
              <span>♧<small>Cleaner Air</small></span>
              <span>●<small>Local. Honest.</small></span>
              <span>●●●<small>Trusted 25+ Years</small></span>
            </div>
          </div>
        </section>

        <section className="nh-bottom-grid">
          <div className="nh-price-panel">
            <div className="nh-section-head">
              <div><h2>Smog Check Prices</h2><p>Certificate fees included. No hidden fees.</p></div>
              <Link className="nh-btn nh-btn-dark" to="/smog-check-pricing">View All Prices</Link>
            </div>
            <div className="nh-price-grid">
              <div><span>🚗</span><small>2000 & newer Cars</small><strong>$60</strong></div>
              <div><span>🚙</span><small>2000 & newer Trucks / SUVs / Vans</small><strong>$70</strong></div>
              <div><span>⛽</span><small>Diesel</small><strong>$80</strong></div>
              <div><span>🚐</span><small>RV</small><strong>$120</strong></div>
            </div>
          </div>

          <div className="nh-find-card">
            <div>
              <h2>Find Us in Placentia</h2>
              <p><b>📍</b> 144 S Bradford Ave<br />Placentia, CA 92870</p>
              <a className="nh-btn nh-btn-red" href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870" target="_blank" rel="noopener noreferrer">Get Directions →</a>
            </div>
            <img src="/photos/illustrated-map-v2.png" alt="Illustrated map showing In & Out Smog Check on Bradford Avenue in Placentia" />
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
