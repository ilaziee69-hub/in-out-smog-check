import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "In & Out Smog Check",
  image: "https://download-hub-281.preview.emergentagent.com/og-image.jpg",
  url: "https://download-hub-281.preview.emergentagent.com/",
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

export default function Home() {
  return (
    <>
      <Seo
        title="10-Minute Smog Check in Placentia, CA | STAR Certified Test-Only Station"
        description="In and out in 10 minutes. STAR-Certified Test-Only smog station in Placentia at 144 S Bradford Ave. No repairs, no upsells — just honest DMV inspections. (714) 993-1660."
        path="/"
        jsonLd={businessJsonLd}
      />

      <header className="hero">
        <div className="hero-content">
          <div className="text">
            <p className="eyebrow" data-testid="hero-eyebrow">
              STAR Certified · Test-Only Station
            </p>
            <h1>
              10-Minute Smog Checks.<br />
              <span className="accent">In. Out. Done.</span>
            </h1>
            <p>
              The fastest, most honest smog check in Placentia. As a
              STAR-Certified <strong>Test-Only</strong> station, we don’t sell
              repairs — so there’s zero incentive to fail your car. Just plug
              in, test, pass, and drive.
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
          </div>

          <div className="image-box">
            <img src="/mascot.png" alt="In & Out Smog Check mascot car" data-testid="hero-mascot-img" />
          </div>
        </div>
      </header>

      <section className="services" data-testid="services-section">
        <h2>Why Drivers Choose Us</h2>
        <div className="cards">
          <div className="card" data-testid="card-10min">
            <h3>10-Minute Turnaround</h3>
            <p>
              Most inspections wrapped up in ten minutes flat. Your DMV
              certificate is transmitted electronically before you leave the lot.
            </p>
          </div>
          <div className="card" data-testid="card-test-only">
            <h3>Test-Only, No Upsells</h3>
            <p>
              We only test — we don’t do repairs. That means no fake failures,
              no “we found a problem,” no pressure. Just a straight pass or fail.
            </p>
          </div>
          <div className="card" data-testid="card-star">
            <h3>STAR-Certified</h3>
            <p>
              Licensed by the California BAR to handle every STAR-directed
              vehicle the DMV sends our way. If your notice says STAR — we’re it.
            </p>
          </div>
        </div>
      </section>

      <section className="banner" data-testid="banner-section">
        <h2>Drive In. Smog Done. Drive Out.</h2>
      </section>

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

        <div className="map-wrap" data-testid="contact-map">
          <iframe
            title="In & Out Smog Check location map"
            src="https://www.google.com/maps?q=144+S+Bradford+Ave,+Placentia,+CA+92870&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
