import { NavLink, Link, useLocation, useNavigationType } from "react-router-dom";
import { useEffect, useState } from "react";
import StickyMobileNav from "@/components/StickyMobileNav";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/star-certified-smog", label: "STAR Certified" },
  { to: "/placentia-smog-check", label: "Placentia" },
  { to: "/fullerton-smog-check", label: "Fullerton" },
  { to: "/yorba-linda-smog-check", label: "Yorba Linda" },
  { to: "/smog-check-pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType === "POP") return;
    if (hash) return;
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, [pathname, hash, navType]);

  return (
    <>
      <div className="site-nav-wrap" data-testid="site-nav">
        <nav className="site-nav">
          <Link to="/" className="logo text-logo" data-testid="nav-logo" aria-label="In & Out Smog Check home">
            IN & OUT SMOG CHECK
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
                <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
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
