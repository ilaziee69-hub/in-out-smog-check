import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import StickyMobileNav from "@/components/StickyMobileNav";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/star-certified-smog", label: "STAR Certified" },
  { to: "/placentia-smog-check", label: "Placentia" },
  { to: "/fullerton-smog-check", label: "Fullerton" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [children]);

  return (
    <>
      <div className="site-nav-wrap" data-testid="site-nav">
        <nav className="site-nav">
          <Link to="/" className="logo" data-testid="nav-logo">
            IN & OUT <span>SMOG CHECK</span>
          </Link>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-toggle-btn"
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.exact}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="nav-cta"
              href="tel:+17149931660"
              data-testid="nav-call-cta"
            >
              Call (714) 993-1660
            </a>
          </div>
        </nav>
      </div>

      <main>{children}</main>

      <footer className="site-footer" data-testid="site-footer">
        <div className="footer-grid">
          <div>
            <div className="logo small">
              IN & OUT <span>SMOG CHECK</span>
            </div>
            <p>STAR-Certified Test-Only smog station in Placentia, CA.</p>
          </div>
          <div>
            <h4>Visit</h4>
            <p>
              144 S Bradford Ave
              <br />
              Placentia, CA 92870
            </p>
            <p>
              <a href="tel:+17149931660">(714) 993-1660</a>
            </p>
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
                <li key={n.to}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 In & Out Smog Check · 144 S Bradford Ave, Placentia, CA 92870 · All
          Rights Reserved
        </div>
      </footer>

      <StickyMobileNav />
    </>
  );
}
