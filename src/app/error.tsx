"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen selection:bg-[#d4af37] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        
        {/* Subtle background noise/glow */}
        <div className="absolute inset-0 z-0 flex justify-center items-center opacity-10">
          <div className="w-96 h-96 bg-red-900 rounded-full blur-[150px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-red-500 mb-6 block font-bold">
            System Error
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-8 text-slate-100 tracking-tight">
            An issue <span className="italic text-[#d4af37]">occurred.</span>
          </h1>
          <p className="font-sans font-light text-slate-400 max-w-md mx-auto mb-12">
            We apologize, but something went wrong while loading this page. Our team has been notified.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => reset()}
              className="inline-block border border-[#d4af37] bg-[#d4af37] text-slate-950 px-8 py-4 uppercase tracking-widest text-[10px] hover:bg-transparent hover:text-[#d4af37] transition-all duration-300"
            >
              Try Again
            </button>
            <Link 
              href="/"
              className="inline-block border border-slate-700 text-slate-300 px-8 py-4 uppercase tracking-widest text-[10px] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
            >
              Return Home
            </Link>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
