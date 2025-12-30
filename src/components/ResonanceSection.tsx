import CTA from "./CTA";

export default function ResonanceSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-10 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-center">
            {/* Soft background circle */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[420px] h-[520px] rounded-full bg-slate-200/50 blur-2xl" />
            </div>

            {/* Image */}
            <img
              src="/host-thinking.png"
              alt="Real Estate Advertiser Thinking"
              className="
                relative z-10
                w-[320px]
                sm:w-[380px]
                lg:w-[420px]
                max-h-[600px]
                object-contain
                drop-shadow-2xl
                transition-transform duration-500 hover:scale-105
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:pl-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              Are you experiencing <br /> any of the following?
            </h2>

            <ul className="space-y-6 text-slate-700 leading-relaxed">
              {[
                "I’ve tried running Meta ads for my real estate projects, but the leads are not genuine or serious",
                "I don’t understand how to structure campaigns for open plots, flats, or villas",
                "I tried interest targeting and different audiences, but lead quality is still poor",
                "Whenever I increase the ad budget, the cost goes up and results start dropping",
                "My leads look good one day, but the next day performance completely drops",
                "I want a simple, end-to-end system to generate consistent, site-visit-ready enquiries",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="mt-1 h-4 w-4 rounded-full border-2 border-slate-400 flex-shrink-0" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: text.replace(
                        /(not genuine or serious|structure campaigns|lead quality is still poor|cost goes up|performance completely drops|simple, end-to-end system)/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM QUOTE ================= */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-2xl italic font-medium text-slate-700 leading-relaxed">
            “If you are facing these challenges,
            <span className="text-slate-900 font-semibold">
              {" "}this workshop will help you clearly.
            </span>”
          </p>
        </div>
      </div>
      <CTA />
    </section>
  );
}