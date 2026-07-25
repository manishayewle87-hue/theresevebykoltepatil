'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const locations = [
  { category: "Infrastructure", name: "Proposed Pune Ring Road", distance: "2 Mins", desc: "Providing seamless connectivity to Hinjewadi, PCMC, and highways." },
  { category: "Infrastructure", name: "Upcoming Metro Station", distance: "5 Mins", desc: "Walking distance to the massive public transit overhaul." },
  { category: "Healthcare", name: "Deenanath Mangeshkar Hospital", distance: "12 Mins", desc: "World-class multi-specialty healthcare infrastructure." },
  { category: "Education", name: "Abhinav Vidyalaya", distance: "8 Mins", desc: "Premium education and schooling for the future." },
  { category: "Leisure", name: "Pune-Okayama Friendship Garden", distance: "10 Mins", desc: "The iconic Japanese garden for weekend retreats." },
  { category: "Connectivity", name: "Mumbai-Bengaluru Highway", distance: "5 Mins", desc: "Direct exit avoiding internal city traffic." },
];

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative pt-32 pb-24 selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      
      <div className="container mx-auto px-6 relative z-20 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-bold"
          >
            The Connectivity
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
          >
            Project Location
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Positioned at the absolute epicenter of Sinhagad Road's growth corridor. A mature, high-value ecosystem that keeps you connected to Pune's IT hubs and commercial centers without compromising the calm of the riverside.
          </motion.p>
        </div>

        {/* Map & Distances Grid */}
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="xl:w-2/3 aspect-[4/3] md:aspect-video xl:aspect-square bg-[#05140D] rounded-[3rem] border border-white/10 relative overflow-hidden group w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
            <div className="absolute inset-0 z-10 p-6 md:p-8">
               <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                 <Image 
                   src="https://www.koltepatil.com/assets/uploads/projects/map_image/17847905231331533846.jpg" 
                   alt="The Reserve Location Map Sinhgad Road"
                   fill sizes="(max-width: 1200px) 100vw, 66vw" className="object-cover hover:scale-[1.03] transition-transform duration-1000 ease-out"
                 />
                 <div className="absolute inset-0 bg-[#0B2B1B]/20 group-hover:bg-transparent transition-colors duration-700 mix-blend-multiply"></div>
               </div>
            </div>
          </motion.div>

          <div className="xl:w-1/3 w-full flex flex-col gap-6">
            <motion.h3 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}
              className="text-3xl font-light text-[#e5c158] mb-4"
            >
              Key Distances
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
              {locations.map((loc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
                  className="p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/50 hover:bg-[#05140D] transition-colors group shadow-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl text-white font-medium group-hover:text-[#e5c158] transition-colors pr-4">{loc.name}</h4>
                    <span className="text-xs font-bold text-[#0B2B1B] bg-[#d4af37] px-3 py-1.5 rounded-full whitespace-nowrap tracking-widest uppercase shadow-md">{loc.distance}</span>
                  </div>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{loc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
