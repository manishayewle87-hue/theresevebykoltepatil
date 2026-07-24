/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

export default function VisionaryQuote() {
  return (
    <section className="relative z-10 bg-slate-950 py-40 border-y border-[#d4af37]/10">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-12">
            The Masterpiece
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-slate-100 leading-[1.4] tracking-wide font-light mb-16">
            "True luxury is not just what you see. It is the <span className="italic text-[#d4af37]">feeling of arriving</span> at a place that was designed, in every invisible detail, exactly for you."
          </h2>
          
          <div className="flex flex-col items-center gap-4">
            {/* A stylistic signature */}
            <div className="font-serif italic text-4xl md:text-5xl text-slate-500 opacity-60 signature-font" style={{ fontFamily: "var(--font-playfair)" }}>
              Kolte Patil
            </div>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-400">
              Lead Developers & Visionaries
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
