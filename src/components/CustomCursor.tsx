"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.hasAttribute("data-hover")
      ) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      {/* Aura lumineuse */}
      <div
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${hover ? 2 : 1})`,
        }}
        className="pointer-events-none fixed z-50 w-32 h-32 rounded-full animated-gradient opacity-20 blur-3xl transition-transform duration-300 ease-out"
      />

      {/* Noyau lumineux */}
      <div
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${hover ? 1.5 : 1})`,
        }}
        className="pointer-events-none fixed z-50 w-6 h-6 rounded-full animated-gradient shadow-[0_0_25px_rgba(147,51,234,0.8)] transition-transform duration-300 ease-out"
      />
    </>
  );
}
