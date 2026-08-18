/**
 * "Why We're Faster" — 6 premium reason cards.
 */
const REASONS = [
  {
    icon: "⚡",
    title: "Test-Only Station",
    body: "We don't do repairs, so there's no delay while we try to find something wrong with your car.",
  },
  {
    icon: "🧑‍🔧",
    title: "Experienced Technician",
    body: "Decades on the same bay. Our tech knows every make and model — no wasted minutes.",
  },
  {
    icon: "📡",
    title: "DMV Electronic Transmission",
    body: "Your pass is sent to the DMV in real time. No paperwork, no waiting for the mail.",
  },
  {
    icon: "🚗",
    title: "Walk-Ins Welcome",
    body: "Skip appointment queues at other shops. Pull in, we'll test you on the spot.",
  },
  {
    icon: "🎯",
    title: "Streamlined Process",
    body: "Every step of our bay is arranged to shave seconds — clean lot, direct pull-in, single-station flow.",
  },
  {
    icon: "🤝",
    title: "Honest Inspection",
    body: "Zero upselling means the fastest possible test. Pass or fail — that's the whole conversation.",
  },
];

export default function WhyFaster() {
  return (
    <section
      className="why-faster"
      data-testid="why-faster-section"
      aria-labelledby="why-faster-heading"
    >
      <div className="wf-inner">
        <span className="wf-eyebrow" data-testid="wf-eyebrow">⚡ The Speed Advantage</span>
        <h2 id="why-faster-heading" data-testid="wf-heading">
          Why We&rsquo;re One of the{" "}
          <span className="accent">Fastest Smog Checks</span> in Orange County
        </h2>
        <p className="wf-lead">
          Six reasons the average visit takes about ten minutes at 144 S
          Bradford Ave.
        </p>

        <div className="wf-grid" data-testid="wf-grid">
          <div className="wf-card" data-testid="wf-card-test-only">
            <div className="wf-icon" aria-hidden="true">{REASONS[0].icon}</div>
            <h3>{REASONS[0].title}</h3>
            <p>{REASONS[0].body}</p>
          </div>
          <div className="wf-card" data-testid="wf-card-technician">
            <div className="wf-icon" aria-hidden="true">{REASONS[1].icon}</div>
            <h3>{REASONS[1].title}</h3>
            <p>{REASONS[1].body}</p>
          </div>
          <div className="wf-card" data-testid="wf-card-dmv">
            <div className="wf-icon" aria-hidden="true">{REASONS[2].icon}</div>
            <h3>{REASONS[2].title}</h3>
            <p>{REASONS[2].body}</p>
          </div>
          <div className="wf-card" data-testid="wf-card-walkins">
            <div className="wf-icon" aria-hidden="true">{REASONS[3].icon}</div>
            <h3>{REASONS[3].title}</h3>
            <p>{REASONS[3].body}</p>
          </div>
          <div className="wf-card" data-testid="wf-card-process">
            <div className="wf-icon" aria-hidden="true">{REASONS[4].icon}</div>
            <h3>{REASONS[4].title}</h3>
            <p>{REASONS[4].body}</p>
          </div>
          <div className="wf-card" data-testid="wf-card-honest">
            <div className="wf-icon" aria-hidden="true">{REASONS[5].icon}</div>
            <h3>{REASONS[5].title}</h3>
            <p>{REASONS[5].body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
