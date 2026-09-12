/**
 * Speed Timeline — visualizes the ~10-minute smog check flow.
 * Drive In → Vehicle Inspection → Smog Test → DMV Certificate → Drive Away
 */
export default function SpeedTimeline() {
  const dotStyle = {
    background: "#111",
    border: "2px solid #fff",
    boxShadow: "0 0 0 5px rgba(255,255,255,.05)",
  };
  const timeStyle = { color: "#d71920" };

  return (
    <section
      className="speed-timeline"
      data-testid="speed-timeline-section"
      aria-labelledby="speed-timeline-heading"
      style={{ background: "#0a0a0a", color: "#fff" }}
    >
      <div className="st-inner" style={{ background: "#0a0a0a" }}>
        <span
          className="st-eyebrow"
          data-testid="st-eyebrow"
          style={{ background: "#000", color: "#fff", borderColor: "#fff" }}
        >
          ⚡ ~10 Minute Flow
        </span>
        <h2 id="speed-timeline-heading" data-testid="st-heading" style={{ color: "#fff" }}>
          From Drive-In to Drive-Away in About{" "}
          <span className="accent" style={{ color: "#d71920" }}>10 Minutes</span>
        </h2>
        <p className="st-lead" style={{ color: "#e7e7e7" }}>
          Here&rsquo;s exactly what happens the moment you pull into 144 S
          Bradford Ave — most drivers are back on the road before the coffee
          they just bought gets cold.
        </p>

        <ol className="st-track" data-testid="st-track">
          <li className="st-step" data-testid="st-step-1">
            <div className="st-time" style={timeStyle}>0:00</div>
            <div className="st-dot" style={dotStyle} aria-hidden="true"><span>🚗</span></div>
            <div className="st-body">
              <h3 style={{ color: "#fff" }}>Drive In</h3>
              <p style={{ color: "#e7e7e7" }}>Pull straight into our bay — no appointment, no paperwork.</p>
            </div>
          </li>
          <li className="st-step" data-testid="st-step-2">
            <div className="st-time" style={timeStyle}>~1 min</div>
            <div className="st-dot" style={dotStyle} aria-hidden="true"><span>🔍</span></div>
            <div className="st-body">
              <h3 style={{ color: "#fff" }}>Vehicle Inspection</h3>
              <p style={{ color: "#e7e7e7" }}>Quick visual check of your smog control equipment.</p>
            </div>
          </li>
          <li className="st-step" data-testid="st-step-3">
            <div className="st-time" style={timeStyle}>~5 min</div>
            <div className="st-dot" style={dotStyle} aria-hidden="true"><span>⚙️</span></div>
            <div className="st-body">
              <h3 style={{ color: "#fff" }}>Smog Test</h3>
              <p style={{ color: "#e7e7e7" }}>OBD-II or tailpipe test, depending on your vehicle year.</p>
            </div>
          </li>
          <li className="st-step" data-testid="st-step-4">
            <div className="st-time" style={timeStyle}>~8 min</div>
            <div className="st-dot" style={dotStyle} aria-hidden="true"><span>📄</span></div>
            <div className="st-body">
              <h3 style={{ color: "#fff" }}>DMV Certificate Sent</h3>
              <p style={{ color: "#e7e7e7" }}>We electronically transmit your result to the California DMV.</p>
            </div>
          </li>
          <li className="st-step" data-testid="st-step-5">
            <div className="st-time" style={timeStyle}>~10 min</div>
            <div className="st-dot done" style={dotStyle} aria-hidden="true"><span>✅</span></div>
            <div className="st-body">
              <h3 style={{ color: "#fff" }}>Drive Away</h3>
              <p style={{ color: "#e7e7e7" }}>Done. Renew your registration online the second you leave.</p>
            </div>
          </li>
        </ol>

        <p className="st-footnote" data-testid="st-footnote" style={{ color: "#e7e7e7" }}>
          Actual times vary by vehicle. Older tailpipe tests and STAR-directed
          vehicles may take slightly longer.
        </p>
      </div>
    </section>
  );
}
