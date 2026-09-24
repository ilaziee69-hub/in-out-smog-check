import StickyMobileNav from "@/components/StickyMobileNav";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/star-certified-smog", label: "STAR Certified" },
  { to: "/placentia-smog-check", label: "Placentia" },
  { to: "/fullerton-smog-check", label: "Fullerton" },
  { to: "/yorba-linda-smog-check", label: "Yorba Linda" },
  { to: "/smog-check-pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }) {
  return (
    <>
      <div className="site-nav-wrap" data-testid="site-nav">
        <nav className="site-nav">
          <a href="/" className="logo text-logo" data-testid="nav-logo" aria-label="In & Out Smog Check home">
            IN & OUT SMOG CHECK
          </a>

          <input
            id="nav-menu-toggle"
            className="nav-menu-toggle-input"
            type="checkbox"
            aria-label="Toggle navigation"
          />
          <label
            htmlFor="nav-menu-toggle"
            className="nav-toggle"
            data-testid="nav-toggle-btn"
          >
            <span />
            <span />
            <span />
          </label>

          <div className="nav-links">
            {NAV.map((item) => (
              <a
                key={item.to}
                href={item.to}
                className="nav-link"
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-cta mock-nav-call" href="tel:+17149931660" data-testid="nav-call-cta">
              <span>Call </span><strong>(714) 993-1660</strong>
            </a>
          </div>
        </nav>
      </div>

      <main>{children}</main>

      <footer className="site-footer" data-testid="site-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-text-logo">IN & OUT SMOG CHECK</div>
            <p>STAR-Certified Test-Only smog station in Placentia, CA.</p>
          </div>
          <div>
            <h4>Visit</h4>
            <p>144 S Bradford Ave<br />Placentia, CA 92870</p>
            <p><a href="tel:+17149931660">(714) 993-1660</a></p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>Mon – Fri: 8AM – 5PM</p>
            <p>Sat: 8AM – 3PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.to}><a href={n.to}>{n.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Test-Only · No Repairs · Fast Service<br />
          © 2026 In & Out Smog Check · 144 S Bradford Ave, Placentia, CA 92870 · All Rights Reserved
        </div>
      </footer>

      <StickyMobileNav />
    </>
  );
}
