import { Helmet } from "react-helmet-async";

const SITE_URL = "https://download-hub-281.preview.emergentagent.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Per-route SEO wrapper.
 * `jsonLd` accepts a single object OR an array of objects — each becomes its
 * own <script type="application/ld+json"> tag so tools like Google Rich
 * Results Test can validate them independently.
 */
export default function Seo({
  title,
  description,
  path = "/",
  jsonLd,
}) {
  const url = `${SITE_URL}${path}`;
  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
