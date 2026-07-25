'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-4xl text-center mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-bold"
          >
            The Blueprint
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-white"
          >
            Master Layout
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            An expansive 21.03-acre canvas meticulously engineered for luxury. Where the river sets the pace, the architecture gives you room to breathe, and nature dictates the flow.
          </motion.p>
        </div>

        {/* 3D Masterplan Engine */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.6 }}
          className="relative w-full h-[50vh] md:h-[70vh] bg-[#05140D] rounded-[3rem] border border-white/10 overflow-hidden mb-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <ArchitecturalModel3D />
          <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center pointer-events-none">
             <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse mr-3"></div>
             <span className="text-[10px] uppercase tracking-widest text-white/70">Interactive Digital Twin</span>
          </div>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
           <motion.div 
             initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
           >
             <h2 className="text-3xl md:text-4xl font-light mb-8 text-white leading-tight">Zones Engineered for <br/><span className="text-[#e5c158] italic">Absolute Perfection.</span></h2>
             
             <div className="space-y-8">
                {[
                  {
                    title: "The Riverfront Promenade",
                    desc: "A massive dedicated green buffer facing the river, offering a tranquil walkway completely isolated from vehicular movement."
                  },
                  {
                    title: "The Central Boulevard",
                    desc: "A sprawling landscaped artery that acts as the spine of the project, connecting all residential towers with pedestrian-friendly, tree-lined pathways."
                  },
                  {
                    title: "The Elevated Club Enclave",
                    desc: "The 50,000 sq.ft. clubhouse is centrally positioned, ensuring equal access for all residents while maintaining architectural prominence."
                  },
                  {
                    title: "The Tower Sanctuaries",
                    desc: "Each residential tower is strategically spaced to maximize cross-ventilation, minimize overlooking, and ensure every apartment gets unobstructed natural light."
                  }
                ].map((zone, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-[#d4af37] font-sans font-bold text-lg mt-1">0{i+1}</div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">{zone.title}</h3>
                      <p className="text-white/60 font-light text-sm leading-relaxed">{zone.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
             className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5"
           >
             <Image src="https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg" alt="Masterplan Aerial" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 ease-out" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-transparent to-transparent" />
             <div className="absolute bottom-10 left-10 right-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
               <p className="text-[#d4af37] text-xs uppercase tracking-[0.2em] mb-2 font-bold">Vastu Compliant</p>
               <p className="text-white font-light text-sm">The entire master layout is engineered strictly in accordance with classical Vastu principles, ensuring positive energy flow.</p>
             </div>
           </motion.div>
        </div>

      </div>
    </main>
  );
}
