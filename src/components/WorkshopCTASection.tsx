import RealEstateResultsCarousel from "./RealEstateResultsCarousel";

function CTAComponent() {
  return (
    <>
      <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg border border-gray-200">
        {/* Countdown Timer */}
        <div className="text-center mb-6">
          <p className="text-gray-700 text-lg mb-3 font-albert-sans">
            Workshop begins in
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">04</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">08</div>
              <div className="text-sm text-gray-600">Hrs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">42</div>
              <div className="text-sm text-gray-600">Mins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">35</div>
              <div className="text-sm text-gray-600">Secs</div>
            </div>
          </div>
        </div>

        {/* Date and Time Info */}
        <div className="flex items-center justify-center gap-3 mb-6 text-gray-700 font-albert-sans">
          <span className="text-2xl">📋</span>
          <span className="font-semibold">Saturday:</span>
          <span>10th Jan'26</span>
          <span className="text-2xl">⏰</span>
          <span className="font-semibold">3 Hours:</span>
          <span>7 PM to 10 PM</span>
        </div>

        {/* CTA Button */}
        <div className="mb-4">
          <button
            className="
              font-albert-sans
              relative z-10
              w-full
              bg-[#00bcd4]
              hover:bg-[#00acc1]
              text-white
              text-xl
              font-bold
              py-5
              rounded-md
              transition-all
              duration-300
              active:scale-95
              uppercase
              tracking-wide
            "
            style={{
              animation: 'glow 2s ease-in-out infinite',
              boxShadow: '0 4px 20px rgba(0, 188, 212, 0.4)',
            }}
          >
            JOIN NOW AT ₹99
          </button>

          <style>{`
            @keyframes glow {
              0%, 100% {
                box-shadow: 0 4px 20px rgba(0, 188, 212, 0.4);
              }
              50% {
                box-shadow: 0 4px 30px rgba(0, 188, 212, 0.6), 0 0 40px rgba(0, 188, 212, 0.3);
              }
            }
          `}</style>
        </div>

        {/* Warning Message */}
        <div className="text-center text-gray-600 mb-8 font-albert-sans">
          <span className="text-yellow-500 mr-2">⚠️</span>
          Join if it feels right. No pressure (:
        </div>

        {/* Trust Badges - Single Image */}
        <div className="flex justify-center items-center">
          <img 
            src="/ctaimage.png" 
            alt="Trust Badges - Money Back, Quality Guarantee, 100% Satisfaction" 
            className="h-20 object-contain"
          />
        </div>
      </div>

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