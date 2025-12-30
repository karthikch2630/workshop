import CTA from "./CTA";

export default function FounderStorySection() {
  return (
    <section className="w-full bg-[#7FB6DA] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP MOTTO ================= */}
        <p className="text-center text-xs tracking-widest uppercase text-slate-700 mb-4">
          The Motto
        </p>

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-16">
          More Clarity. Less Stress. Real Results.
        </h2>

        {/* ================= CARD ================= */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="p-6 sm:p-10 flex justify-center items-center bg-slate-50">
            <img
              src="/founder.png" // replace with your image
              alt="Rishitha Varma – Founder Digi Thriva"
              className="rounded-2xl object-cover w-full max-w-[420px] shadow-md"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-8 sm:p-12 flex flex-col justify-center">

            <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
              Meet Rishitha Varma
            </p>

            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
              Founder – Digi Thriva (Advertising Agency)
            </h3>

            <div className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">

              <p>
                I’ve been running <strong>Meta ads for 5+ years</strong>, with
                <strong> 4+ years focused exclusively on real estate</strong> —
                open plots, apartments, and villas.
              </p>

              <p>
                Over time, I realized most real estate ads fail
                <strong> not because of budget</strong>, but because of
                <strong> wrong campaign structure and lack of clarity</strong>.
              </p>

              <p>
                In <strong>2025</strong>, I refined a
                <strong> simple, real estate–specific Meta ads system</strong>
                focused on genuine enquiries, site visits, and sales —
                <em> not just clicks</em>.
              </p>

              <p>
                From <strong>August 2025</strong>, this approach helped clients
                generate <strong>₹14 Cr+ in revenue</strong> with
                <strong> controlled ad spends</strong>.
              </p>

              <p>
                Real estate ads aren’t about quick ROAS —
                <strong> they’re about end-to-end ROI</strong>.
              </p>

              <p>
                That’s why I built <strong>Digi Thriva</strong> and this workshop —
                to help you run real estate ads
                <strong> clearly, confidently, and without stress</strong>.
              </p>

            </div>

          </div>
        </div>

      </div>
      {/* ================= BOTTOM QUOTE ================= */}
<div className="mt-24 max-w-4xl mx-auto text-center">
  <p className="text-xl sm:text-2xl italic font-medium text-slate-800 leading-relaxed">
    “The projects you want to sell, the enquiries you want, and the consistent
    growth you want —
    <span className="text-slate-900">
      {" "}everything becomes possible when real estate ads are run the right way.”
    </span>{" "}
    🙂
  </p>
</div>
<CTA />
    </section>
  );
}
