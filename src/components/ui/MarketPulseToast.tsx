"use client";

import { usePulse } from "@/context/PulseContext";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, TrendingUp, Users } from "lucide-react";

export default function MarketPulseToast() {
  const { currentPulse } = usePulse();

  return (
    <div className="fixed bottom-24 left-6 md:bottom-8 md:left-8 z-[100] pointer-events-none">
      <AnimatePresence>
        {currentPulse && (
          <motion.div
            key={currentPulse.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0B2B1B]/90 backdrop-blur-md border border-[#d4af37]/30 rounded-xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-start gap-4 max-w-sm"
          >
            <div className="bg-[#d4af37]/20 p-2 rounded-lg text-[#d4af37] shrink-0">
              {currentPulse.type === "investor" && <Users size={18} />}
              {currentPulse.type === "scarcity" && <Bell size={18} />}
              {currentPulse.type === "booking" && <TrendingUp size={18} />}
            </div>
            <div>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#d4af37] font-bold block mb-1">
                Live Market Pulse
              </span>
              <p className="font-sans text-sm text-slate-200 leading-snug">
                {currentPulse.text}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
