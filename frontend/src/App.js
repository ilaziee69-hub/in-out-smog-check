import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/site.css";
import "@/red-theme.css";
import "@/fixes.css";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import StarCertified from "@/pages/StarCertified";
import Placentia from "@/pages/Placentia";
import Fullerton from "@/pages/Fullerton";
import YorbaLinda from "@/pages/YorbaLinda";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/star-certified-smog" element={<StarCertified />} />
          <Route path="/placentia-smog-check" element={<Placentia />} />
          <Route path="/fullerton-smog-check" element={<Fullerton />} />
          <Route path="/yorba-linda-smog-check" element={<YorbaLinda />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/smog-check-pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
