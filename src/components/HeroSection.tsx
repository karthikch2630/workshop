import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-[#1e88e5] text-white text-sm py-2 px-4 text-center font-medium">
        🚨 ATTN: This is for real estate marketers & developers only
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
        {/* Headline */}
        <h1 className=".font-albert-sans text-4xl sm:text-5xl md:text-5xl font-semibold leading-tight text-slate-900 font-eb-garamond">
          Run{" "}
          <span className="text-[#1e88e5] font-avenue">
            High-Quality Real Estate Ads
          </span>{" "}
          Peacefully using a{" "}
          <span className="text-[#1e88e5] font-avenue">
            Proven Meta Ads Method
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed">
          Learn the updated{" "}
          <strong>2025 Meta Ads strategy</strong> to generate{" "}
          <strong>high-intent leads</strong> for{" "}
          <strong>
            open plots, flats, villas, and real estate projects
          </strong>{" "}
          — without wasted ad spend or complicated campaign structures.
        </p>


        {/* Quote */}
        <p className="mt-4 text-sm sm:text-base italic text-slate-500">
          “Starting small & scaling confidently”
        </p>

        {/* ================= VIDEO ================= */}
        <div className="mt-14 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
            <video
              className="w-full h-full object-cover"
              poster="/video-thumbnail.jpg"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#1e88e5] shadow-xl">
                <Play size={34} className="text-white ml-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
