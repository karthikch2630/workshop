import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  { text: "Getting consistent leads and multiple sales with very low ad cost. - Karthik", img: "/testimonial-1.jpeg" },
  { text: "High-quality real estate leads and faster sales at a much lower CPL. - Srinivas", img: "/testimonial-2.jpeg" },
  { text: "More site visits and closed deals without increasing ad spend. - Deepika", img: "/testimonial-3.jpeg" },
  { text: "Stable leads and regular sales even for high-ticket projects. - Mahesh", img: "/testimonial-4.jpeg" },
  { text: "Lower cost per lead and better follow-ups that convert. - Rahul", img: "/testimonial-1.jpeg" },
  { text: "Consistent leads and sales across multiple locations with low budget. - Subhash Reddy", img: "/testimonial-2.jpeg" },
  { text: "Finally achieving sales with Meta Ads without wasting money. - Ashok Naidu", img: "/testimonial-4.jpeg" },
];

const TOTAL = testimonials.length;

export default function RealEstateResultsCarousel() {
  const [visible, setVisible] = useState(1);
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const touchStartX = useRef<number | null>(null);

  /* RESPONSIVE SLIDES COUNT */
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

  /* CLONE FIRST & LAST SLIDES */
  const slides = [
    testimonials[TOTAL - 1],
    ...testimonials,
    testimonials[0],
  ];

  /* HANDLE INFINITE RESET */
  useEffect(() => {
    if (!transition) return;

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(TOTAL);
      }, 500);
    }

    if (index === TOTAL + 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 500);
    }
  }, [index, transition]);

  /* RE-ENABLE TRANSITION */
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  /* TOUCH SWIPE */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) setIndex(i => i + 1);
    if (diff < -50) setIndex(i => i - 1);

    touchStartX.current = null;
  };

  return (
    <div className="relative mt-16">
      {/* ARROWS */}
      <button
        onClick={() => setIndex(i => i - 1)}
        className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-3 shadow-md"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={() => setIndex(i => i + 1)}
        className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-3 shadow-md"
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
          className={`flex gap-6 ${transition ? "transition-transform duration-500 ease-out" : ""}`}
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {slides.map((t, i) => (
            <div key={i} className="min-w-full sm:min-w-1/2 lg:min-w-1/3">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="italic text-sm text-slate-600 mb-4">
                  “{t.text}”
                </p>
                <img src={t.img} className="rounded-lg" alt="Testimonial" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i + 1)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === i + 1 ? "bg-blue-600 scale-110" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
