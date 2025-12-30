import { CheckCircle } from "lucide-react";
import CTA from "./CTA";


export default function WorkshopOverviewSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT IMAGE ================= */}
          <div className="flex justify-center lg:justify-center">
  <div className="relative flex items-center justify-center">
    <img
      src="/host-smiling.png"
      alt="Workshop Host"
      className="
        relative z-10
        w-[300px]
        sm:w-[360px]
        lg:w-[420px]
        xl:w-[460px]
        object-contain
        drop-shadow-xl
      "
    />
  </div>
</div>


          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-10 leading-tight">
              Here’s a quick overview <br /> of what you’ll learn…
            </h2>

            {/* LIST */}
            <div className="space-y-4">
              {[
                "How to structure real estate Meta ad campaigns to avoid wasted spend and unstable results",
                "How to generate genuine enquiries that convert into site visits and sales",
                "A simple testing approach to identify what creatives and messaging work for your project",
                "How to scale ads without increasing pressure or losing lead quality",
                "The right way to target for open plots, apartments, and villa projects in 2025",
              ].map((text, i) => (
                <div
                  key={i}
                  className="
                    flex gap-4
                    rounded-xl
                    border border-slate-200
                    bg-slate-50
                    p-4
                  "
                >
                  <CheckCircle
                    className="text-[#0071BC] shrink-0 mt-1"
                    size={22}
                  />
                  <p className="text-slate-700 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM QUOTE ================= */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-2xl italic font-medium text-slate-700 leading-relaxed">
            “If you’re tired of inconsistent leads and want a clear, practical
            way to run Meta ads for real estate,
            <span className="text-slate-900">
              {" "}this workshop is designed for you.”
            </span>{" "}
            🙂
          </p>
        </div>

      </div>
      <CTA />
    </section>
  );
}
