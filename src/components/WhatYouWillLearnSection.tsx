import {FilledTickIcon}from "./FilledIcons";
import CTA from "./CTA";

export default function WhatYouWillLearnSection() {
  return (
    <section className="w-full bg-[#7FB6DA] py-10">
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
                            src="/method.png"
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
          {/* RIGHT CONTENT */}
<div className="h-full flex flex-col justify-center">

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-10">
    What will you learn <br /> in the workshop?
  </h2>

  <ul className="divide-y divide-dashed divide-slate-200">

    <li className="flex items-start gap-2 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
        <FilledTickIcon />
      </span>
      <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed">
        How to <strong>launch real estate Meta ads correctly</strong> for
        open plots and villas.
      </p>
    </li>

    <li className="flex items-start gap-2 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
        <FilledTickIcon />
      </span>
      <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed">
        How to <strong>structure campaigns</strong> to attract genuine buyers —
        not time-pass leads.
      </p>
    </li>

    <li className="flex items-start gap-2 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
        <FilledTickIcon />
      </span>
      <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed">
        How to use <strong>video ads & landing pages</strong> to improve
        lead quality.
      </p>
    </li>

    <li className="flex items-start gap-2 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
        <FilledTickIcon />
      </span>
      <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed">
        How to <strong>test ads with a small budget (₹200)</strong> using a live
        demo before scaling.
      </p>
    </li>

    <li className="flex items-start gap-2 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
        <FilledTickIcon />
      </span>
      <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed">
        How to <strong>scale campaigns safely</strong> without duplicating ads or
        losing performance.
      </p>
    </li>

    <li className="flex items-start gap-2 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
        <FilledTickIcon />
      </span>
      <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed">
        <strong>Common mistakes</strong> real estate advertisers make and how to
        avoid wasting money.
      </p>
    </li>

  </ul>
</div>


        </div>

        {/* ================= BOTTOM QUOTE ================= */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl font-medium italic text-slate-900 leading-relaxed">
            “This workshop teaches a clear Meta Ads approach that real estate projects can scale with confidence and control.”
          </p>
        </div>

      </div>
      <CTA />
    </section>
  );
}
