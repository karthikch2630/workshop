import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function MediumWorkshopCTA() {
  return (
    <section className="w-full py-10 ">
      <div className="max-w-6xl mx-auto px-6">

        <div className="
          relative
          overflow-hidden
          rounded-3xl
          bg-white
          border border-slate-200
          px-8 py-12 sm:px-12
          shadow-md
        ">

          {/* Subtle background glow */}
          <div className="absolute -top-20 right-10 w-[300px] h-[300px] bg-[#0071BC]/15 blur-[90px]" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                Live Online Workshop
              </p>

              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight">
                Run Meta Ads Peacefully for <br className="hidden sm:block" />
                Real Estate Projects
              </h3>

              <p className="mt-4 text-slate-600">
                Learn a simple, proven system to generate
                <strong className="text-slate-800">
                  {" "}high-intent enquiries
                </strong>{" "}
                for plots, flats, and villas — without wasting money.
              </p>

              {/* Date & Price */}
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  <strong>Jan 22nd, 2026</strong>
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  ₹99 only
                </span>
              </div>
            </div>

            {/* RIGHT CTA */}
            <div className="flex flex-col items-center gap-4">
              <button
                className="
                  inline-flex items-center gap-3
                  px-10 py-4
                  rounded-full
                  bg-[#0071BC]
                  text-white
                  text-lg
                  font-semibold
                  hover:bg-[#005fa3]
                  transition
                  shadow-lg
                "
              >
                Join now at ₹99
                <ArrowRight size={20} />
              </button>

              <p className="text-sm text-slate-500">
                No pressure • Attend from anywhere
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
