import RealEstateResultsCarousel from "./RealEstateResultsCarousel";
import CTA from "./CTA";

function CTAComponent() {
  return (
    <>
      
      <CTA />

      {/* ================= SOCIAL PROOF ================= */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-albert-sans">
          Proven Results from Real Estate Campaigns ❤️{" "}
          <span className="text-[#0071BC]">#grateful</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 font-albert-sans">
          Grateful for the trust from{" "}
          <strong>developers, builders, and channel partners</strong>
        </p>

        {/* Testimonials */}
        <RealEstateResultsCarousel />
      </div>
    </>
  );
}

export default CTAComponent;