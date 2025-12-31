export default function CTA() {
  return (
    <section className="w-full py-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-slate-200 rounded-xl bg-[#f7f6f4] px-6 sm:px-10 py-12 text-center">

          {/* COUNTDOWN */}
          <p className="text-slate-500 text-sm mb-2">
            Workshop begins in
          </p>

          <div className="flex justify-center gap-6 text-slate-800 text-sm mb-8">
            {[
              { value: "03", label: "Days" },
              { value: "02", label: "Hrs" },
              { value: "42", label: "Mins" },
              { value: "25", label: "Secs" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-semibold">{item.value}</p>
                <p className="text-xs text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>

          {/* DATE & TIME */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-slate-700 mb-10">
            <span className="flex items-center gap-2">
              📋 <strong>Saturday: 3rd Jan’26</strong>
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-2">
              ⏰ <strong>3 Hours:</strong> 7 PM to 10 PM
            </span>
          </div>

          {/* CTA BUTTON */}
          <div className="relative w-full max-w-3xl mx-auto flex justify-center">

  {/* RAYS */}
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[140%] h-[160%] bg-[conic-gradient(from_180deg,rgba(14,165,233,0.35),transparent,rgba(14,165,233,0.35))] blur-3xl opacity-70"></div>

  {/* CORE GLOW */}
  <div className="absolute inset-0 rounded-md bg-[#0ea5e9]/50 blur-2xl"></div>

  {/* BUTTON */}
  <button
    className="
      relative z-10
      w-full
      bg-[#0ea5e9]
      hover:bg-[#0284c7]
      text-white
      text-lg sm:text-xl
      font-semibold
      py-5
      rounded-md
      shadow-xl
      transition
    "
  >
    JOIN NOW AT ₹99
  </button>
</div>


          {/* SUB NOTE */}
          <p className="mt-4 text-sm text-slate-600 flex justify-center items-center gap-2">
            ⚠️ Join if it feels right. No pressure (:
          </p>

          {/* TRUST BADGES */}
          <div className="mt-10 flex justify-center gap-6 flex-wrap opacity-90">
            <img src="/ctaimage.png" alt="Money Back" className="h-10" />
            
          </div>

        </div>
      </div>
    </section>
  );
}
