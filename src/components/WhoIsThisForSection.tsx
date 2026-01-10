
import {FilledArrowIcon} from "./FilledIcons";

import CTA from "./CTA";

export default function WhoIsThisForSection() {
    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* ================= TOP EYEBROW ================= */}
                <p className="text-center text-sm tracking-widest uppercase text-slate-500 mb-4">
                    Proven to work for
                </p>

                {/* ================= MARQUEE TEXT ================= */}
                <div className="relative overflow-hidden mb-20">

                    {/* LEFT FADE */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

                    {/* RIGHT FADE */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

                    {/* MARQUEE CONTENT */}
                    <div className="flex w-max animate-marquee">
                        <h2 className="mx-8 whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
                            Builders & Developers ✦ Real Estate Promoters ✦ Channel Partners ✦
                            Sales-Driven Real Estate Teams
                        </h2>

                        <h2 className="mx-8 whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
                            Builders & Developers ✦ Real Estate Promoters ✦ Channel Partners ✦
                            Sales-Driven Real Estate Teams
                        </h2>
                    </div>
                </div>

                {/* ================= MAIN CONTENT ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">



                    {/* LEFT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* Glow (independent, NOT wrapping image) */}
                        <div className="absolute z-0 w-[280px] sm:w-[320px] lg:w-[360px] h-[520px] bg-[#0071BC]/20 blur-3xl rounded-[3rem]" />

                        {/* Image (NO WRAPPER) */}
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
                    {/* RIGHT CONTENT */}
                    <div className="h-full flex flex-col justify-center">

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-10">
                            Who is this <br /> workshop for?
                        </h3>

                        {/* <p className="text-slate-600 mb-8">
    This workshop is designed for real estate professionals who want
    <span className="font-medium text-slate-800">
      {" "}predictable lead generation without chaos.
    </span>
  </p> */}

                        <ul className="divide-y divide-dashed divide-slate-200">
                            <li className="flex items-start gap-2 py-2">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
                                    <FilledArrowIcon />
                                </span>

                                <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
                                    If You are a <strong>developer, builder, or promoter</strong> who has tried
                                    running Meta (Facebook / Instagram) ads but received
                                    <strong> low-quality or non-serious leads</strong>.
                                </p>
                            </li>

                            <li className="flex items-start gap-2 py-2">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
                                    <FilledArrowIcon />
                                </span>
                                <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
                                    If You are advertising <strong>open plots, flats, or villas</strong>, but
                                    enquiries are not converting into
                                    <strong> site visits or sales</strong>.
                                </p>
                            </li>

                            <li className="flex items-start gap-2 py-2">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
                                    <FilledArrowIcon />
                                </span>
                                <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
                                    If Your <strong>ad cost increases</strong> the moment you raise budgets and
                                    performance becomes <strong>unstable</strong>.
                                </p>
                            </li>

                            <li className="flex items-start gap-2 py-2">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
                                    <FilledArrowIcon />
                                </span>
                                <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
                                    If You tried <strong>duplicating campaigns or ad sets</strong> to scale, but
                                    results dropped or became <strong>inconsistent</strong>.
                                </p>
                            </li>

                            <li className="flex items-start gap-2 py-2">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
                                    <FilledArrowIcon />
                                </span>
                                <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
                                    If You feel <strong>confused about targeting, creatives,</strong> or campaign
                                    structure and unsure what truly works for
                                    <strong> real estate projects</strong>.
                                </p>
                            </li>

                            <li className="flex items-start gap-2 py-2">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
                                    <FilledArrowIcon />
                                </span>
                                <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
                                    If You want a <strong>simple, proven system</strong> to generate
                                    <strong> genuine high-intent real estate leads</strong> without wasting
                                    money.
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            {/* ================= BOTTOM QUOTE ================= */}
            <div className="mt-24 max-w-4xl mx-auto text-center">
                <p className="text-xl sm:text-2xl italic font-medium text-slate-700 leading-relaxed">
                    “If you truly want to grow your real estate projects, generate genuine
                    enquiries, and stay at peace —
                    <span className="text-slate-900">
                        {" "}running Meta ads with less complexity is essential.
                    </span>”
                </p>
            </div>
            <CTA />
        </section>
    );
}
