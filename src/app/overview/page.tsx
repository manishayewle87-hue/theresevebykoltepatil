'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "The Reserve by Kolte Patil",
  "image": "https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg",
  "description": "Ultra Luxury 3 BHK & 4 BHK Riverside Apartments in Sinhagad Road, Pune.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sinhagad Road",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "priceRange": "₹ 2.5 Cr - ₹ 4 Cr"
};

export default function OverviewPage() {
  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <Script
        id="overview-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* 1. NATURAL HERO SECTION */}
      <section className="relative h-[80dvh] w-full flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] bg-[#05140D] shadow-2xl z-20 pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg" alt="The Reserve Hero" fill sizes="100vw" className="object-cover opacity-40 mix-blend-luminosity" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B1B]/80 via-[#0B2B1B]/40 to-[#0B2B1B]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-[#d4af37] tracking-[0.3em] text-xs uppercase mb-6 font-bold"
          >
            Project Overview
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8 text-white drop-shadow-xl"
          >
            Some addresses are built.<br />
            <span className="italic text-[#d4af37]">This one was set aside.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            A 21-acre sanctuary of ultra-luxury riverside residences designed for those who demand the absolute best in life.
          </motion.p>
        </div>
      </section>

      {/* 2. THE SETTING (NATURAL SCROLL) */}
      <section className="relative z-20 py-24 md:py-40 bg-[#0B2B1B]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <span className="text-[#d4af37] tracking-[0.2em] text-xs uppercase mb-4 block font-bold">The Location</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white leading-tight">A Rare Riverside Setting in Pune.</h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                Spread across an expansive <strong className="text-white font-medium">21.03 acres</strong> at Wadgaon Budruk, The Reserve brings together premium river-facing greens, scenic NDA hill views, and a central landscaped boulevard that spans the entire project. 
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-10">
                Experience ultra-luxury apartments in Pune where river, hills, sky, and nature converge seamlessly. It is an island of tranquility, located just minutes from the everyday conveniences and rapid infrastructural growth of Sinhagad Road.
              </p>
              <MagneticButton>
                <Link href="/location" className="inline-block px-8 py-4 border border-[#d4af37] text-[#d4af37] font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full hover:bg-[#d4af37] hover:text-[#0B2B1B] transition-colors">
                  Explore Location
                </Link>
              </MagneticButton>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="aspect-square bg-[#05140D] rounded-3xl border border-white/5 p-8 flex flex-col justify-end relative overflow-hidden group shadow-2xl"
            >
                <Image src="https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg" alt="21 Acres Landscape" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-transparent to-transparent z-10" />
                
                <div className="relative z-20 w-full bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <h3 className="text-7xl font-light text-white/20 absolute -top-12 right-6">21</h3>
                  <p className="text-[#d4af37] uppercase tracking-widest text-xs mb-2 font-bold">Preserved Landscape</p>
                  <p className="text-xl text-white font-light">Acres of lush, riverside nature.</p>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE RESIDENCES (NATURAL SCROLL) */}
      <section className="relative z-20 py-24 md:py-40 bg-[#05140D] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="order-2 md:order-1 aspect-[4/5] bg-[#0B2B1B] rounded-3xl border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
            >
              <Image src="https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg" alt="The Residences" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-transparent to-[#0B2B1B]/80 z-10" />
              
              <div className="flex justify-between items-start w-full relative z-20">
                 <span className="text-[#e5c158] text-xl font-light">Phase 1</span>
                 <span className="text-[#0B2B1B] bg-[#d4af37] font-bold text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-lg">Now Open</span>
              </div>
              <div className="relative z-20 w-full bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-light text-white mb-2">2, 3 & 4 Bed</h3>
                <p className="text-white/70 font-light text-sm">Designed around complete openness and light.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <span className="text-[#d4af37] tracking-[0.2em] text-xs uppercase mb-4 block font-bold">The Architecture</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white leading-tight">Ultra Luxury 2 & 3 BHK Apartments.</h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-8">
                Introducing thoughtfully planned luxury residences designed around a core philosophy: absolute spaciousness. Premium real estate crafted exclusively for the elite, featuring zero space-wastage layouts and grand terraces.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  { title: "Cross Ventilation", desc: "Engineered wind channels ensuring fresh air in every room." },
                  { title: "Abundant Natural Light", desc: "Floor-to-ceiling windows maximizing sunlight." },
                  { title: "Enhanced Privacy", desc: "Well-spaced towers ensuring no direct overlooking." },
                  { title: "Scenic Views", desc: "Unobstructed vistas of the river and NDA hills." }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <div className="flex items-center text-white text-lg font-medium mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mr-4 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                      {item.title}
                    </div>
                    <p className="text-white/50 text-sm pl-5">{item.desc}</p>
                  </li>
                ))}
              </ul>
              <MagneticButton>
                <Link href="/floor-plans" className="inline-block px-8 py-4 bg-[#d4af37] text-[#0B2B1B] font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full hover:bg-white transition-colors">
                  View Floor Plans
                </Link>
              </MagneticButton>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
