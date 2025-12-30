import RealEstateResultsCarousel from "./RealEstateResultsCarousel";
export default function WorkshopCTASection() {
      
    return (
        <section className="w-full bg-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="
  relative
  overflow-hidden
  border border-slate-200
  rounded-3xl
  bg-white
  p-8 sm:p-10
  text-center
  shadow-md
">

  {/* Subtle glow */}
  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-[#0071BC]/15 blur-[90px]" />

  {/* ================= COUNTDOWN ================= */}
  <p className="relative text-lg uppercase tracking-widest text-slate-500 mb-4">
    Workshop begins in
  </p>

  <div className="relative flex justify-center gap-6 mb-8">
    {[
      { label: "Days", value: "00" },
      { label: "Hrs", value: "04" },
      { label: "Min", value: "00" },
      { label: "Sec", value: "23" },
    ].map((item) => (
      <div
        key={item.label}
        className="
          w-16 sm:w-20
          rounded-xl
          border border-slate-200
          bg-slate-50
          py-3
        "
      >
        <div className="text-2xl sm:text-3xl font-semibold text-slate-900">
          {item.value}
        </div>
        <div className="mt-1 text-[10px] uppercase tracking-wide text-slate-500">
          {item.label}
        </div>
      </div>
    ))}
  </div>

  {/* ================= DATE & TIME ================= */}
  <div className="relative text-sm text-slate-600 mb-8">
    <strong>Monday:</strong> 22nd Jan ’26 &nbsp;|&nbsp;
    <strong>3 Hours:</strong> 7 PM – 9 PM
  </div>

  {/* ================= CTA ================= */}
  <button className="
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    px-14
    py-4
    rounded-full
    bg-[#0071BC]
    text-white
    text-base
    font-semibold
    hover:bg-[#005fa3]
    transition
    shadow-lg
  ">
    Join Now at ₹99
  </button>

  {/* ================= NO PRESSURE ================= */}
  <p className="relative mt-4 text-sm text-slate-500">
    Join if it feels right. No pressure 🙂
  </p>

  {/* ================= TRUST ================= */}
  <div className="relative mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
    <span className="flex items-center gap-2">
      ✔ Simple & Standard
    </span>
    <span className="flex items-center gap-2">
      ✔ Quality Guaranteed
    </span>
  </div>
</div>



                {/* ================= SOCIAL PROOF ================= */}
                <div className="mt-24 text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                        Proven Results from Real Estate Campaigns ❤️{" "}
                        <span className="text-[#0071BC]">#grateful</span>
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-slate-600">
                        Grateful for the trust from{" "}
                        <strong>developers, builders, and channel partners</strong>
                    </p>

                    {/* Testimonials */}
                    <RealEstateResultsCarousel />
                </div>

            </div>
        </section>
    );
}
