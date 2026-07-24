/* eslint-disable react/no-unescaped-entities */
"use client";

import RevealFooter from "@/components/layout/RevealFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function TheVision() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="relative bg-slate-950 text-slate-100 selection:bg-[#d4af37] selection:text-white">
      {/* Cinematic Parallax Hero */}
      <div className="h-screen w-full relative overflow-hidden flex flex-col justify-center shadow-2xl">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image priority 
            src="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
            alt="The Vision Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8 block font-bold"
          >
            The Origin
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl lg:text-[10rem] tracking-tight leading-[0.8] uppercase mb-8 italic bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-yellow-100"
          >
            A Legacy of <br/> Brilliance.
          </motion.h1>
        </div>
      </div>

      <main className="relative z-10 bg-slate-950 text-slate-100 mb-[100vh]">
        <div className="container mx-auto px-6 md:px-12 py-40">
          
          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="md:col-span-5 md:col-start-2"
            >
              <p className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-[#d4af37] mb-8">
                01 / The Philosophy
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-slate-100">
                Building not just for today, but for the <span className="italic text-[#d4af37]">next hundred years.</span>
              </h2>
              <p className="font-sans text-sm font-light text-slate-400 leading-relaxed mb-6">
                Kolte Patil's 30 years of architectural dominance culminated in this 50-acre masterpiece. Every stone, every angle, and every beam was debated and refined to meet the global standard of ultra-luxury.
              </p>
              <p className="font-sans text-sm font-light text-slate-400 leading-relaxed">
                We didn't set out to build another residential complex. We set out to build an icon—a landmark that will stand as a testament to Pune's rapid global ascent.
              </p>
            </motion.div>

            <div className="md:col-span-6 md:col-start-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative h-[90vh] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-[#d4af37]/20"
              >
                <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] -top-[10%]">
                  <Image 
                    src="https://www.koltepatil.com/assets/uploads/gallery/17847871871558473491.jpg"
                    alt="Architectural Details"
                    fill
                    className="object-cover mix-blend-luminosity opacity-80"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="font-serif text-3xl text-slate-100 mb-2">Immaculate Detail</p>
                  <p className="font-sans text-xs text-[#d4af37] tracking-widest uppercase">Global Procurement</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Global Standard Banner */}
        <section className="py-40 bg-slate-900/50 border-y border-[#d4af37]/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg')] opacity-5 mix-blend-overlay"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 container mx-auto px-6"
          >
            <h2 className="font-serif text-5xl md:text-7xl italic text-slate-100 mb-12">
              A New Global Standard.
            </h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
              <span className="font-serif text-2xl tracking-widest uppercase">IGBC Platinum</span>
              <span className="font-serif text-2xl tracking-widest uppercase">Bespoke Living</span>
              <span className="font-serif text-2xl tracking-widest uppercase">50 Acres</span>
            </div>
          </motion.div>
        </section>

      </main>

      <RevealFooter />
    </div>
  );
}
