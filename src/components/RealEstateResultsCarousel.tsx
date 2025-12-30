import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  { text: "Finally getting consistent, high-intent leads for open plots without constant ad tweaks.", img: "/testimonial-1.png" },
  { text: "This method simplified Meta Ads for our apartment project and improved lead quality significantly.", img: "/testimonial-2.png" },
  { text: "Lower cost per lead and better follow-ups for villa projects. Very practical strategy.", img: "/testimonial-3.png" },
  { text: "Consistent lead flow for gated community launches.", img: "/testimonial-4.png" },
  { text: "Better closing support for channel partners.", img: "/testimonial-5.png" },
  { text: "Stable CPL across multiple project locations.", img: "/testimonial-6.png" },
  { text: "Reliable Meta Ads system for high-ticket real estate.", img: "/testimonial-7.png" },
];

export default function RealEstateResultsCarousel() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const maxIndex = testimonials.length - visible;

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50 && index < maxIndex) {
      setIndex((i) => i + 1);
    }

    if (diff < -50 && index > 0) {
      setIndex((i) => i - 1);
    }

    touchStartX.current = null;
  };

  return (
    <div className="relative mt-16">

      {/* DESKTOP ARROWS ONLY */}
      <button
        onClick={() => setIndex((i) => Math.max(i - 1, 0))}
        disabled={index === 0}
        className="
          hidden md:flex
          absolute -left-10 top-1/2 -translate-y-1/2 z-10
          rounded-full bg-white/80 backdrop-blur
          p-3 shadow-md hover:bg-white transition
          disabled:opacity-30
        "
      >
        <ChevronLeft size={22} className="text-slate-700" />
      </button>

      <button
        onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
        disabled={index === maxIndex}
        className="
          hidden md:flex
          absolute -right-10 top-1/2 -translate-y-1/2 z-10
          rounded-full bg-white/80 backdrop-blur
          p-3 shadow-md hover:bg-white transition
          disabled:opacity-30
        "
      >
        <ChevronRight size={22} className="text-slate-700" />
      </button>

      {/* SLIDER WITH SWIPE */}
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* FADE EDGES */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.333%]"
              >
                <div className="
                  h-full rounded-2xl border border-slate-200 bg-white
                  p-6 shadow-sm hover:shadow-md transition
                ">
                  <p className="italic text-sm text-slate-600 leading-relaxed mb-5">
                    “{t.text}”
                  </p>
                  <img src={t.img} alt="Campaign result" className="rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="mt-8 flex justify-center gap-3">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-2.5 w-2.5 rounded-full transition
              ${i === index
                ? "bg-[#0071BC] scale-110"
                : "bg-slate-300 hover:bg-slate-400"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
