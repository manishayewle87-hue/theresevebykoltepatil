'use client';

import { motion } from 'framer-motion';

export default function MasterLayoutPage() {
  return (
    <main className="min-h-screen bg-forest-900 text-white relative pt-32 pb-24 selection:bg-gold-500 selection:text-forest-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-900/10 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-6 relative z-20">
        
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold-500 tracking-[0.2em] text-sm uppercase mb-4 font-medium"
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

        {/* Masterplan Placeholder (Since no specific image provided, building a luxury UI representation) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="relative aspect-video bg-forest-950 rounded-3xl border border-white/10 overflow-hidden group mb-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,rgba(10,25,15,1)_100%)] z-0" />
          
          <div className="absolute inset-0 z-10 flex items-center justify-center">
             <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center mx-auto mb-6 bg-gold-500/10 text-gold-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-white mb-2">Interactive Site Plan</h3>
                <p className="text-white/50 text-sm tracking-widest uppercase">Asset Rendering Pending</p>
             </div>
          </div>
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
              <div className="text-gold-500 font-mono text-sm mb-4">0{i+1}</div>
              <h3 className="text-xl font-light text-white mb-3">{zone.title}</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">{zone.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
