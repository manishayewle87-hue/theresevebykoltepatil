"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FluidBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
      {/* SVG Filter for Gooey Effect */}
      <svg className="absolute w-0 h-0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>

      <div className="absolute inset-0 w-full h-full filter-[url(#goo)] opacity-[0.15]">
        {/* Blob 1: Forest Green */}
        <motion.div
          animate={{
            x: ["0%", "50%", "-20%", "0%"],
            y: ["0%", "30%", "-40%", "0%"],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#0B2B1B] rounded-full mix-blend-multiply blur-[80px]"
        />

        {/* Blob 2: Luxury Gold */}
        <motion.div
          animate={{
            x: ["0%", "-40%", "30%", "0%"],
            y: ["0%", "-50%", "20%", "0%"],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[#d4af37] rounded-full mix-blend-multiply blur-[80px]"
        />

        {/* Blob 3: Soft Bronze */}
        <motion.div
          animate={{
            x: ["0%", "30%", "-50%", "0%"],
            y: ["0%", "50%", "-10%", "0%"],
            scale: [1, 1.4, 0.9, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[30%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] bg-[#CD7F32] rounded-full mix-blend-multiply blur-[100px]"
        />
      </div>
    </div>
  );
}
