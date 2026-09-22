/**
 * "Real Photos" gallery — five distinct, real photos of In & Out Smog Check
 * at 144 S Bradford Ave. One photo per category, no duplicates.
 *
 * Mapping (source: In & Out Smog Master Photo Set):
 *   1. Inspection Bay      -> /photos/inspection-bay.jpg (real dyno interior)
 *   2. Waiting Area        -> /photos/waiting-area.jpg   (chairs + BAR signs)
 *   3. Storefront          -> /photos/storefront-approved-final.jpg (approved storefront)
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
              src="/_next/image?url=%2Fphotos%2Finspection-bay.jpg&w=1080&q=75"
              width="864"
              height="648"
              alt="STAR-certified Test-Only inspection bay at In & Out Smog Check"
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
              src="/_next/image?url=%2Fphotos%2Fwaiting-area.jpg&w=1080&q=75"
              width="923"
              height="967"
              alt="Customer waiting area at In & Out Smog Check in Placentia"
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
              src="/_next/image?url=%2Fphotos%2Fstorefront-approved-final.jpg&w=1200&q=75"
              width="1147"
              height="828"
              alt="In & Out Smog Check storefront and red SMOG CHECK ONLY CENTER sign"
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
              src="/_next/image?url=%2Fphotos%2Fbradford-center.jpg&w=1080&q=75"
              width="864"
              height="648"
              alt="Bradford Ave and Center St near In & Out Smog Check in Placentia"
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
              src="/_next/image?url=%2Fphotos%2Fel-farolito.jpg&w=1080&q=75"
              width="864"
              height="648"
              alt="El Farolito across Center St from In & Out Smog Check in Placentia"
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
