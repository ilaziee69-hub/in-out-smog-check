/**
 * "Real Photos" gallery — five distinct, real photos of In & Out Smog Check
 * at 144 S Bradford Ave. One photo per category, no duplicates.
 *
 * Mapping (source: In & Out Smog Master Photo Set):
 *   1. Inspection Bay      -> /photos/inspection-bay.jpg (real dyno interior)
 *   2. Waiting Area        -> /photos/waiting-area.jpg   (chairs + BAR signs)
 *   3. Storefront          -> /photos/storefront.jpg     (wide building + red SMOG CHECK sign)
 *   4. Exterior on street  -> /photos/bradford-center.jpg (Bradford & Center intersection)
 *   5. Local landmark      -> /photos/el-farolito.jpg    (view across to El Farolito)
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
              src="/photos/inspection-bay.jpg"
              alt="Interior of In & Out Smog Check STAR-certified Test-Only inspection bay at 144 S Bradford Ave, showing the emissions analyzer and dyno station"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="sg-tag">INSPECTION BAY</span>
              <span className="sg-caption-text">
                Our STAR-certified Test-Only inspection bay at 144 S Bradford Ave.
              </span>
            </figcaption>
          </figure>

          <figure className="sg-item" data-testid="sg-item-waiting">
            <img
              src="/photos/waiting-area.jpg"
              alt="Waiting area at In & Out Smog Check with four black customer chairs and BAR customer-information signs"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="sg-tag">WAITING AREA</span>
              <span className="sg-caption-text">
                Have a seat while we complete your smog inspection — most tests
                take about 10 minutes.
              </span>
            </figcaption>
          </figure>

          <figure className="sg-item" data-testid="sg-item-storefront">
            <img
              src="/photos/storefront.jpg"
              alt="Wide exterior of In & Out Smog Check white brick building with the large red SMOG CHECK ONLY CENTER and STAR Certified sign"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="sg-tag">STOREFRONT</span>
              <span className="sg-caption-text">
                Look for our white brick building and large red SMOG CHECK ONLY
                CENTER sign.
              </span>
            </figcaption>
          </figure>

          <figure className="sg-item" data-testid="sg-item-bradford">
            <img
              src="/photos/bradford-center.jpg"
              alt="Street view of Bradford Ave and Center St intersection in Old Town Placentia, near In & Out Smog Check"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="sg-tag">BRADFORD &amp; CENTER</span>
              <span className="sg-caption-text">
                We&rsquo;re just south of the Bradford Ave &amp; Center St
                intersection in Old Town Placentia.
              </span>
            </figcaption>
          </figure>

          <figure className="sg-item" data-testid="sg-item-farolito">
            <img
              src="/photos/el-farolito.jpg"
              alt="View from In & Out Smog Check across Center St toward El Farolito, an easy landmark to spot when arriving"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="sg-tag">ACROSS FROM EL FAROLITO</span>
              <span className="sg-caption-text">
                El Farolito is directly across Center St from our shop — an easy
                landmark when you arrive.
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
