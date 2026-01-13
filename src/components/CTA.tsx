import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CTA() {
  const handleJoinNow = () => {
    window.location.href =
      "https://rzp.io/rzp/zgVglBoX";
  };

  // ✅ Lazy state initialization (NO setState in effect body)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }));

  useEffect(() => {
    // ✅ targetDate moved inside effect
    const targetDate = new Date("2026-01-22T19:00:00");

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // ✅ setState ONLY inside interval callback
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes glow-move {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-glow {
          animation: glow-move 3s ease-in-out infinite;
        }
      `}</style>

      <section className="w-full py-5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-slate-200 rounded-xl bg-[#f7f6f4] px-6 sm:px-10 py-12 text-center">
            {/* COUNTDOWN */}
            <p className="text-slate-500 text-sm mb-2">
              Workshop begins in
            </p>

            <div className="flex justify-center gap-6 text-slate-800 text-sm mb-8">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hrs" },
                { value: timeLeft.minutes, label: "Mins" },
                { value: timeLeft.seconds, label: "Secs" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-semibold text-lg">
                    {String(item.value).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* DATE & TIME */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-slate-700 mb-10">
              <span className="flex items-center gap-2">
                📋 <strong>Wednesday: 22nd Jan'26</strong>
              </span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-2">
                ⏰ <strong>3 Hours:</strong> 7 PM to 10 PM
              </span>
            </div>

            {/* CTA BUTTON */}
            <div className="relative w-full max-w-3xl mx-auto flex justify-center">
              {/* RAYS */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[140%] h-[160%] bg-[conic-gradient(from_180deg,rgba(14,165,233,0.35),transparent,rgba(14,165,233,0.35))] blur-3xl opacity-70"></div>

              {/* CORE GLOW */}
              <div className="absolute inset-0 rounded-md bg-[#0ea5e9]/50 blur-2xl"></div>

              {/* BUTTON */}
              <button
                onClick={handleJoinNow}
                className="
                  relative z-10
                  w-full
                  bg-[#0ea5e9]
                  text-white
                  text-lg sm:text-xl
                  font-semibold
                  py-5
                  rounded-md
                  transition-transform
                  duration-200
                  active:scale-95
                  overflow-hidden
                "
              >
                <span className="relative z-10">
                  JOIN NOW AT ₹99
                </span>

                <span
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-[#154053]
                    to-transparent
                    opacity-40
                    animate-glow
                  "
                ></span>
              </button>
            </div>

            {/* SUB NOTE */}
            <p className="mt-4 text-sm text-slate-600 flex justify-center items-center gap-2">
              ⚠️ Join if it feels right. No pressure (:
            </p>

            {/* TRUST BADGES */}
            <div className="mt-10 flex justify-center gap-6 flex-wrap opacity-90">
              <img src="/ctaimage.png" alt="Money Back" className="h-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
