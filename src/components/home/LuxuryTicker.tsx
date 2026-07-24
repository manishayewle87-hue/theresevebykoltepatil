"use client";

import { motion } from "framer-motion";

export default function LuxuryTicker() {
  const keywords = [
    "21 Acres of Luxury",
    "Riverside Greens",
    "NDA Hill Views",
    "IGBC Platinum Pre-Certified",
    "2 & 3 BHK Signature Residences",
    "Smart Home Automation",
    "Curated Concierge Services"
  ];

  return (
    <div className="w-full bg-white py-6 border-y border-[#0B2B1B]/10 overflow-hidden relative z-30 flex shadow-sm">
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
            <span className="font-serif text-2xl md:text-3xl tracking-wide uppercase text-[#0B2B1B] font-bold">
              {word}
            </span>
            <span className="text-[#d4af37] text-2xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
