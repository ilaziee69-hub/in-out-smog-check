/**
 * "What to Expect When You Arrive" — small two-card section that lives on
 * the Home page directly after the Directions / How to Spot Us block.
 *
 * Uses two real photos of the shop that are not shown elsewhere on the
 * Home page: the waiting area (chairs + BAR customer-info signs) and the
 * inspection bay (STAR Test-Only dyno). Mobile stacks the cards vertically;
 * desktop shows them side-by-side. No filler images.
 */
export default function WhatToExpect() {
  return (
    <section
      className="what-to-expect"
      data-testid="what-to-expect-section"
      aria-labelledby="wte-heading"
    >
      <div className="wte-inner">
        <h2 id="wte-heading" data-testid="wte-heading">
          What to Expect When You Arrive
        </h2>

        <div className="wte-grid" data-testid="wte-grid">
          <figure className="wte-card" data-testid="wte-card-waiting">
            <div className="wte-photo">
              <img
                src="/photos/waiting-area.jpg"
                alt="Waiting area at In & Out Smog Check with four black customer chairs and BAR customer-information signs"
                loading="lazy"
                decoding="async"
              />
              <span className="wte-tag">WAITING AREA</span>
            </div>
            <figcaption>
              Have a seat while we complete your smog inspection — most tests
              take about 10 minutes.
            </figcaption>
          </figure>

          <figure className="wte-card" data-testid="wte-card-bay">
            <div className="wte-photo">
              <img
                src="/photos/inspection-bay.jpg"
                alt="Interior inspection bay and emissions testing equipment at In & Out Smog Check in Placentia"
                loading="lazy"
                decoding="async"
              />
              <span className="wte-tag">INSPECTION BAY</span>
            </div>
            <figcaption>
              Our STAR-certified Test-Only inspection bay and testing
              equipment.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
