"use client";

import Image from "next/image";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import FluidBackground from "@/components/ui/FluidBackground";
import LuxuryTicker from "@/components/home/LuxuryTicker";

export default function Home() {
  const { setCursorType } = useCursor();
  
  return (
    <div className="relative bg-white text-[#0B2B1B] selection:bg-[#d4af37] selection:text-white overflow-hidden">
      <FluidBackground />

      {/* 1. STANDARD STREAMLINED HERO (100dvh) */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl z-20 bg-[#0B2B1B]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://player.vimeo.com/external/394627252.hd.mp4?s=d00e57262ba627d3568853c89657f8cfec47fb21&profile_id=174" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl mb-4 tracking-tight">
              The Reserve
            </h1>
            <p className="font-sans text-xs md:text-sm text-white/90 tracking-[0.4em] uppercase max-w-xl mx-auto mb-12 drop-shadow-md">
              Sinhagad Road's Most Premium Address
            </p>
            <MagneticButton>
              <Link href="/contact" className="px-10 py-5 bg-[#d4af37] text-[#0B2B1B] font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full shadow-2xl hover:bg-white transition-colors block">
                Enquire Now
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] mb-4 text-white/70">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-white"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* 2. NON-PINNED STORYTELLING */}
      <section className="relative z-20 py-24 md:py-40 bg-white/95 backdrop-blur-3xl -mt-10 rounded-t-[3rem] md:rounded-t-[5rem] border-t border-white/20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#0B2B1B] leading-[1.1] mb-10"
          >
            Luxury is not just a standard.<br/>
            It is a state of mind, crafted in <span className="text-[#d4af37] italic">every detail</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0B2B1B]/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Experience ultra luxury apartments in Pune where river, hills, sky, and nature converge seamlessly, minutes from the everyday conveniences of Sinhagad Road.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
            <Link href="/overview" className="border-b border-[#0B2B1B] text-[#0B2B1B] uppercase tracking-[0.2em] text-xs font-bold pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
              Discover The Vision
            </Link>
            <Link href="/amenities" className="border-b border-[#0B2B1B]/30 text-[#0B2B1B]/60 uppercase tracking-[0.2em] text-xs font-bold pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
              View Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* CONTINUOUS MARQUEE FLOW */}
      <div className="relative z-30 transform -rotate-1 scale-110 shadow-xl overflow-hidden py-8 bg-[#0B2B1B] border-y border-[#d4af37]/20">
        <LuxuryTicker />
      </div>

      {/* 3. SIMPLIFIED BENTO BOX GRID (NO PARALLAX) */}
      <section className="relative z-40 bg-[#FAFAFA] py-32 md:py-48 rounded-[3rem] -mt-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 max-w-2xl">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">The Privileges</span>
            <h2 className="font-serif text-5xl md:text-7xl text-[#0B2B1B] leading-tight">
              An ecosystem of <br/><span className="italic">unrivaled luxury.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
            {/* Bento Block 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-lg bg-white"
              onMouseEnter={() => setCursorType('explore')} onMouseLeave={() => setCursorType('default')}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image src="https://www.koltepatil.com/assets/uploads/gallery/17847869771007144168.jpg" alt="The Club" fill sizes="(max-width: 1200px) 100vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/90 via-[#0B2B1B]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10 w-full">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 block mb-2 font-bold">Centerpiece</span>
                <h3 className="font-serif text-3xl md:text-5xl text-white mb-3">50,000 sq.ft. Club</h3>
                <p className="font-sans text-white/80 max-w-sm font-light leading-relaxed hidden md:block">An exclusive resident club featuring spa pavilions, infinity pools, and holistic wellness zones.</p>
              </div>
            </motion.div>

            {/* Bento Block 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-1 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-lg bg-gradient-to-br from-white to-[#F5F5F5] flex flex-col p-8 justify-between border border-[#0B2B1B]/5"
            >
              <div className="relative z-10">
                <span className="font-serif text-6xl text-[#d4af37] block mb-2 drop-shadow-sm">50</span>
                <h3 className="font-serif text-2xl text-[#0B2B1B] mb-3">Acres of Greenery</h3>
                <p className="font-sans text-[#0B2B1B]/70 font-light leading-relaxed text-sm">Sprawling curated greenery, bio-diverse parks, and serene walking trails right at your doorstep.</p>
              </div>
              <div className="relative h-48 md:h-64 w-full rounded-2xl overflow-hidden mt-6 shadow-inner">
                <Image src="https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg" alt="Greenery" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
              </div>
            </motion.div>

            {/* Bento Block 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-lg bg-[#0B2B1B] p-8 flex flex-col justify-end"
            >
              <div className="absolute inset-0 w-full h-full z-0">
                  <Image src="https://www.koltepatil.com/assets/uploads/gallery/17847870511644671891.jpg" alt="Smart Home" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000 mix-blend-luminosity" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] to-transparent"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl text-white mb-2">Automated Homes</h3>
                <p className="font-sans text-white/70 text-sm font-light">State-of-the-art smart integration.</p>
              </div>
            </motion.div>

            {/* Bento Block 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-2 md:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-lg bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-[#0B2B1B]/5"
            >
              <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-4">
                <h3 className="font-serif text-3xl text-[#0B2B1B] mb-3">Global Standards</h3>
                <p className="font-sans text-[#0B2B1B]/70 text-sm font-light leading-relaxed">Crafted with imported Italian marble, European fixtures, and bespoke minimalist finishing.</p>
              </div>
              <div className="relative h-40 md:h-full w-full md:w-1/2 rounded-[1.5rem] overflow-hidden shadow-inner">
                <Image src="https://www.koltepatil.com/assets/uploads/gallery/17847868911484090893.jpg" alt="Interior" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
