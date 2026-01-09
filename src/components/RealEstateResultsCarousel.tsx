import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    text: "Getting consistent leads and multiple sales with very low ad cost. - Karthik",
    name: "Karthik",
    img: "/testimonial-1.jpeg",
  },
  {
    text: "High-quality real estate leads and faster sales at a much lower CPL. - Srinivas",
    name: "Srinivas",
    img: "/testimonial-2.jpeg",
  },
  {
    text: "More site visits and closed deals without increasing ad spend. - deepika",
    name: "Ramesh",
    img: "/testimonial-3.jpeg",
  },
  {
    text: "Stable leads and regular sales even for high-ticket projects. - Mahesh",
    name: "Mahesh",
    img: "/testimonial-4.jpeg",
  },
  {
    text: "Lower cost per lead and better follow-ups that convert. - Rahul ",
    name: "Rahul",
    img: "/testimonial-1.jpeg",
  },
  {
    text: "Consistent leads and sales across multiple locations with low budget. - Subhash Reddy",
    name: "Venkatesh",
    img: "/testimonial-2.jpeg",
  },
  {
    text: "Finally achieving sales with Meta Ads without wasting money. - Ashok Naidu",
    name: "Karthik R",
    img: "/testimonial-4.jpeg",
  },
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
