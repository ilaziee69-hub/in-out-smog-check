/**
 * Reviews / social-proof section.
 * Real Google Business Profile data: 4.8★ · 160 reviews.
 * Links out to Google for authentic browsing.
 */
const GOOGLE_REVIEWS_URL = "https://share.google/nDynvbuqcPoht5Uz2";
const RATING = 4.8;
const REVIEW_COUNT = 160;

const HIGHLIGHTS = [
  { icon: "⚡", tag: "Fast", copy: "In and out — most tests are done before you can finish a coffee." },
  { icon: "🤝", tag: "Honest", copy: "Test-Only means zero repair upsells and zero pressure. Pass or fail, that's it." },
  { icon: "🎯", tag: "Easy", copy: "Walk in, get tested, DMV notified electronically. Nothing to carry home." },
];

// Review tags surfaced on our Google listing — real data from Google Business Profile
const TAGS = [
  { label: "friendly technician", count: 4 },
  { label: "discount", count: 7 },
  { label: "cool staff", count: 2 },
  { label: "cash only", count: 5 },
];

// One real review to feature — from the Google listing screenshot the owner shared.
const FEATURED_REVIEW = {
  author: "Denise Radford",
  stars: 5,
  when: "a week ago",
  body: "This smog test facility opened a few minutes before it was even supposed to. I was the second one in line and I was out of there less than 15 minutes. Just made my day.",
};

// Star row helper — renders 5 filled/half/empty stars from a decimal rating.
function StarRow({ rating, size = 18 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.4 && rating - full < 0.85;
  return (
    <span
      className="star-row"
      style={{ fontSize: size }}
      aria-label={`${rating} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = i < full;
        const isHalf = !filled && i === full && half;
        return (
          <span
            key={i}
            className={`star ${filled ? "full" : isHalf ? "half" : "empty"}`}
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="reviews" data-testid="reviews-section" aria-labelledby="reviews-heading">
      <div className="reviews-inner">
        <span className="rv-eyebrow" data-testid="rv-eyebrow">★ Google Reviews</span>
        <h2 id="reviews-heading" data-testid="reviews-heading">
          Drivers Love How <span className="accent">Fast</span> We Are
        </h2>

        {/* Big rating card with the REAL numbers */}
        <div className="rv-rating-card" data-testid="rv-rating-card">
          <div className="rv-rating-num" data-testid="rv-rating-num">{RATING}</div>
          <div className="rv-rating-meta">
            <StarRow rating={RATING} size={26} />
            <div className="rv-rating-line">
              <strong data-testid="rv-review-count">{REVIEW_COUNT} Google reviews</strong>
              <span className="rv-rating-dot">·</span>
              <span>Placentia, CA</span>
            </div>
            <div className="rv-tags" data-testid="rv-tags">
              {TAGS.map((t) => (
                <span key={t.label} className="rv-tag">
                  {t.label} <span className="rv-tag-count">{t.count}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured real review */}
        <figure className="rv-featured" data-testid="rv-featured-review">
          <StarRow rating={FEATURED_REVIEW.stars} size={18} />
          <blockquote>
            <p>&ldquo;{FEATURED_REVIEW.body}&rdquo;</p>
          </blockquote>
          <figcaption>
            <span className="rv-avatar" aria-hidden="true">
              {FEATURED_REVIEW.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <div>
              <div className="rv-author">{FEATURED_REVIEW.author}</div>
              <div className="rv-when">
                Google review · {FEATURED_REVIEW.when}
              </div>
            </div>
          </figcaption>
        </figure>

        <p className="rv-lead">
          Two decades as the neighborhood smog shop — see what Placentia,
          Yorba Linda, Anaheim, and Fullerton drivers actually say about us on Google.
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
          Read All {REVIEW_COUNT} Google Reviews →
        </a>
      </div>
    </section>
  );
}
