/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
            <div className="absolute inset-0 z-10">
               <Image 
                 src="https://www.koltepatil.com/assets/uploads/projects/map_image/17847905231331533846.jpg" 
                 alt="The Reserve Location Map Sinhgad Road"
                 fill
                 className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-[#05140D]/20 group-hover:bg-transparent transition-colors duration-700"></div>
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
