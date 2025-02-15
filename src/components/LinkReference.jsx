import { useState } from "react";

export default function LinkReference({ href, children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e) => {
    setIsVisible(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="hover:drop-shadow-[0_5px_5px_rgb(0,0,0)]">
      <a
        href={href}
        target="_blank"
        className="flex flex-row items-center relative justify-center gap-2 py-2 border-1 border-[#063869] rounded-full text-xl hover:-translate-y-1 hover:bg-[#030303] hover:border-[#201b2b] transition-all duration-200"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          WebkitMaskImage:
            "radial-gradient(circle, white 100%, transparent 50%)",
        }}
      >
        <span
          className="absolute w-40 h-full bg-gradient-to-br from-[#55b7e7] to-transparent rounded-full blur-2xl"
          style={{
            left: position.x - position.x / 2,
            opacity: isVisible ? "50%" : "0%",
            transition: "all 0.3s ease-in-out",
          }}
        />
        {children}
      </a>
    </div>
  );
}
