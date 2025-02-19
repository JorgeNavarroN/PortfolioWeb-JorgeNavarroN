import { useState } from "react";
import PropTypes from 'prop-types'

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
    <div className="dark:hover:drop-shadow-[0_0.313rem_0.313rem_rgb(0,0,0)] transition-all duration-500 hover:drop-shadow-[0_0.5rem_0.2rem_rgb(0,0,0)]">
      <a
        href={href}
        target="_blank"
        className="flex flex-row items-center relative justify-center gap-2 py-2 border-1 dark:border-[#063869] border-[#040507] rounded-full text-xl hover:-translate-y-1 dark:text-white text-[#333] dark:hover:bg-[#030303] dark:hover:border-[#201b2b] transition-all duration-200"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          WebkitMaskImage:
            "radial-gradient(circle, white 100%, transparent 50%)",
        }}
      >
        <span
          className="absolute w-40 h-full bg-gradient-to-br dark:from-[#55b7e7] from-[#ffffff81] to-transparent rounded-full blur-2xl"
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

LinkReference.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
}