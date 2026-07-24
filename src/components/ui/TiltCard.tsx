"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

export default function TiltCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const xSpring = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const ySpring = useSpring(mouseY, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(ySpring, [0, 1], ["15deg", "-15deg"]);
  const rotateY = useTransform(xSpring, [0, 1], ["-15deg", "15deg"]);
  
  const glareX = useTransform(xSpring, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(ySpring, [0, 1], ["0%", "100%"]);
  
  const background = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.4), transparent 50%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative [perspective:1200px] group ${className}`}
    >
      <div 
        className="w-full h-full relative overflow-hidden rounded-xl shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]" 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background }}
        />
        {children}
      </div>
    </motion.div>
  );
}
