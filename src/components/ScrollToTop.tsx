import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-11 h-11
        rounded-full
        bg-white/90 backdrop-blur
        border border-slate-200
        shadow-md
        hover:shadow-lg
        transition
      "
    >
      <ArrowUp size={18} className="text-slate-700" />
    </button>
  );
}
