'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function FloorPlansPage() {
  const [activePlan, setActivePlan] = useState<'3BHK' | '2BHK'>('3BHK');

  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative pt-32 pb-24 selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      
      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-medium"
          >
            The Residences
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-6"
          >
            Floor Plans
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light"
          >
            Thoughtfully planned spaces designed around complete openness, excellent cross ventilation, and abundant natural light.
          </motion.p>
        </div>

        {/* Toggle & Viewer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col lg:flex-row gap-12"
        >
          {/* Controls */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <button 
              onClick={() => setActivePlan('3BHK')}
              className={`text-left p-6 rounded-2xl border transition-all duration-500 ${activePlan === '3BHK' ? 'bg-[#d4af37]/10 border-[#d4af37]/50' : 'bg-white/[0.02] border-white/10 hover:border-white/30'}`}
            >
              <h3 className={`text-2xl font-light mb-2 ${activePlan === '3BHK' ? 'text-[#e5c158]' : 'text-white'}`}>3 Bed Residence</h3>
              <p className="text-white/50 text-sm">Tower 05 — Type 02</p>
            </button>
            
            <button 
              onClick={() => setActivePlan('2BHK')}
              className={`text-left p-6 rounded-2xl border transition-all duration-500 ${activePlan === '2BHK' ? 'bg-[#d4af37]/10 border-[#d4af37]/50' : 'bg-white/[0.02] border-white/10 hover:border-white/30'}`}
            >
              <h3 className={`text-2xl font-light mb-2 ${activePlan === '2BHK' ? 'text-[#e5c158]' : 'text-white'}`}>2 Bed Residence</h3>
              <p className="text-white/50 text-sm">Tower 06 — Type 03</p>
            </button>
          </div>

          {/* Viewer Placeholder */}
          <div className="lg:w-2/3">
            <div className="aspect-[4/3] w-full bg-[#05140D] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,rgba(10,25,15,1)_100%)] z-0" />
              
              {/* Official Blueprint Rendering */}
              <div className="absolute inset-0 z-10 w-full h-full p-8 md:p-16">
                 <div className="relative w-full h-full border-2 border-white/10 rounded-2xl bg-white/5 overflow-hidden backdrop-blur-sm">
                   <Image 
                     src={activePlan === '2BHK' 
                       ? "https://www.koltepatil.com/assets/uploads/project_floor_plan/17847883381772140324.png"
                       : "https://www.koltepatil.com/assets/uploads/project_floor_plan/17847883381772140324.png"} 
                     alt={`${activePlan} Floor Plan`}
                     fill
                     className="object-contain p-4 hover:scale-[1.02] transition-transform duration-700"
                   />
                 </div>
              </div>

              <div className="absolute bottom-8 right-8 z-20 text-right pointer-events-none hidden md:block">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-light text-white mb-2 shadow-sm">{activePlan} Layout</h3>
                  
                  <div className="flex gap-2 justify-end mt-4">
                    <span className="px-3 py-1 rounded border border-[#d4af37]/30 bg-[#d4af37]/10 text-[10px] text-[#d4af37] uppercase tracking-widest backdrop-blur-md">Cross Ventilation</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
