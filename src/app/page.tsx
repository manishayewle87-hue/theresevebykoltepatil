/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import FluidBackground from "@/components/ui/FluidBackground";
import LuxuryTicker from "@/components/home/LuxuryTicker";
import { useRef } from "react";

export default function Home() {
  const { setCursorType } = useCursor();
  
  // Apple-style scaling hero scroll logic
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const textScale = useTransform(heroScroll, [0, 1], [1, 25]);
  const textOpacity = useTransform(heroScroll, [0, 0.4], [1, 0]);
  const videoScale = useTransform(heroScroll, [0, 1], [1.1, 1]);
  const overlayOpacity = useTransform(heroScroll, [0, 0.8], [0.6, 0.05]);

  // Storytelling scroll logic
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ["start center", "end center"]
  });
  const p1Opacity = useTransform(storyScroll, [0, 0.2, 0.4], [0, 1, 0]);
  const p2Opacity = useTransform(storyScroll, [0.3, 0.5, 0.7], [0, 1, 0]);
  const p3Opacity = useTransform(storyScroll, [0.6, 0.8, 1], [0, 1, 1]);

  // Bento Box Parallax (Advanced Flow Design)
  const bentoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: bentoScroll } = useScroll({
    target: bentoRef,
    offset: ["start end", "end start"]
  });
  const imgY1 = useTransform(bentoScroll, [0, 1], ["-10%", "10%"]);
  const imgY2 = useTransform(bentoScroll, [0, 1], ["10%", "-10%"]);
  const imgY3 = useTransform(bentoScroll, [0, 1], ["-15%", "15%"]);

  return (
    <div className="relative bg-white text-[#0B2B1B] selection:bg-[#d4af37] selection:text-white overflow-hidden">

      {/* Inject Fluid Background behind everything */}
      <FluidBackground />

      {/* 
        ========================================================================
        1. THE SCALING HERO (APPLE-STYLE)
        ========================================================================
      */}
      <div ref={heroRef} className="h-[200vh] relative w-full z-10">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-white rounded-b-[4rem] shadow-2xl">
          <motion.div className="absolute inset-0 z-0" style={{ scale: videoScale }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
              className="w-full h-full object-cover"
            >
              <source src="https://player.vimeo.com/external/394627252.hd.mp4?s=d00e57262ba627d3568853c89657f8cfec47fb21&profile_id=174" type="video/mp4" />
            </video>
            <motion.div className="absolute inset-0 bg-white" style={{ opacity: overlayOpacity }}></motion.div>
          </motion.div>

          <motion.h1 
            style={{ scale: textScale, opacity: textOpacity }}
            className="font-serif text-[10vw] font-bold tracking-tighter text-[#0B2B1B] mix-blend-normal z-10 text-center uppercase"
          >
            The Reserve
          </motion.h1>
          
          <motion.div style={{ opacity: textOpacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] mb-4 text-[#0B2B1B] font-bold">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-[#0B2B1B]/30 overflow-hidden">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-[#0B2B1B]"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 
        ========================================================================
        2. STICKY SCROLL STORYTELLING WITH FLUID OVERLAPS
        ========================================================================
      */}
      <section ref={storyRef} className="relative h-[300vh] bg-transparent z-20 -mt-16 sm:-mt-24 md:-mt-32">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 overflow-hidden rounded-[5rem] bg-white/70 backdrop-blur-3xl shadow-xl">
          <div className="absolute inset-0 z-0 opacity-[0.03]">
            <Image 
              src="https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg" 
              alt="Texture" 
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover grayscale" 
            />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.2]">
            <motion.p style={{ opacity: p1Opacity }} className="absolute inset-0 flex items-center justify-center">
              Luxury is not just a standard.
            </motion.p>
            <motion.p style={{ opacity: p2Opacity }} className="absolute inset-0 flex items-center justify-center">
              It is a state of mind, crafted in <span className="text-[#d4af37] italic mx-2">every detail</span>.
            </motion.p>
            <motion.div style={{ opacity: p3Opacity }} className="absolute inset-0 flex flex-col items-center justify-center mt-12">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-6">Welcome To</span>
              <p>Sinhagad Road's Most Premium Address.</p>
              
              <div className="mt-16 flex flex-col sm:flex-row gap-6">
                <MagneticButton>
                  <Link href="/contact" className="px-8 py-4 bg-[#0B2B1B] text-white font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full shadow-2xl hover:bg-[#d4af37] hover:text-[#0B2B1B] transition-colors block">
                    Book a Site Visit
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/overview" className="px-8 py-4 bg-white text-[#0B2B1B] border border-[#0B2B1B]/10 font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow block">
                    Download Brochure
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTINUOUS MARQUEE FLOW */}
      <div className="-mt-8 md:-mt-12 relative z-30 transform -rotate-1 scale-110 shadow-2xl overflow-hidden">
        <LuxuryTicker />
      </div>

      {/* 
        ========================================================================
        3. THE FLUID BENTO BOX AMENITIES GRID (ADVANCED PARALLAX)
        ========================================================================
      */}
      <section ref={bentoRef} className="relative z-40 bg-white/80 backdrop-blur-2xl py-32 md:py-48 rounded-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border border-white/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20 md:mb-32 max-w-2xl">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">The Privileges</span>
            <h2 className="font-serif text-5xl md:text-7xl text-[#0B2B1B] leading-tight">
              An ecosystem of <br/><span className="italic">unrivaled luxury.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[350px]">
            {/* Bento Block 1 - Large spanning 2 cols */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden group shadow-xl bg-white"
              onMouseEnter={() => setCursorType('explore')} onMouseLeave={() => setCursorType('default')}
            >
              <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y: imgY1 as any }}>
                <Image src="https://www.koltepatil.com/assets/uploads/gallery/17847869771007144168.jpg" alt="The Club" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/90 via-[#0B2B1B]/10 to-transparent mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 p-10 md:p-12 z-10">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 block mb-2 font-bold">Centerpiece</span>
                <h3 className="font-serif text-4xl md:text-6xl text-white mb-4">50,000 sq.ft. Club</h3>
                <p className="font-sans text-white/80 max-w-md font-light leading-relaxed">An exclusive resident club featuring spa pavilions, infinity pools, and holistic wellness zones.</p>
              </div>
            </motion.div>

            {/* Bento Block 2 - Tall spanning 2 rows */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1 md:row-span-2 relative rounded-[3rem] overflow-hidden group shadow-xl bg-gradient-to-b from-white to-[#F5F5F5] flex flex-col p-8 justify-between border border-white/50"
            >
              <div className="relative z-10">
                <span className="font-serif text-7xl text-[#d4af37] block mb-2 drop-shadow-sm">50</span>
                <h3 className="font-serif text-3xl text-[#0B2B1B] mb-4">Acres of Greenery</h3>
                <p className="font-sans text-[#0B2B1B]/70 font-light leading-relaxed">Sprawling curated greenery, bio-diverse parks, and serene walking trails right at your doorstep.</p>
              </div>
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mt-8 shadow-inner">
                <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y: imgY2 as any }}>
                  <Image src="https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg" alt="Greenery" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Bento Block 3 - Standard */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1 md:row-span-1 relative rounded-[3rem] overflow-hidden group shadow-xl bg-white p-8 flex flex-col justify-end"
            >
              <div className="absolute inset-0 w-full h-[120%] z-0">
                <motion.div className="w-full h-full" style={{ y: imgY3 as any }}>
                  <Image src="https://www.koltepatil.com/assets/uploads/gallery/17847870511644671891.jpg" alt="Smart Home" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-3xl text-[#0B2B1B] mb-2">Automated Homes</h3>
                <p className="font-sans text-[#0B2B1B]/70 text-sm font-light">State-of-the-art smart integration.</p>
              </div>
            </motion.div>

            {/* Bento Block 4 - Standard Wide */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2 md:row-span-1 relative rounded-[3rem] overflow-hidden group shadow-xl bg-[#0B2B1B] p-10 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="relative z-10 w-full md:w-1/2 pr-4">
                <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">Global Standards</h3>
                <p className="font-sans text-white/70 text-sm font-light leading-relaxed">Crafted with imported Italian marble, European fixtures, and bespoke minimalist finishing.</p>
              </div>
              <div className="relative h-full w-full md:w-1/2 min-h-[200px] rounded-[2rem] overflow-hidden">
                <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y: imgY1 as any }}>
                  <Image src="https://www.koltepatil.com/assets/uploads/gallery/17847868911484090893.jpg" alt="Interior" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
