import { Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import WorkshopCTASection from "./components/WorkshopCTASection";
import WhoIsThisForSection from "./components/WhoIsThisForSection";
import WhatYouWillLearnSection from "./components/WhatYouWillLearnSection";
import ResonanceSection from "./components/ResonanceSection";
import MOTTO from "./components/MOTTO";
import WorkshopOverviewSection from "./components/WorkshopOverviewSection";
import Footer from "./components/Footer";

// Policy Pages
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import DisclosurePolicy from "./pages/DisclosurePolicy";
import ContactPage from "./pages/ContactPage";
import ScrollToTopButton from "./components/ScrollToTop";

function HomePage() {
  return (
    <>

      <HeroSection />
      <WorkshopCTASection />
      <WhoIsThisForSection />
      <WhatYouWillLearnSection />
      <ResonanceSection />
      <MOTTO />
      <WorkshopOverviewSection />
    </>
  );
}

function App() {
  return (
    <>
    <ScrollToTopButton />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Footer Pages */}
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/disclosure" element={<DisclosurePolicy />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Footer stays global */}
      <Footer />
    </>
  );
}

export default App;
