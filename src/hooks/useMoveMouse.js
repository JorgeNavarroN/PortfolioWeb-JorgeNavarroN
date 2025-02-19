import { useState } from "react";

export default function useMoveMouse() {
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

  return [position, isVisible, handleMouseMove, handleMouseLeave];
}
