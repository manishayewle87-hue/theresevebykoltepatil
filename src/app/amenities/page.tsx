'use client';

import { motion } from 'framer-motion';

const amenitiesList = [
  { title: 'Pickleball Court', desc: 'State-of-the-art courts for active recreation.', colSpan: 'col-span-1 md:col-span-2' },
  { title: 'Riverside Walkway', desc: 'Tranquil paths tracing the water\'s edge.', colSpan: 'col-span-1 md:col-span-1' },
  { title: 'Central Landscaped Boulevard', desc: 'A lush green artery connecting the community.', colSpan: 'col-span-1 md:col-span-3' },
  { title: 'Family Gathering Zones', desc: 'Intimate spaces designed for connection.', colSpan: 'col-span-1 md:col-span-1' },
  { title: 'Wellness & Leisure', desc: 'Holistic spaces for mind and body rejuvenation.', colSpan: 'col-span-1 md:col-span-2' },
  { title: 'Landscaped Plazas', desc: 'Architecturally stunning outdoor squares.', colSpan: 'col-span-1 md:col-span-2' },
  { title: "Children's Play Areas", desc: 'Safe, creative zones for the youngest residents.', colSpan: 'col-span-1 md:col-span-1' },
];

export default function AmenitiesPage() {
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
            The Lifestyle
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-6"
          >
            Project Amenities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light"
          >
            A curated collection of experiences designed to elevate everyday living. 21.03 acres of landscape preserved just for you.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {amenitiesList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`${item.colSpan} aspect-[4/3] md:aspect-auto md:min-h-[300px] bg-[#05140D] rounded-3xl border border-white/10 p-8 relative overflow-hidden group hover:border-[#d4af37]/30 transition-colors duration-500`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,rgba(10,25,15,0)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <h3 className="text-2xl font-light text-white mb-2 group-hover:text-[#e5c158] transition-colors duration-500">{item.title}</h3>
                <p className="text-white/50 text-sm font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{item.desc}</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-50 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30 group-hover:text-[#d4af37] transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
