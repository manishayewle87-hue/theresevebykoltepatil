'use client';

import { motion } from 'framer-motion';

const locations = [
  { category: "Education", name: "Orchids The International School", distance: "~4 KM", desc: "Quality education for kids, just a stone's throw away" },
  { category: "Connectivity", name: "Proposed Pune Ring Road", distance: "Upcoming", desc: "Seamless connectivity to the rest of the city" },
  { category: "Connectivity", name: "Future Metro Station", distance: "Planned", desc: "Easy access to Pune's expanding transit network" },
  { category: "Healthcare", name: "Multi-specialty Hospitals", distance: "Nearby", desc: "Premium healthcare infrastructure within minutes" },
];

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative pt-32 pb-24 selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      
      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-medium"
          >
            The Connectivity
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-6"
          >
            Project Location
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light"
          >
            Positioned at the epicenter of Sinhgad Road's growth corridor. A mature ecosystem that keeps you connected without compromising the calm of the riverside.
          </motion.p>
        </div>

        {/* Map Placeholder & Points of Interest */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:w-2/3 aspect-video bg-[#05140D] rounded-3xl border border-white/10 relative overflow-hidden group w-full"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-[#d4af37]/30 flex items-center justify-center mx-auto mb-6 bg-[#d4af37]/10 text-[#d4af37]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Interactive Map</h3>
                  <p className="text-white/50 text-sm tracking-widest uppercase">Location Data Pending</p>
               </div>
            </div>
          </motion.div>

          <div className="lg:w-1/3 w-full space-y-6">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-2xl font-light text-[#e5c158] mb-6"
            >
              Key Distances
            </motion.h3>
            
            {locations.map((loc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/30 transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg text-white font-medium group-hover:text-[#e5c158] transition-colors">{loc.name}</h4>
                  <span className="text-sm text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full whitespace-nowrap">{loc.distance}</span>
                </div>
                <p className="text-white/50 text-sm font-light">{loc.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </main>
  );
}
