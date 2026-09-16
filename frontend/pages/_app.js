import "@/site.css";
import "@/red-theme.css";
import "@/final-home.css";
import "@/mockup-theme.css";
import "@/mobile-hero.css";
import "@/consistency.css";
import "@/placentia.css";
import "@/fixes.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>;
}
