'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const specs = [
  { category: "Flooring", details: ["Imported Marble in Living & Dining", "Premium Vitrified Tiles in Bedrooms", "Anti-skid Ceramic Tiles in Terraces"] },
  { category: "Kitchen", details: ["Granite Platform with Stainless Steel Sink", "Provision for Water Purifier & Exhaust Fan", "Designer Dado Tiles"] },
  { category: "Doors & Windows", details: ["Premium Main Door with Digital Lock", "Powder Coated Aluminum Sliding Windows", "Mosquito Mesh for Windows"] },
  { category: "Electricals", details: ["Concealed Copper Wiring", "Premium Modular Switches", "Provision for Inverter", "AC Points in Living and Bedrooms"] },
];

export default function SpecificationsPage() {
  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative pt-32 pb-24 selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="https://www.koltepatil.com/assets/uploads/gallery/17847869771007144168.jpg" alt="Luxury Specifications" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B1B] via-transparent to-[#0B2B1B]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-medium"
          >
            The Details
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-6"
          >
            Project Specifications
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light"
          >
            Uncompromising quality in every corner. Materials and finishes curated for a lifetime of luxury.
          </motion.p>
        </div>

        {/* Specs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-light text-[#e5c158] border-b border-white/10 pb-4 mb-6">{spec.category}</h3>
              <ul className="space-y-4">
                {spec.details.map((detail, j) => (
                  <li key={j} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 mr-4 flex-shrink-0" />
                    <span className="text-white/80 font-light text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
