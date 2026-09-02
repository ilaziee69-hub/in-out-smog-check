import Seo from "@/components/Seo";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact In & Out Smog Check | Placentia, CA"
        description="Contact In & Out Smog Check in Placentia for hours, directions, phone information, upfront pricing, and fast walk-in STAR smog inspections."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "In & Out Smog Check",
          telephone: "+1-714-993-1660",
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
        }}
      />

      <section className="page-hero">
        <h1>Contact In & Out Smog Check</h1>
        <p className="lead">
          Drop by anytime during business hours, or call ahead — we’ll have you
          back on the road fast.
        </p>
      </section>

      <section className="contact" data-testid="contact-section">
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

        <div className="cta-row">
          <a
            href="tel:+17149931660"
            className="primary"
            data-testid="contact-call-btn"
          >
            Call Now
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
            data-testid="contact-directions-btn"
          >
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}
