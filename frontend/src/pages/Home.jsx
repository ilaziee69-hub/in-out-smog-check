import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "In & Out Smog Check",
  image: "https://download-hub-281.preview.emergentagent.com/og-image.jpg",
  url: "https://download-hub-281.preview.emergentagent.com/",
  telephone: "+1-714-555-0000",
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
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Seo
        title="In & Out Smog Check | Fast STAR-Certified Smog Checks in Placentia, CA"
        description="Fast, friendly, STAR-certified smog inspections at 144 S Bradford Ave, Placentia, CA 92870. Drive in. Smog done. Drive out. Open Mon–Sat, 8AM–6PM."
        path="/"
        jsonLd={businessJsonLd}
      />

      <header className="hero">
        <div className="hero-content">
          <div className="text">
            <h1>Fast • Friendly • Certified Smog Checks</h1>
            <p>
              Quick inspections, honest service, and no long waits. Stop by In
              & Out Smog Check in Placentia today — STAR-certified and trusted
              by Orange County drivers.
            </p>
            <div className="buttons">
              <Link to="/star-certified-smog" className="primary" data-testid="hero-services-btn">
                Our Services
              </Link>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary"
                data-testid="hero-directions-btn"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="image-box">
            <img src="/mascot.png" alt="In & Out Smog Check mascot car" data-testid="hero-mascot-img" />
          </div>
        </div>
      </header>

      <section id="services" className="services" data-testid="services-section">
        <h2>Why Drivers Choose Us</h2>
        <div className="cards">
          <div className="card" data-testid="card-star-certified">
            <h3>STAR Certified</h3>
            <p>Trusted inspections that meet California BAR standards.</p>
          </div>
          <div className="card" data-testid="card-quick-service">
            <h3>Quick Service</h3>
            <p>Most smog checks completed fast so you can get back on the road.</p>
          </div>
          <div className="card" data-testid="card-friendly-team">
            <h3>Friendly Team</h3>
            <p>Honest service with a clean, professional experience.</p>
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
              <a href="tel:+17145550000">(714) 555-0000</a>
            </p>
          </div>
          <div data-testid="contact-hours">
            <h3>Hours</h3>
            <p>Mon–Sat: 8AM – 6PM</p>
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
