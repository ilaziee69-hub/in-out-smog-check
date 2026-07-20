/**
 * Reviews / social-proof section.
 * Links out to the real Google Business Profile for authentic reviews.
 * No hard-coded stars or fake testimonials.
 */
const GOOGLE_REVIEWS_URL = "https://share.google/nDynvbuqcPoht5Uz2";

const HIGHLIGHTS = [
  { icon: "⚡", tag: "Fast", copy: "In and out — most tests are done before you can finish a coffee." },
  { icon: "🤝", tag: "Honest", copy: "Test-Only means zero repair upsells and zero pressure. Pass or fail, that’s it." },
  { icon: "🎯", tag: "Easy", copy: "Walk in, get tested, DMV notified electronically. Nothing to carry home." },
];

export default function Reviews() {
  return (
    <section className="reviews" data-testid="reviews-section" aria-labelledby="reviews-heading">
      <div className="reviews-inner">
        <span className="rv-eyebrow" data-testid="rv-eyebrow">★ Google Reviews</span>
        <h2 id="reviews-heading" data-testid="reviews-heading">
          Drivers Love How <span className="accent">Fast</span> We Are
        </h2>
        <p className="rv-lead">
          We&apos;ve been the neighborhood smog shop since 1999 — see what
          Placentia, Yorba Linda, Anaheim, and Fullerton drivers actually say
          about us on Google.
        </p>

        <div className="rv-highlights" data-testid="rv-highlights">
          {HIGHLIGHTS.map((h) => (
            <div key={h.tag} className="rv-highlight" data-testid={`rv-highlight-${h.tag.toLowerCase()}`}>
              <div className="rv-highlight-icon" aria-hidden="true">{h.icon}</div>
              <div className="rv-highlight-tag">{h.tag}</div>
              <p>{h.copy}</p>
            </div>
          ))}
        </div>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="primary rv-cta"
          data-testid="rv-google-cta"
        >
          Read Real Google Reviews →
        </a>
      </div>
    </section>
  );
}
