/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ showPreloader = true }: { showPreloader?: boolean }) {
  const [isLoading, setIsLoading] = useState(showPreloader);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!showPreloader) {
      return;
    }

    let start = 0;
    const duration = 2000; // 2 seconds
    const intervalTime = 30; // Update every 30ms
    const steps = duration / intervalTime;
    
    const interval = setInterval(() => {
      start += (100 / steps);
      if (start >= 100) {
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(Math.floor(start));
      }
    }, intervalTime);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.cookie = "preloader_shown=true; path=/; max-age=86400"; // Expires in 24 hours
    }, 2400); // Slight hold at 100%

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="cinematic-preloader"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0B2B1B] text-[#d4af37] overflow-hidden"
          exit={{ 
            y: "-100%", 
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-serif text-4xl md:text-6xl tracking-[0.2em] uppercase mb-8 drop-shadow-2xl">
              The Reserve
            </h1>
            
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden mb-6">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#d4af37]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            
            <div className="font-sans text-xs tracking-[0.3em] text-white/50 tabular-nums">
              {progress.toString().padStart(3, '0')}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
