'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SplitText from '@/components/ui/SplitText';

const specs = [
  { category: "Living & Dining", details: ["Imported Italian Marble flooring", "Gypsum-finished walls with premium plastic emulsion paint", "Floor-to-ceiling powder-coated aluminum sliding windows", "Designer veneer-finish main door with biometric digital lock"] },
  { category: "Kitchen", details: ["Premium Granite/Engineered Quartz kitchen platform", "Stainless steel sink with drain board", "Designer dado tiles up to 2 ft above platform", "Provision for water purifier, exhaust fan, and dishwasher"] },
  { category: "Bedrooms", details: ["Premium engineered wooden flooring in Master Bedroom", "High-grade vitrified tiles in secondary bedrooms", "Provision for split AC in all bedrooms", "Laminated flush doors with premium mortise locks"] },
  { category: "Bathrooms", details: ["Imported CP & Sanitary fittings (Grohe/Kohler or equivalent)", "Anti-skid ceramic tile flooring", "Designer dado tiles up to lintel level", "Glass partition in Master Bathroom", "Concealed plumbing with premium UPVC pipes"] },
  { category: "Electrical & Tech", details: ["Concealed fire-resistant copper wiring", "Premium modular switches (Legrand/Schneider or equivalent)", "Smart home automation readiness", "100% DG backup for common areas and essential flat points"] },
  { category: "Safety & Security", details: ["Advanced 3-tier security system with CCTV surveillance", "Video door phone integrated with lobby", "Firefighting system as per NBC norms", "Seismic-resistant RCC framed structure"] },
];

export default function SpecificationsPage() {
  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative isolate pt-32 pb-24 selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="https://www.koltepatil.com/assets/uploads/gallery/17847869771007144168.jpg" alt="Luxury Specifications" fill sizes="100vw" className="object-cover mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B1B]/80 via-[#0B2B1B] to-[#0B2B1B]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 max-w-4xl text-center mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-bold"
          >
            The Details
          </motion.p>
          <SplitText text="Project Specifications" className="text-5xl md:text-7xl font-light tracking-tight mb-8" delay={0.2} />
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Uncompromising quality in every corner. Materials and finishes curated for a lifetime of luxury, sourced from the finest global brands.
          </motion.p>
        </div>

        {/* Specs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-6xl mx-auto">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
              className="bg-[#05140D]/40 backdrop-blur-md p-10 rounded-[2rem] border border-white/5 hover:border-[#d4af37]/30 transition-colors shadow-2xl"
            >
              <h3 className="text-3xl font-light text-[#e5c158] border-b border-white/10 pb-4 mb-6">{spec.category}</h3>
              <ul className="space-y-5">
                {spec.details.map((detail, j) => (
                  <li key={j} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2.5 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    <span className="text-white/80 font-light text-base leading-relaxed">{detail}</span>
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
