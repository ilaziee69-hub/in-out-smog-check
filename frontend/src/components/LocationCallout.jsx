/**
 * Compact location callout — placed high on the homepage (after services)
 * to warn customers before they navigate elsewhere. Deep-links to the full
 * LocationVerify section via smooth scroll.
 */
export default function LocationCallout() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("finding-us");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // update the URL hash for shareability
      window.history.replaceState(null, "", "#finding-us");
    }
  };

  return (
    <section
      className="loc-callout"
      data-testid="location-callout"
      aria-labelledby="loc-callout-heading"
    >
      <div className="loc-callout-inner">
        <div className="loc-callout-icon" aria-hidden="true">📍</div>
        <div className="loc-callout-text">
          <h2 id="loc-callout-heading" data-testid="loc-callout-heading">
            Find Us Easily —{" "}
            <span className="loc-callout-accent">
              Don&rsquo;t Go to the Wrong Smog Shop
            </span>
          </h2>
          <p data-testid="loc-callout-body">
            We&rsquo;re at{" "}
            <strong className="hl">Bradford&nbsp;Ave &amp; Center&nbsp;St</strong>.
            {" "}OC Smog Shop by Valvoline is{" "}
            <strong className="not-us">NOT&nbsp;us</strong>.
          </p>
        </div>
        <a
          href="#finding-us"
          onClick={handleClick}
          className="loc-callout-btn"
          data-testid="loc-callout-btn"
        >
          See Exactly Where We Are
          <span aria-hidden="true"> ↓</span>
        </a>
      </div>
    </section>
  );
}
