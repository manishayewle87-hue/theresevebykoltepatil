'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const amenitiesList = [
  { title: '50,000 Sq.Ft. Clubhouse', desc: 'The crown jewel of The Reserve. An architectural masterpiece featuring a fully equipped gymnasium, spa pavilions, indoor temperature-controlled pool, and exclusive resident lounges.', colSpan: 'col-span-1 md:col-span-2', image: 'https://www.koltepatil.com/assets/uploads/gallery/17847869771007144168.jpg' },
  { title: 'Riverside Walkway', desc: 'A deeply serene, beautifully landscaped walking trail that traces the natural contours of the river, entirely separated from vehicular traffic.', colSpan: 'col-span-1 md:col-span-1', image: 'https://www.koltepatil.com/assets/uploads/gallery/17847871871558473491.jpg' },
  { title: 'The Great Boulevard', desc: 'A massive central landscaped artery that connects the entire 21-acre community. Lined with exotic flora, seating pavilions, and interactive water features.', colSpan: 'col-span-1 md:col-span-3', image: 'https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg' },
  { title: 'International Sports Arena', desc: 'Championship-grade tennis courts, pickleball arenas, and a multi-purpose sports turf designed for high-end active recreation.', colSpan: 'col-span-1 md:col-span-1', image: 'https://www.koltepatil.com/assets/uploads/gallery/17847870511644671891.jpg' },
  { title: 'Holistic Wellness Zones', desc: 'Dedicated outdoor yoga decks, meditation pavilions, and reflexology paths enveloped in dense greenery for complete mind-body rejuvenation.', colSpan: 'col-span-1 md:col-span-2', image: 'https://www.koltepatil.com/assets/uploads/gallery/17847868911484090893.jpg' },
];

export default function AmenitiesPage() {
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
            The Lifestyle
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
          >
            Unrivaled Amenities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            A curated collection of over 40 distinct experiences designed to elevate everyday living. This is where 21.03 acres of landscape meets international hospitality standards.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {amenitiesList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              className={`${item.colSpan} aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-[#05140D] rounded-[2rem] border border-white/5 p-8 relative overflow-hidden group hover:border-[#d4af37]/30 shadow-2xl transition-all duration-700`}
            >
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-[#0B2B1B]/40 to-transparent z-[5]" />
              
              <div className="absolute bottom-10 left-10 right-10 z-10 w-3/4">
                <h3 className="text-3xl font-light text-white mb-3 group-hover:text-[#e5c158] transition-colors duration-500">{item.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">{item.desc}</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-50 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30 group-hover:text-[#d4af37] transition-all duration-500 backdrop-blur-md">
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
