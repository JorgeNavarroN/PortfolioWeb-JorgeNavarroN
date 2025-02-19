import PropTypes from "prop-types";
import useMoveMouse from "../hooks/useMoveMouse";

export default function LinkReference({ href, children, file, isDownloaded }) {
  const [position, isVisible, handleMouseMove, handleMouseLeave] =
    useMoveMouse();

  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-row h-full items-center relative justify-center gap-2 py-2 border-1 dark:border-[#063869] border-[#040507] rounded-full text-xl hover:-translate-y-1 dark:text-white text-[#333] dark:hover:bg-[#030303] dark:hover:border-[#201b2b] transition-all duration-200 hover:drop-shadow-[0_0.5rem_0.2rem_rgb(0,0,0)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 50%)",
      }}
      download={isDownloaded && file}
    >
      <span
        className="absolute w-60 h-full bg-gradient-to-bl from-[#ffffff]/40 dark:bg-[#55b7e7] to-transparent rounded-full -z-20 blur-3xl"
        style={{
          left: position.x - position.x/2,
          opacity: isVisible ? "50%" : "0%",
          transition: "all 0.3s ease-in-out",
        }}
      />
      {children}
    </a>
  );
}

LinkReference.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  file: PropTypes.string,
  isDownloaded: PropTypes.bool,
};
