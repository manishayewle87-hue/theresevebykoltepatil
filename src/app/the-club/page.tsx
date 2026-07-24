"use client";

import RevealFooter from "@/components/layout/RevealFooter";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TheClub() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [activeSpecTab, setActiveSpecTab] = useState(0);

  const amenities = [
    { title: "Infinity Swimming Pool", desc: "Apartments with Swimming Pool Pune. Temperature-controlled waters overlooking the skyline.", img: "https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg" },
    { title: "Luxury Clubhouse", desc: "Apartments with Clubhouse Pune. Exclusive access to our 5-star resident clubhouse and lounges.", img: "https://www.koltepatil.com/assets/uploads/gallery/17847871871558473491.jpg" },
    { title: "Wellness Community", desc: "Apartments with Gym Pune and Zen Gardens. Curated landscapes designed for absolute tranquility.", img: "https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg" },
    { title: "Spa & Wellness", desc: "Holistic wellness center with professional therapists, setting a new benchmark for luxury living in Pune.", img: "https://www.koltepatil.com/assets/uploads/gallery/17847870511644671891.jpg" }
  ];

  const specs = [
    { category: "Flooring", details: "Imported Italian Marble in living spaces. Premium engineered wood in master bedrooms." },
    { category: "Kitchen", details: "Modular kitchen with built-in European appliances and quartz countertops." },
    { category: "Smart Home", details: "Voice & app-controlled lighting, climate, and automated curtain systems." },
    { category: "Security", details: "Biometric access, 24/7 CCTV surveillance, and dedicated concierge desk." }
  ];

  return (
    <div className="relative bg-slate-950 text-slate-100 selection:bg-[#d4af37] selection:text-white">
      <main className="relative z-10 bg-slate-950 mb-[100vh] min-h-screen pb-32 overflow-hidden">
        
        {/* Cinematic Parallax Hero */}
        <div className="h-[80vh] w-full relative overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl mb-32 border-b border-[#d4af37]/20">
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <Image priority 
              src="https://www.koltepatil.com/assets/uploads/gallery/17847869771007144168.jpg"
              alt="The Club Hero"
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
          </motion.div>

          <div className="relative z-10 container mx-auto px-6 mt-32">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8 block font-bold"
            >
              Luxury Amenities Pune
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-serif text-6xl md:text-[9rem] leading-none mb-12 text-slate-100 uppercase tracking-tight"
            >
              The Club.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-sans font-light text-slate-400 max-w-xl mx-auto text-lg"
            >
              A 50,000 sq.ft. private ecosystem designed exclusively for residents. An oasis of luxury in the heart of Pune.
            </motion.p>
          </div>
        </div>

        {/* Upgraded Horizontal Scroll (Dark Luxury) */}
        <section className="bg-slate-950">
          <HorizontalScroll title="The Privileges">
            {amenities.map((item, idx) => (
              <div 
                key={idx} 
                className="relative group h-[70vh] w-[90vw] md:w-[70vw] flex-shrink-0 overflow-hidden bg-slate-950 border-r border-[#d4af37]/10"
              >
                <div className="absolute inset-x-0 inset-y-12 right-12 z-0 rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 transition-all duration-[2s] group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 768px) 90vw, 70vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 w-3/4"></div>
                </div>
                
                <div className="absolute top-1/2 -translate-y-1/2 left-12 pr-12 z-20">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#d4af37] mb-4 block">0{idx + 1} // Privilege</span>
                  <h3 className="font-serif text-5xl md:text-7xl mb-6 text-slate-100 leading-none">{item.title}</h3>
                  <p className="font-sans text-xl text-slate-400 font-light max-w-md">{item.desc}</p>
                </div>
              </div>
            ))}

            <div id="specifications" className="relative h-[70vh] w-[90vw] md:w-[70vw] flex-shrink-0 bg-slate-900/50 p-8 md:p-20 flex flex-col justify-center overflow-y-auto no-scrollbar border-l border-[#d4af37]/20 rounded-l-[3rem]">
              <h2 className="font-serif text-5xl md:text-7xl mb-12 text-slate-100">Uncompromised<br/><span className="text-[#d4af37] italic">Quality.</span></h2>
              <div className="w-full flex flex-col border-t border-[#d4af37]/20">
                {specs.map((spec, idx) => (
                  <div 
                    key={idx} 
                    className="border-b border-[#d4af37]/20 py-8 cursor-pointer group"
                    onClick={() => setActiveSpecTab(idx === activeSpecTab ? -1 : idx)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className={`font-serif text-3xl transition-colors ${idx === activeSpecTab ? 'text-[#d4af37]' : 'text-slate-100 group-hover:text-[#d4af37]'}`}>
                        {spec.category}
                      </h3>
                      <span className="text-[#d4af37] text-2xl font-light">{idx === activeSpecTab ? '-' : '+'}</span>
                    </div>
                    <motion.div 
                      initial={false}
                      animate={{ height: idx === activeSpecTab ? 'auto' : 0, opacity: idx === activeSpecTab ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans font-light text-slate-400 pt-4 max-w-2xl text-lg">
                        {spec.details}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </HorizontalScroll>
        </section>

      </main>
      <RevealFooter />
    </div>
  );
}
