import Head from "next/head";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://download-hub-281.preview.emergentagent.com";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function Seo({ title, description, path = "/", jsonLd }) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={OG_IMAGE} />
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
    </Head>
  );
}
