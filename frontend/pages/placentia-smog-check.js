import { useEffect } from "react";
import Head from "next/head";
import Placentia from "@/pages/Placentia";

export default function PlacentiaPage() {
  useEffect(() => {
    const paragraphs = [...document.querySelectorAll(".pl-local-split p")];
    const devNote = paragraphs.find((p) => p.textContent.includes("Instead of repeating the same reasons"));
    if (devNote) devNote.remove();

    const localCopy = paragraphs.find((p) => p.textContent.includes("Our shop sits on S Bradford Ave"));
    if (localCopy) localCopy.innerHTML = "Our shop sits at <strong>144 S Bradford Ave</strong> in Old Town Placentia. The historic Placentia water tower is about a block away, and Valencia High School is just a few minutes north on Bradford — two easy landmarks locals already know.";

    const points = document.querySelector(".pl-local-points");
    if (points) points.innerHTML = '<span><b>WATER TOWER</b> About a block from our shop</span><span><b>VALENCIA HIGH</b> Just a few minutes north on Bradford Ave</span><span><b>SINCE 1999</b> Serving Placentia drivers for 25+ years</span>';

    const serviceCards = [...document.querySelectorAll(".pl-service-grid article")];
    const vehicleCard = serviceCards.find((card) => card.textContent.includes("Diesel, Hybrid & More"));
    if (vehicleCard) vehicleCard.innerHTML = '<span>04</span><h3>Gas, Hybrid & Diesel</h3><p>We test eligible 1976+ gasoline, hybrid and alternative-fuel vehicles, plus 1998+ diesel vehicles up to 14,000 lbs GVWR.</p>';

    const findCopy = document.querySelector(".pl-find p:not(.pl-label)");
    if (findCopy) findCopy.innerHTML = 'Find us at <strong>144 S Bradford Ave</strong> in Old Town Placentia — about a block from the historic water tower and just a few minutes south of Valencia High School on Bradford Ave.';
  }, []);

  return <>
    <Head>
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:image:alt" content="In & Out Smog Check in Placentia, California" />
    </Head>
    <Placentia />
  </>;
}
