/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function DayNightSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", stopDragging);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[80vh] rounded-[3rem] overflow-hidden cursor-ew-resize select-none border border-white/10"
      onMouseDown={(e) => {
        isDragging.current = true;
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        isDragging.current = true;
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* Night View (Base Layer) */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg')] bg-cover bg-center brightness-50" />
        <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/80 text-xs tracking-widest uppercase">
          Cinematic Night View
        </div>
      </div>

      {/* Day View (Top Layer clipped by slider) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <div className="absolute inset-0 bg-[url('https://www.koltepatil.com/assets/uploads/gallery/17847871871558473491.jpg')] bg-cover bg-center brightness-110" />
        <div className="absolute top-8 right-8 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-black/80 text-xs tracking-widest uppercase">
          Pristine Day View
        </div>
      </div>

      {/* Scrubber Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)] pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/><path d="m15 18-6-6 6-6"/></svg>
        </div>
      </div>
    </div>
  );
}
