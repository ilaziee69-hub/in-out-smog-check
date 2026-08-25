import { Link } from "react-router-dom";
import Seo, { SITE_URL, OG_IMAGE } from "@/components/Seo";
import LocationCallout from "@/components/LocationCallout";
import LocationVerify from "@/components/LocationVerify";
import SpeedTimeline from "@/components/SpeedTimeline";
import WhyFaster from "@/components/WhyFaster";
import ShopGallery from "@/components/ShopGallery";
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "160",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Denise Radford" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "This smog test facility opened a few minutes before it was even supposed to. I was the second one in line and I was out of there less than 15 minutes. Just made my day.",
    },
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
        description="Fast STAR-certified smog checks in Placentia. Test-only station, walk-ins welcome, and most newer vehicles are finished quickly. Serving Placentia and nearby Orange County."
        path="/"
        jsonLd={businessJsonLd}
      />

      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <div className="text">
            <p className="eyebrow" data-testid="hero-eyebrow">
              STAR Certified · Test-Only Station
            </p>
            <div className="hero-rating" data-testid="hero-rating">
              <span className="hero-rating-stars" aria-hidden="true">
                ★★★★★
              </span>
              <strong>4.8</strong>
              <span className="hero-rating-sep">·</span>
              <span>160 Google reviews</span>
            </div>
            <h1>
              10-Minute Smog Checks.<br />
              <span className="accent">In. Out. Done.</span>
            </h1>
            <p>
              Fast, honest smog checks in Placentia. As a STAR-Certified{" "}
              <strong>Test-Only</strong> station, we don&rsquo;t sell repairs —
              so there&rsquo;s zero incentive to fail your car. Just plug in,
              test, pass, and drive.
            </p>
            <div className="buttons">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870"
                target="_blank"
                rel="noopener noreferrer"
                className="primary"
                data-testid="hero-directions-btn"
              >
                Drive In Now
              </a>
              <a
                href="tel:+17149931660"
                className="secondary"
                data-testid="hero-call-btn"
              >
                Call (714) 993-1660
              </a>
            </div>
            <p className="hero-microcopy" data-testid="hero-microcopy">
              Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM
            </p>

            <div className="hero-badges" data-testid="hero-badges">
              <div className="hero-badge" data-testid="hero-badge-10min">
                <span className="hb-icon" aria-hidden="true">⚡</span>
                <span>Most Visits ~10 Minutes</span>
              </div>
              <div className="hero-badge" data-testid="hero-badge-star">
                <span className="hb-icon" aria-hidden="true">⭐</span>
                <span>STAR Certified</span>
              </div>
              <div className="hero-badge" data-testid="hero-badge-walkins">
                <span className="hb-icon" aria-hidden="true">🚗</span>
                <span>Walk-Ins Welcome</span>
              </div>
              <div className="hero-badge" data-testid="hero-badge-dmv">
                <span className="hb-icon" aria-hidden="true">📄</span>
                <span>DMV Electronic Cert</span>
              </div>
            </div>
          </div>

          <div className="image-box">
            <img src="/mascot.webp" alt="In & Out Smog Check mascot car" data-testid="hero-mascot-img" />
          </div>
        </div>
      </header>

      {/* SPEED TIMELINE — reinforce the 10-minute promise right after the hero */}
      <SpeedTimeline />

      {/* WHY DRIVERS CHOOSE US */}
      <section className="services" data-testid="services-section">
        <h2>Why Drivers Choose Us</h2>
        <div className="cards">
          <div className="card" data-testid="card-10min">
            <h3>~10-Minute Turnaround</h3>
            <p>
              Most inspections completed in about 10 minutes. Your DMV
              certificate is transmitted electronically before you leave the lot.
            </p>
          </div>
          <div className="card" data-testid="card-test-only">
            <h3>Test-Only, No Upsells</h3>
            <p>
              We only test — we don&rsquo;t do repairs. That means no fake failures,
              no &ldquo;we found a problem,&rdquo; no pressure. Just a straight
              pass or fail.
            </p>
          </div>
          <div className="card" data-testid="card-star">
            <h3>STAR-Certified</h3>
            <p>
              Licensed by the California BAR to handle every STAR-directed
              vehicle the DMV sends our way. If your notice says STAR — we&rsquo;re it.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: TOP LOCATION CALLOUT — after services, before full location section */}
      <LocationCallout />

      {/* FULL LOCATION SECTION — illustrated map first, then warning, then Google Map, then Get Directions */}
      <LocationVerify />

      {/* WHY WE'RE FASTER — 6-card grid */}
      <WhyFaster />

      {/* THIS IS OUR SHOP — real photo gallery */}
      <ShopGallery />

      {/* SINCE 1999 HERITAGE */}
      <section className="heritage" data-testid="heritage-section">
        <div className="heritage-inner">
          <span className="heritage-badge">Since 1999</span>
          <h2>
            Been serving <span className="accent">Placentia, Yorba Linda,
            Anaheim, Fullerton</span> and the surrounding area since 1999.
          </h2>
          <p>
            Over two decades of honest, no-upsell smog inspections for Orange
            County drivers. Same shop. Same integrity. Same fast turnaround.
          </p>
          <div className="heritage-stats">
            <div className="stat" data-testid="stat-years">
              <span className="stat-num">25+</span>
              <span className="stat-label">Years in Business</span>
            </div>
            <div className="stat" data-testid="stat-since">
              <span className="stat-num">1999</span>
              <span className="stat-label">Serving OC Since</span>
            </div>
            <div className="stat" data-testid="stat-time">
              <span className="stat-num">~10<span className="stat-unit">min</span></span>
              <span className="stat-label">Average Test Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* BANNER */}
      <section className="banner" data-testid="banner-section">
        <h2>Drive In. Smog Done. Drive Out.</h2>
      </section>

      {/* REVIEWS */}
      <Reviews />

      {/* NEARBY CITIES — local SEO */}
      <NearbyCities />

      {/* CONTACT */}
      <section id="contact" className="contact" data-testid="contact-section">
        <h2>Visit In & Out Smog Check</h2>
        <div className="contact-box">
          <div data-testid="contact-location">
            <h3>Location</h3>
            <p>
              144 S Bradford Ave
              <br />
              Placentia, CA 92870
            </p>
          </div>
          <div data-testid="contact-phone">
            <h3>Phone</h3>
            <p>
              <a href="tel:+17149931660">(714) 993-1660</a>
            </p>
          </div>
          <div data-testid="contact-hours">
            <h3>Hours</h3>
            <p>
              Mon – Fri: 8AM – 5PM
              <br />
              Sat: 8AM – 3PM
              <br />
              Sun: Closed
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
