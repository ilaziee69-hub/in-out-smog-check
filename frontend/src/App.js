import "@/site.css";

function App() {
  return (
    <>
      <header className="hero">
        <nav>
          <div className="logo" data-testid="site-logo">
            IN & OUT <span>SMOG CHECK</span>
          </div>
          <a className="btn" href="#contact" data-testid="nav-call-now-btn">
            Call Now
          </a>
        </nav>

        <div className="hero-content">
          <div className="text">
            <h1 data-testid="hero-heading">Fast • Friendly • Certified Smog Checks</h1>
            <p>
              Quick inspections, honest service, and no long waits. Stop by In
              & Out Smog Check today.
            </p>
            <div className="buttons">
              <a href="#services" className="primary" data-testid="hero-services-btn">
                Our Services
              </a>
              <a href="#contact" className="secondary" data-testid="hero-directions-btn">
                Get Directions
              </a>
            </div>
          </div>

          <div className="image-box">
            <img src="/mascot.png" alt="Mascot Car" data-testid="hero-mascot-img" />
          </div>
        </div>
      </header>

      <section id="services" className="services" data-testid="services-section">
        <h2>Why Drivers Choose Us</h2>

        <div className="cards">
          <div className="card" data-testid="card-star-certified">
            <h3>STAR Certified</h3>
            <p>Trusted inspections that meet California standards.</p>
          </div>

          <div className="card" data-testid="card-quick-service">
            <h3>Quick Service</h3>
            <p>
              Most smog checks completed fast so you can get back on the road.
            </p>
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
            <p>Orange County, California</p>
          </div>

          <div data-testid="contact-phone">
            <h3>Phone</h3>
            <p>(714) 555-0000</p>
          </div>

          <div data-testid="contact-hours">
            <h3>Hours</h3>
            <p>Mon–Sat: 8AM – 6PM</p>
          </div>
        </div>

        <div className="map-wrap" data-testid="contact-map">
          <iframe
            title="In & Out Smog Check location map"
            src="https://www.google.com/maps?q=Orange+County,+California&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <footer data-testid="site-footer">
        <p>© 2026 In & Out Smog Check • All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
