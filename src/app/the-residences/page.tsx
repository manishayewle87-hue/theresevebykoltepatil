"use client";

import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function TheResidences() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const floorplans = [
    { type: "2 BHK Luxury", size: "750 sq.ft.", price: "Upon Request" },
    { type: "3 BHK Premium", size: "1,050 sq.ft.", price: "Upon Request" },
    { type: "3 BHK Signature", size: "1,250 sq.ft.", price: "Upon Request" }
  ];

  return (
    <div className="relative bg-slate-950 text-slate-100 selection:bg-[#d4af37] selection:text-white">
      <Navbar />

      {/* Cinematic Hero */}
      <div className="h-[80vh] w-full relative overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl border-b border-[#d4af37]/20">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image priority 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
            alt="The Residences Hero"
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
            Bespoke Living
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-[8rem] leading-none mb-12 text-slate-100 uppercase tracking-tight"
          >
            Residences.
          </motion.h1>
        </div>
      </div>

      <main className="relative z-10 bg-slate-950 text-slate-100 min-h-screen py-32">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Master-crafted spaces <br/>
                <span className="italic text-[#d4af37]">for the discerning few.</span>
              </h2>
              <p className="font-sans text-slate-400 font-light leading-relaxed mb-6">
                Every residence at The Reserve is a testament to meticulous planning and flawless execution. Expansive living areas seamlessly transition into private terraces, offering panoramic views of the Pune skyline.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative h-[60vh] rounded-[3rem] overflow-hidden border border-[#d4af37]/20 shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
                alt="Interior Render"
                fill
                className="object-cover opacity-80"
              />
            </motion.div>
          </div>

          {/* Floorplan Viewer Aesthetic */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="bg-slate-900/50 rounded-[3rem] border border-[#d4af37]/20 p-8 md:p-16 mb-40"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#d4af37]/20 pb-8">
              <div>
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">Availability</span>
                <h2 className="font-serif text-4xl text-slate-100">Floorplans</h2>
              </div>
              <button className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37] border border-[#d4af37] px-6 py-3 hover:bg-[#d4af37] hover:text-slate-950 transition-colors mt-8 md:mt-0">
                Download Brochure
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {floorplans.map((plan, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-center py-6 px-8 bg-slate-950 rounded-2xl border border-slate-800 hover:border-[#d4af37]/50 transition-colors group cursor-pointer">
                  <div className="flex flex-col w-full md:w-auto mb-4 md:mb-0">
                    <span className="font-serif text-2xl text-slate-100 group-hover:text-[#d4af37] transition-colors">{plan.type}</span>
                    <span className="font-sans text-xs text-slate-500">{plan.size}</span>
                  </div>
                  <div className="w-full md:w-auto flex justify-between items-center gap-12 border-t md:border-t-0 border-slate-800 pt-4 md:pt-0">
                    <span className="font-sans text-xs uppercase tracking-widest text-[#d4af37]">{plan.price}</span>
                    <span className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] group-hover:text-slate-950 transition-colors">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
