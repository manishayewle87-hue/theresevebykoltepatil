"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen selection:bg-[#d4af37] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        
        {/* Subtle background noise/glow */}
        <div className="absolute inset-0 z-0 flex justify-center items-center opacity-20">
          <div className="w-96 h-96 bg-[#d4af37] rounded-full blur-[150px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Error 404
          </span>
          <h1 className="font-serif text-5xl md:text-8xl leading-none mb-8 text-slate-100 tracking-tight">
            Page Not <span className="italic text-[#d4af37]">Found.</span>
          </h1>
          <p className="font-sans font-light text-slate-400 max-w-md mx-auto mb-12">
            The page you are looking for has been moved or no longer exists. Return to the homepage to continue exploring The Reserve.
          </p>
          
          <Link 
            href="/"
            className="inline-block border border-[#d4af37]/30 text-slate-300 px-8 py-4 uppercase tracking-widest text-[10px] hover:bg-[#d4af37] hover:text-slate-950 transition-all duration-300"
          >
            Return to Sanctuary
          </Link>
        </motion.div>

      </main>
    </div>
  );
}
