"use client";

import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Location() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const locations = [
    { name: "Hinjewadi IT Park", time: "15 Mins", type: "Business" },
    { name: "Phoenix Marketcity", time: "20 Mins", type: "Retail" },
    { name: "Pune International Airport", time: "45 Mins", type: "Transit" },
    { name: "Symbiosis International", time: "10 Mins", type: "Education" }
  ];

  return (
    <div className="relative bg-slate-950 text-slate-100 selection:bg-[#d4af37] selection:text-white">
      <Navbar />

      {/* Cinematic Hero */}
      <div className="h-[80vh] w-full relative overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl border-b border-[#d4af37]/20">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 bg-slate-900">
          <Image priority 
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop"
            alt="Pune Skyline"
            fill
            className="object-cover opacity-20 mix-blend-luminosity grayscale"
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
            Flats on Sinhagad Road
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-6xl md:text-[8rem] leading-none mb-12 text-slate-100 uppercase tracking-tight"
          >
            Locality.
          </motion.h1>
        </div>
      </div>

      <main className="relative z-10 bg-slate-950 text-slate-100 min-h-screen py-32">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="md:col-span-4"
            >
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Unprecedented <br/>
                <span className="italic text-[#d4af37]">Connectivity.</span>
              </h2>
              <p className="font-sans text-sm text-slate-400 font-light leading-relaxed mb-12">
                Situated at the nexus of the future Sinhagad Road Development, Kolte Patil The Reserve offers seamless access to the upcoming Pune Ring Road, the new Sinhagad Road Flyover, and global IT corridors. Whether you are looking for flats near Katraj, apartments near Swargate, or premium homes near Kothrud, our strategic location provides unparalleled convenience.
              </p>

              <div className="flex flex-col gap-6">
                {locations.map((loc, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[#d4af37]/20 pb-4 group">
                    <div className="flex flex-col">
                      <span className="font-sans text-[10px] uppercase tracking-widest text-[#d4af37] mb-1">{loc.type}</span>
                      <span className="font-serif text-xl text-slate-100 group-hover:text-[#d4af37] transition-colors">{loc.name}</span>
                    </div>
                    <span className="font-sans text-xs uppercase tracking-widest text-slate-500">{loc.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="md:col-span-8 relative h-[70vh] rounded-[3rem] overflow-hidden border border-[#d4af37]/20 shadow-2xl bg-slate-900 flex items-center justify-center"
            >
              {/* Abstract Map Graphic */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              <div className="relative z-10 w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,1)]">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-sans text-[10px] uppercase tracking-widest text-white whitespace-nowrap">The Reserve</span>
                
                {/* Ping Animation */}
                <span className="absolute inset-0 rounded-full border border-[#d4af37] animate-ping"></span>
              </div>
              
            </motion.div>

          </div>
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
