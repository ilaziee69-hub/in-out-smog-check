/**
 * Trust Badges strip — premium credentials at a glance.
 */
export default function TrustBadges() {
  return (
    <section
      className="trust-badges"
      data-testid="trust-badges-section"
      aria-label="Trust and credentials"
    >
      <div className="tb-inner">
        <div className="tb-badge" data-testid="tb-since">
          <div className="tb-icon" aria-hidden="true">🏆</div>
          <div>
            <div className="tb-title">Since 1999</div>
            <div className="tb-sub">25+ years serving OC</div>
          </div>
        </div>
        <div className="tb-badge" data-testid="tb-star">
          <div className="tb-icon" aria-hidden="true">⭐</div>
          <div>
            <div className="tb-title">STAR Certified</div>
            <div className="tb-sub">DMV-directed vehicles OK</div>
          </div>
        </div>
        <div className="tb-badge" data-testid="tb-bar">
          <div className="tb-icon" aria-hidden="true">🛡️</div>
          <div>
            <div className="tb-title">BAR Licensed</div>
            <div className="tb-sub">California Bureau of Automotive Repair</div>
          </div>
        </div>
        <div className="tb-badge" data-testid="tb-dmv">
          <div className="tb-icon" aria-hidden="true">📄</div>
          <div>
            <div className="tb-title">DMV Electronic Cert</div>
            <div className="tb-sub">Transmitted in real time</div>
          </div>
        </div>
        <div className="tb-badge" data-testid="tb-test-only">
          <div className="tb-icon" aria-hidden="true">🎯</div>
          <div>
            <div className="tb-title">Test-Only Station</div>
            <div className="tb-sub">Independent inspections</div>
          </div>
        </div>
        <div className="tb-badge" data-testid="tb-no-upsells">
          <div className="tb-icon" aria-hidden="true">🤝</div>
          <div>
            <div className="tb-title">No Repair Upsells</div>
            <div className="tb-sub">Zero pressure, ever</div>
          </div>
        </div>
      </div>
    </section>
  );
}
