/**
 * "This Is Our Shop" — real-photo gallery to build authenticity.
 * Shows exterior + sign + driveway + inspection bay together so
 * customers know exactly what to expect when they pull in.
 */
export default function ShopGallery() {
  return (
    <section
      className="shop-gallery"
      data-testid="shop-gallery-section"
      aria-labelledby="shop-gallery-heading"
    >
      <div className="sg-inner">
        <span className="sg-eyebrow" data-testid="sg-eyebrow">📸 This Is Our Shop</span>
        <h2 id="shop-gallery-heading" data-testid="sg-heading">
          Real Photos of a Real{" "}
          <span className="accent">Placentia Smog Shop</span>
        </h2>
        <p className="sg-lead">
          No stock photos. No filters. This is exactly what 144 S Bradford Ave
          looks like — inside and out.
        </p>

        <div className="sg-grid" data-testid="sg-grid">
          <figure className="sg-item sg-large" data-testid="sg-item-bay">
            <img
              src="/photos/inspection-bay.webp"
              alt="Interior of In & Out Smog Check inspection bay showing the BAR-approved emissions analyzer, computer workstation, dyno rollers in the floor, and the anti-fatigue rubber mats"
              loading="lazy"
              decoding="async"
              width="1125"
              height="703"
            />
            <figcaption>
              <span className="sg-tag">Inspection Bay</span>
              <span className="sg-caption-text">
                Our BAR-approved emissions analyzer and dyno station — where
                the actual smog test happens.
              </span>
            </figcaption>
          </figure>

          <figure className="sg-item" data-testid="sg-item-storefront">
            <img
              src="/photos/storefront.webp"
              alt="Exterior view of In & Out Smog Check on S Bradford Ave with the red SMOG CHECK ONLY CENTER sign and STAR Certified badge"
              loading="lazy"
              decoding="async"
              width="1125"
              height="703"
            />
            <figcaption>
              <span className="sg-tag">Storefront</span>
              <span className="sg-caption-text">
                The white brick building at 144 S Bradford Ave, Placentia.
              </span>
            </figcaption>
          </figure>

          <figure className="sg-item" data-testid="sg-item-sign">
            <img
              src="/photos/sign.webp"
              alt="Close-up of the red SMOG CHECK ONLY CENTER sign with STAR Certified badge at In & Out Smog Check"
              loading="lazy"
              decoding="async"
              width="1125"
              height="440"
            />
            <figcaption>
              <span className="sg-tag">Our Sign</span>
              <span className="sg-caption-text">
                Look for the big red sign and the STAR Certified badge.
              </span>
            </figcaption>
          </figure>

          <figure className="sg-item" data-testid="sg-item-driveway">
            <img
              src="/photos/driveway.webp"
              alt="Wide concrete driveway and parking area at 144 S Bradford Ave — the view when pulling into In & Out Smog Check"
              loading="lazy"
              decoding="async"
              width="1125"
              height="703"
            />
            <figcaption>
              <span className="sg-tag">Driveway</span>
              <span className="sg-caption-text">
                Wide, easy pull-in with plenty of room for trucks and SUVs.
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
