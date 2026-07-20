import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/site.css";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import StarCertified from "@/pages/StarCertified";
import Placentia from "@/pages/Placentia";
import Fullerton from "@/pages/Fullerton";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/star-certified-smog" element={<StarCertified />} />
            <Route path="/placentia-smog-check" element={<Placentia />} />
            <Route path="/fullerton-smog-check" element={<Fullerton />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
