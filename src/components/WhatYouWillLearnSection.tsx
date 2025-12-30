import { CheckCircle } from "lucide-react";
import CTA from "./CTA";

export default function WhatYouWillLearnSection() {
  return (
    <section className="w-full bg-[#7FB6DA] py-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-center">

            {/* Background circle */}
            <div className="absolute inset-0 flex justify-center">
              {/* <div className="w-[360px] h-[360px] rounded-full bg-white" /> */}
            </div>

            {/* Image */}
            <img
                            src="/host.png"
                            alt="Workshop Host"
                            className="
      relative z-10
      w-[300px]
      sm:w-[350px]
      lg:w-[390px]
      h-[420px]
      lg:h-[560px]
      object-cover
      
    "
                        />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-10">
              What will you learn <br /> in the workshop?
            </h2>

            <ul className="space-y-6 text-slate-800 leading-relaxed">
              <li className="flex gap-4">
                <CheckCircle size={22} className="text-slate-900 mt-1 shrink-0" />
                <span>
                  How to <strong>launch real estate Meta ads correctly</strong>{" "}
                  for open plots and villas
                </span>
              </li>

              <li className="flex gap-4">
                <CheckCircle size={22} className="text-slate-900 mt-1 shrink-0" />
                <span>
                  How to <strong>structure campaigns</strong> to attract genuine
                  buyers — not time-pass leads
                </span>
              </li>

              <li className="flex gap-4">
                <CheckCircle size={22} className="text-slate-900 mt-1 shrink-0" />
                <span>
                  How to use <strong>video ads & landing pages</strong> to
                  improve lead quality
                </span>
              </li>

              <li className="flex gap-4">
                <CheckCircle size={22} className="text-slate-900 mt-1 shrink-0" />
                <span>
                  How to <strong>test ads with a small budget (₹200)</strong>{" "}
                  using a live demo before scaling
                </span>
              </li>

              <li className="flex gap-4">
                <CheckCircle size={22} className="text-slate-900 mt-1 shrink-0" />
                <span>
                  How to <strong>scale campaigns safely</strong> without
                  duplicating ads or losing performance
                </span>
              </li>

              <li className="flex gap-4">
                <CheckCircle size={22} className="text-slate-900 mt-1 shrink-0" />
                <span>
                  <strong>Common mistakes</strong> real estate advertisers make
                  and how to avoid wasting money
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM QUOTE ================= */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl font-medium italic text-slate-900 leading-relaxed">
            “A simple, repeatable Meta Ads process for consistent
            <span className="font-semibold"> site-visit-ready leads</span>.”
          </p>
        </div>

      </div>
      <CTA />
    </section>
  );
}
