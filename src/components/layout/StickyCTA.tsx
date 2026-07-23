"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 w-full z-40 bg-slate-950/90 backdrop-blur-md border-t border-[#d4af37]/30 py-4 px-6 md:hidden flex justify-between items-center"
          aria-label="Download Project Brochure"
        >
          <div className="flex flex-col">
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">Kolte Patil The Reserve</span>
            <span className="text-white text-sm">Luxury 2 & 3 BHK</span>
          </div>
          <Link href="/contact" className="px-6 py-3 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Book Visit
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
