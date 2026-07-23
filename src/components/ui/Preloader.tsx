"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoadedTheReserveGlobal");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasLoadedTheReserveGlobal", "true");
    }, 2500); // 2.5 second dramatic hold

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="cinematic-preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-[#d4af37] overflow-hidden"
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
            <h1 className="font-serif text-4xl md:text-6xl tracking-[0.2em] uppercase mb-4 drop-shadow-2xl">
              The Reserve
            </h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="w-24 h-[1px] bg-[#d4af37]/50"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
