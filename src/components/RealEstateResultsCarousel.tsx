import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    text: "Getting consistent leads and multiple sales with very low ad cost. - Karthik",
    img: "/testimonial-1.jpeg",
  },
  {
    text: "High-quality real estate leads and faster sales at a much lower CPL. - Srinivas",
    img: "/testimonial-2.jpeg",
  },
  {
    text: "More site visits and closed deals without increasing ad spend. - Deepika",
    img: "/testimonial-3.jpeg",
  },
  {
    text: "Stable leads and regular sales even for high-ticket projects. - Mahesh",
    img: "/testimonial-4.jpeg",
  },
  {
    text: "Lower cost per lead and better follow-ups that convert. - Rahul",
    img: "/testimonial-1.jpeg",
  },
  {
    text: "Consistent leads and sales across multiple locations with low budget. - Subhash Reddy",
    img: "/testimonial-2.jpeg",
  },
  {
    text: "Finally achieving sales with Meta Ads without wasting money. - Ashok Naidu",
    img: "/testimonial-4.jpeg",
  },
];

export default function RealEstateResultsCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);

  const touchStartX = useRef<number | null>(null);

  /* RESPONSIVE VISIBLE COUNT */
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisible(3);
      else if (window.innerWidth >= 640) setVisible(2);
      else setVisible(1);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = testimonials.length - visible;

  /* TOUCH HANDLERS */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50 && index < maxIndex) setIndex(i => i + 1);
    if (diff < -50 && index > 0) setIndex(i => i - 1);

    touchStartX.current = null;
  };

  return (
    <div className="relative mt-16">
      {/* DESKTOP ARROWS */}
      <button
        onClick={() => setIndex(i => Math.max(i - 1, 0))}
        disabled={index === 0}
        className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-3 shadow-md disabled:opacity-30"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={() => setIndex(i => Math.min(i + 1, maxIndex))}
        disabled={index === maxIndex}
        className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-3 shadow-md disabled:opacity-30"
      >
        <ChevronRight size={22} />
      </button>

      {/* SLIDER */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="overflow-hidden"
      >
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-full sm:min-w-1/2 lg:min-w-1/3"
            >
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="italic text-sm text-slate-600 mb-4">
                  “{t.text}”
                </p>
                <img src={t.img} className="rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-blue-600 scale-110" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
