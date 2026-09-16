import Seo from "@/components/Seo";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870";

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
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "15:00" },
          ],
        }}
      />

      <main className="placentia-page">
        <section className="pl-hero">
          <div className="pl-hero-copy">
            <p className="pl-kicker">144 S BRADFORD AVE · PLACENTIA</p>
            <p className="pl-local">WALK-INS WELCOME</p>
            <h1>Easy to Find.<br /><span>Easy to Get In & Out.</span></h1>
            <p className="pl-lead">We’re on <strong>S Bradford Ave just off Chapman Ave</strong> in Placentia. Look for the red <strong>SMOG CHECK ONLY CENTER</strong> signage at our storefront.</p>
            <div className="pl-actions">
              <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
              <a className="pl-btn pl-btn-outline" href="tel:+17149931660">Call (714) 993-1660</a>
            </div>
            <p className="pl-hours">Mon–Fri 8AM–5PM · Sat 8AM–3PM · Sun Closed</p>
          </div>
          <figure className="pl-shop-photo">
            <img src="/photos/storefront-approved-final.jpg" alt="In & Out Smog Check storefront at 144 S Bradford Ave in Placentia" />
            <figcaption>THIS IS OUR SHOP · 144 S BRADFORD AVE</figcaption>
          </figure>
        </section>

        <section className="pl-proof" aria-label="Contact and location highlights">
          <div><strong>📍</strong><span>144 S<br />BRADFORD AVE</span></div>
          <div><strong>☎</strong><span>(714)<br />993-1660</span></div>
          <div><strong>★</strong><span>STAR<br />CERTIFIED</span></div>
          <div><strong>25+</strong><span>YEARS SERVING<br />LOCAL DRIVERS</span></div>
        </section>

        <section className="pl-service-split pl-local-split">
          <figure>
            <img src="/photos/inspection-bay.jpg" alt="Inspection bay at In & Out Smog Check in Placentia" />
            <figcaption>FAST WALK-IN TEST-ONLY SERVICE</figcaption>
          </figure>
          <div>
            <p className="pl-label">HOW TO FIND US</p>
            <h2>Bradford Ave, just south of Chapman.</h2>
            <p>From Chapman Ave, turn south onto Bradford Ave and head toward downtown Placentia. We’re at <strong>144 S Bradford Ave</strong>.</p>
            <div className="pl-local-points">
              <span><b>BRADFORD AVE</b> Our storefront is directly on Bradford</span>
              <span><b>CHAPMAN AVE</b> Main east-west route to the shop</span>
              <span><b>WATER TOWER</b> A familiar Placentia landmark nearby</span>
            </div>
          </div>
        </section>

        <section className="contact" data-testid="contact-section">
          <div className="contact-box">
            <div data-testid="contact-location"><h3>Location</h3><p>144 S Bradford Ave<br />Placentia, CA 92870</p></div>
            <div data-testid="contact-phone"><h3>Phone</h3><p><a href="tel:+17149931660">(714) 993-1660</a></p></div>
            <div data-testid="contact-hours"><h3>Hours</h3><p>Mon–Fri: 8AM–5PM<br />Sat: 8AM–3PM<br />Sun: Closed</p></div>
          </div>

          <div className="map-wrap" data-testid="contact-map">
            <iframe title="In & Out Smog Check location map" src="https://www.google.com/maps?q=144+S+Bradford+Ave,+Placentia,+CA+92870&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>

          <div className="cta-row">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="primary" data-testid="contact-directions-btn">Get Directions</a>
            <a href="tel:+17149931660" className="secondary" data-testid="contact-call-btn">Call Now</a>
          </div>
        </section>
      </main>
    </>
  );
}
