import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  const isHome = props.__NEXT_DATA__?.page === "/";

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {!isHome && <NextScript />}
      </body>
    </Html>
  );
}
