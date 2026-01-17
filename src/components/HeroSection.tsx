import { Play } from "lucide-react";
import { useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <section className="w-full bg-white">
      {/* TOP BAR */}
      <div className="w-full bg-[#1e88e5] text-white text-sm py-2 px-4 text-center font-medium">
        🚨 ATTN: This is for real estate marketers & developers only
      </div>

      {/* HERO CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-slate-900">
          Run{" "}
          <span className="text-[#1e88e5]">High-Quality Real Estate Ads</span>{" "}
          Peacefully using a{" "}
          <span className="text-[#1e88e5]">Proven Meta Ads Method</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600">
          Learn the updated <strong>2025 Meta Ads strategy</strong> to generate{" "}
          <strong>high-intent leads</strong> for real estate projects.
        </p>

        {/* VIDEO */}
        <div className="mt-14 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border shadow-lg bg-black">
            <video
  ref={videoRef}
  className="w-full h-full object-contain"
  preload="auto"
  playsInline
  muted
  autoPlay
  onLoadedData={(e) => {
    const video = e.currentTarget;
    video.pause(); // 👈 renders first frame, then pauses
    video.currentTime = 0;
  }}
  onClick={pauseVideo}
  onEnded={() => setIsPlaying(false)}
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>


            {/* ▶ PLAY BUTTON (HIDDEN WHEN PLAYING) */}
            {!isPlaying && (
              <button
                onClick={playVideo}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#1e88e5] shadow-xl">
                  <Play size={34} className="text-white ml-1" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
