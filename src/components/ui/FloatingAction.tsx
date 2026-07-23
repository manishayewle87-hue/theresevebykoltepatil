'use client';

import { useConcierge } from '@/context/ConciergeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import MagneticButton from './MagneticButton';

export default function FloatingAction() {
  const { setIsConciergeOpen } = useConcierge();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed bottom-8 right-8 z-[90]"
        >
          <MagneticButton onClick={() => setIsConciergeOpen(true)}>
            <div className="flex items-center gap-3 bg-[#d4af37] text-slate-900 px-6 py-4 rounded-full shadow-2xl shadow-black/50 hover:bg-white transition-colors duration-500">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold">Enquire Now</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
