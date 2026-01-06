import { useState } from 'react';

function ButtonWithEffect() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <div className="relative">
      {/* Animated particles/arrays */}
      {clicked && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 pointer-events-none"
              style={{
                animation: `particle-${i} 1s ease-out forwards`,
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#0ea5e9] rounded-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-50px)`,
                  opacity: 0,
                }}
              />
            </div>
          ))}
        </>
      )}

      <button
        onClick={handleClick}
        className="
          relative z-10
          w-full
          bg-[#0ea5e9]
          hover:bg-[#0284c7]
          text-white
          text-lg sm:text-xl
          font-semibold
          py-5
          rounded-md
          shadow-xl
          transition
          animate-pulse
          active:scale-95
        "
      >
        JOIN NOW AT ₹99
      </button>

      <style>{`
        ${[...Array(8)].map((_, i) => `
          @keyframes particle-${i} {
            0% {
              transform: translate(-50%, -50%) rotate(${i * 45}deg) translateY(0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) rotate(${i * 45}deg) translateY(-80px);
              opacity: 0;
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
}

export default ButtonWithEffect;