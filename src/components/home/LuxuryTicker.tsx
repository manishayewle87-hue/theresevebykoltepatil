"use client";

import { motion } from "framer-motion";

export default function LuxuryTicker() {
  const keywords = [
    "ITALIAN MARBLE",
    "SMART AUTOMATION",
    "50 ACRES",
    "BESPOKE FINISHES",
    "PRIVATE CONCIERGE",
    "HELIPAD ACCESS",
    "GLOBAL STANDARDS"
  ];

  return (
    <div className="w-full bg-slate-950 py-4 border-y border-[#d4af37]/20 overflow-hidden relative z-20 flex">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap items-center gap-8 px-4"
      >
        {/* Repeat the array a few times to ensure seamless infinite scroll */}
        {[...keywords, ...keywords, ...keywords].map((word, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-slate-300 font-bold">
              {word}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
