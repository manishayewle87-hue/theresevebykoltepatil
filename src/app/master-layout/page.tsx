'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ArchitecturalModel3D = dynamic(() => import('@/components/ui/ArchitecturalModel3D'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#05140D]">
      <div className="text-[#d4af37] text-sm tracking-widest uppercase animate-pulse">Loading Digital Twin...</div>
    </div>
  )
});

export default function MasterLayoutPage() {
  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative pt-32 pb-24 selection:bg-[#d4af37] selection:text-[#0B2B1B] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-900/10 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-6 relative z-20">
        
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-medium"
          >
            The Blueprint
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-6"
          >
            Master Layout
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light"
          >
            21.03 acres of intelligently curated spaces. Where the river sets the pace, and the architecture gives you room to breathe.
          </motion.p>
        </div>

        {/* 3D Masterplan Engine */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="relative w-full h-[60vh] md:h-[75vh] bg-[#05140D] rounded-3xl border border-white/10 overflow-hidden mb-12 shadow-2xl"
        >
          <ArchitecturalModel3D />
        </motion.div>

        {/* Zones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "The Riverfront",
              desc: "Dedicated green zones facing the river, offering a tranquil buffer from the city."
            },
            {
              title: "The Boulevard",
              desc: "A central landscaped artery that connects all towers with pedestrian-friendly pathways."
            },
            {
              title: "The Sanctuaries",
              desc: "Well-spaced residential towers engineered for maximum cross-ventilation and privacy."
            }
          ].map((zone, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + (i * 0.1) }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-[#d4af37] font-mono text-sm mb-4">0{i+1}</div>
              <h3 className="text-xl font-light text-white mb-3">{zone.title}</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">{zone.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
