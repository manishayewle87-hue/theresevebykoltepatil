'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const plans = {
  '3BHK': {
    name: '3 Bed Residence',
    tower: 'Tower 05 — Type 02',
    carpet: 'Approx. 1,450 Sq.Ft.',
    highlights: ['L-Shaped Living/Dining', 'Master Suite with Walk-in Closet', 'Grand River-facing Deck', 'Maids Room with Separate Entry'],
    image: 'https://www.koltepatil.com/assets/uploads/project_floor_plan/17847883381772140324.png'
  },
  '2BHK': {
    name: '2 Bed Residence',
    tower: 'Tower 06 — Type 03',
    carpet: 'Approx. 950 Sq.Ft.',
    highlights: ['Spacious Rectangular Living Room', 'En-suite Master Bedroom', 'Utility Balcony', 'Optimized Zero-Wastage Layout'],
    image: 'https://www.koltepatil.com/assets/uploads/project_floor_plan/17847883381772140324.png' // Using same image as placeholder
  }
};

export default function FloorPlansPage() {
  const [activePlan, setActivePlan] = useState<'3BHK' | '2BHK'>('3BHK');

  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative pt-32 pb-24 selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      
      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-4xl text-center mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-bold"
          >
            The Residences
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
          >
            Floor Plans
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Thoughtfully planned spaces designed around complete openness. Every layout guarantees excellent cross ventilation, abundant natural light, and breathtaking vistas.
          </motion.p>
        </div>

        {/* Toggle & Viewer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16"
        >
          {/* Controls & Specs */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setActivePlan('3BHK')}
                className={`text-left p-6 md:p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden ${activePlan === '3BHK' ? 'bg-[#d4af37]/10 border-[#d4af37]/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
              >
                {activePlan === '3BHK' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4af37]"></div>}
                <h3 className={`text-3xl font-light mb-2 ${activePlan === '3BHK' ? 'text-[#e5c158]' : 'text-white'}`}>3 Bed Residence</h3>
                <p className="text-white/50 text-sm font-light">Tower 05 — Type 02</p>
              </button>
              
              <button 
                onClick={() => setActivePlan('2BHK')}
                className={`text-left p-6 md:p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden ${activePlan === '2BHK' ? 'bg-[#d4af37]/10 border-[#d4af37]/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
              >
                {activePlan === '2BHK' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4af37]"></div>}
                <h3 className={`text-3xl font-light mb-2 ${activePlan === '2BHK' ? 'text-[#e5c158]' : 'text-white'}`}>2 Bed Residence</h3>
                <p className="text-white/50 text-sm font-light">Tower 06 — Type 03</p>
              </button>
            </div>

            {/* Dynamic Specs Panel */}
            <div className="p-8 rounded-[2rem] bg-[#05140D] border border-white/5 mt-4 shadow-xl">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2">Carpet Area</p>
              <p className="text-3xl text-white font-light mb-8">{plans[activePlan].carpet}</p>
              
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-4">Key Highlights</p>
              <ul className="space-y-4">
                {plans[activePlan].highlights.map((h, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-[#d4af37] mt-2.5 mr-3 flex-shrink-0" />
                    <span className="text-white/70 font-light text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Viewer Placeholder */}
          <div className="lg:w-2/3">
            <div className="aspect-square md:aspect-[4/3] w-full bg-[#05140D] rounded-[3rem] border border-white/10 relative overflow-hidden flex items-center justify-center group shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,rgba(10,25,15,1)_100%)] z-0" />
              
              {/* Official Blueprint Rendering */}
              <div className="absolute inset-0 z-10 w-full h-full p-6 md:p-16">
                 <div className="relative w-full h-full border border-white/10 rounded-2xl bg-white/5 overflow-hidden backdrop-blur-md">
                   <Image 
                     src={plans[activePlan].image} 
                     alt={`${activePlan} Floor Plan`}
                     fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-4 hover:scale-[1.03] transition-transform duration-1000 ease-out"
                   />
                 </div>
              </div>

              <div className="absolute bottom-8 right-8 z-20 text-right pointer-events-none hidden md:block">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                >
                  <h3 className="text-4xl font-light text-white mb-3 shadow-sm">{activePlan} Layout</h3>
                  
                  <div className="flex gap-2 justify-end mt-4">
                    <span className="px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[10px] text-[#d4af37] uppercase tracking-widest backdrop-blur-md font-bold">Vastu Compliant</span>
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
