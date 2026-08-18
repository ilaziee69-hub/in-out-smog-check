/**
 * Speed Timeline — visualizes the ~10-minute smog check flow.
 * Drive In → Vehicle Inspection → Smog Test → DMV Certificate → Drive Away
 */
export default function SpeedTimeline() {
  return (
    <section
      className="speed-timeline"
      data-testid="speed-timeline-section"
      aria-labelledby="speed-timeline-heading"
    >
      <div className="st-inner">
        <span className="st-eyebrow" data-testid="st-eyebrow">⚡ ~10 Minute Flow</span>
        <h2 id="speed-timeline-heading" data-testid="st-heading">
          From Drive-In to Drive-Away in About{" "}
          <span className="accent">10 Minutes</span>
        </h2>
        <p className="st-lead">
          Here&rsquo;s exactly what happens the moment you pull into 144 S
          Bradford Ave — most drivers are back on the road before the coffee
          they just bought gets cold.
        </p>

        <ol className="st-track" data-testid="st-track">
          <li className="st-step" data-testid="st-step-1">
            <div className="st-time">0:00</div>
            <div className="st-dot" aria-hidden="true"><span>🚗</span></div>
            <div className="st-body">
              <h3>Drive In</h3>
              <p>Pull straight into our bay — no appointment, no paperwork.</p>
            </div>
          </li>
          <li className="st-step" data-testid="st-step-2">
            <div className="st-time">~1 min</div>
            <div className="st-dot" aria-hidden="true"><span>🔍</span></div>
            <div className="st-body">
              <h3>Vehicle Inspection</h3>
              <p>Quick visual check of your smog control equipment.</p>
            </div>
          </li>
          <li className="st-step" data-testid="st-step-3">
            <div className="st-time">~5 min</div>
            <div className="st-dot" aria-hidden="true"><span>⚙️</span></div>
            <div className="st-body">
              <h3>Smog Test</h3>
              <p>OBD-II or tailpipe test, depending on your vehicle year.</p>
            </div>
          </li>
          <li className="st-step" data-testid="st-step-4">
            <div className="st-time">~8 min</div>
            <div className="st-dot" aria-hidden="true"><span>📄</span></div>
            <div className="st-body">
              <h3>DMV Certificate Sent</h3>
              <p>We electronically transmit your result to the California DMV.</p>
            </div>
          </li>
          <li className="st-step" data-testid="st-step-5">
            <div className="st-time">~10 min</div>
            <div className="st-dot done" aria-hidden="true"><span>✅</span></div>
            <div className="st-body">
              <h3>Drive Away</h3>
              <p>Done. Renew your registration online the second you leave.</p>
            </div>
          </li>
        </ol>

        <p className="st-footnote" data-testid="st-footnote">
          Actual times vary by vehicle. Older tailpipe tests and STAR-directed
          vehicles may take slightly longer.
        </p>
      </div>
    </section>
  );
}
