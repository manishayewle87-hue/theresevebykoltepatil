"use client";

import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import { AnimatedReveal, AnimatedTextMask } from "@/components/ui/AnimatedReveal";
import Image from "next/image";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";
import { motion, useScroll, useTransform } from "framer-motion";
import LuxuryTicker from "@/components/home/LuxuryTicker";
import VisionaryQuote from "@/components/home/VisionaryQuote";
import HorizontalGallery from "@/components/home/HorizontalGallery";

export default function Home() {
  const { setCursorType } = useCursor();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="relative bg-slate-950 text-slate-100 selection:bg-[#d4af37] selection:text-white">
      {/* 
        ========================================================================
        1. THE PORTAL HERO
        ========================================================================
      */}
      <div className="h-screen w-full relative overflow-hidden flex flex-col rounded-b-[4rem] shadow-sm">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
            className="w-full h-full object-cover opacity-20 filter grayscale"
          >
            <source src="https://player.vimeo.com/external/394627252.hd.mp4?s=d00e57262ba627d3568853c89657f8cfec47fb21&profile_id=174" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        </motion.div>

        <div className="relative z-50">
          <Navbar />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center relative z-20 px-4 mt-20">
          <AnimatedReveal>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8 block font-bold">
              Pune's Most Exclusive Address
            </span>
          </AnimatedReveal>
          
          <div className="relative group">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] tracking-tight leading-[0.9] uppercase relative z-10 text-slate-100 drop-shadow-sm">
              <span className="sr-only">Luxury Apartments on Sinhagad Road</span>
              <AnimatedTextMask text="The Reserve" delay={0.4} />
            </h1>
          </div>

          <AnimatedReveal delay={0.6}>
            <span className="font-sans text-[8px] md:text-[10px] tracking-[0.5em] uppercase text-slate-400 mt-12 block">
              A Masterpiece of Architectural Brilliance by Kolte Patil
            </span>
          </AnimatedReveal>
        </div>

        {/* Floating Fluid Stats Bar */}
        <div className="absolute bottom-4 md:bottom-0 left-1/2 -translate-x-1/2 md:translate-y-1/2 z-30 w-[95%] md:w-[90%] max-w-5xl bg-slate-950/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(212,175,55,0.15)] border border-[#d4af37]/30 p-6 md:p-8 block">
          <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-slate-800">
            <div className="flex flex-col items-center justify-center text-center px-4 pt-2 md:pt-0">
              <span className="font-serif text-3xl md:text-4xl text-slate-100 mb-1 md:mb-2">21</span>
              <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400">Acres of Luxury</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl md:text-4xl text-[#d4af37] mb-1 md:mb-2">2 & 3</span>
              <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400">BHK Signature Residences</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl md:text-4xl text-slate-100 mb-1 md:mb-2">Pre-Launch</span>
              <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400">Exclusive Phase</span>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        1.5 THE CORE PHILOSOPHY
        ========================================================================
      */}
      <section className="relative z-10 bg-slate-950 py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full md:w-1/2 flex flex-col gap-8">
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold">The Philosophy</span>
              <h2 className="font-serif text-5xl md:text-7xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-yellow-100">
                Premium Homes <br/><span className="italic text-slate-400">Sinhgad Road.</span>
              </h2>
              <p className="font-sans text-lg text-slate-400 leading-relaxed max-w-lg">
                Kolte Patil The Reserve is not just a residence; it is a legacy. Designed with a forward-looking vision, these Luxury Flats in Pune combine timeless architectural brilliance with modern fluidic spaces to create an environment that nurtures generations.
              </p>
              <Link href="/the-vision" className="mt-4 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-100 hover:text-[#d4af37] transition-colors group w-max">
                Explore Our Vision 
                <span className="w-8 h-[2px] bg-slate-900 group-hover:bg-[#d4af37] transition-colors"></span>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="w-full md:w-1/2 relative h-[60vh] rounded-[4rem] overflow-hidden shadow-2xl group">
              <Image priority src="https://www.koltepatil.com/assets/uploads/gallery/17847871871558473491.jpg" alt="The Philosophy" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute bottom-8 -left-4 md:left-8 bg-slate-950/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-xl border border-[#d4af37]/30 max-w-sm group-hover:-translate-y-2 transition-transform duration-700">
                <span className="font-serif text-5xl text-[#d4af37] block mb-2">30+</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-slate-100 font-bold">Years of Excellence</span>
                <p className="text-sm text-slate-400 mt-2">Delivering architectural marvels across Pune, Mumbai, and Bengaluru.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <VisionaryQuote />

      {/* 
        ========================================================================
        1.6 SIGNATURE HIGHLIGHTS (FLUID GRID)
        ========================================================================
      */}
      <section className="relative z-10 bg-slate-900/50 py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">Unmatched Scale</span>
            <h2 className="font-serif text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-yellow-100">Signature Highlights</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Nature's Embrace", desc: "50 sprawling acres of curated greenery, bio-diverse parks, and serene walking trails right at your doorstep.", img: "https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg" },
              { title: "Automated Homes", desc: "State-of-the-art smart home integration. Control climate, lighting, and security with a single touch.", img: "https://www.koltepatil.com/assets/uploads/gallery/17847870511644671891.jpg" },
              { title: "Private Wellness", desc: "An exclusive 50,000 sq.ft. resident club featuring spa pavilions, infinity pools, and holistic wellness zones.", img: "https://www.koltepatil.com/assets/uploads/gallery/17847869771007144168.jpg" },
              { title: "Global Standards", desc: "Crafted with imported Italian marble, European fixtures, and bespoke minimalist finishing.", img: "https://www.koltepatil.com/assets/uploads/gallery/17847868911484090893.jpg" }
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative h-[400px] overflow-hidden rounded-[3rem] shadow-sm hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] hover:-translate-y-2 transition-all duration-700">
                <Image src={feature.img} alt={feature.title} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 md:p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">{feature.title}</h3>
                  <p className="font-sans text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-700">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        1.7 PRIME CONNECTIVITY
        ========================================================================
      */}
      <section className="relative z-10 bg-slate-950 py-32 px-4 md:px-12">
        <div className="bg-slate-900 rounded-[4rem] py-24 px-8 md:px-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <motion.div style={{ y: parallaxY }} className="absolute inset-0 opacity-10 bg-[url('https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg')] bg-cover bg-center mix-blend-overlay"></motion.div>
          
          <div className="relative z-10 w-full md:w-1/2 mb-12 md:mb-0">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">Location</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">New Launch <br/><span className="italic text-slate-400">Apartments Pune.</span></h2>
            <p className="font-sans text-slate-300 mt-6 max-w-md">Strategically located in Pune's most rapidly appreciating corridor, offering seamless access to global IT parks, elite schools, and premium retail hubs.</p>
          </div>
          
          <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6">
            {[
              { time: "15 Mins", desc: "To Global IT Hubs" },
              { time: "05 Mins", desc: "To International Schools" },
              { time: "20 Mins", desc: "To Premium Retail & Dining" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-950/10 backdrop-blur-md rounded-2xl p-6 flex items-center gap-6 border border-[#d4af37]/40 hover:bg-slate-950/20 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b08d20] flex items-center justify-center shrink-0">
                  <span className="font-serif text-xl text-white font-bold">{stat.time.split(' ')[0]}</span>
                </div>
                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-300 block mb-1">Commute Time</span>
                  <span className="font-serif text-xl text-white">{stat.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HorizontalGallery />

      {/* 
        ========================================================================
        2. THE EDITORIAL GATEWAYS
        ========================================================================
      */}
      <main className="relative z-10 bg-slate-950 mb-[100vh] pt-32 pb-40">
        <div className="container mx-auto px-6 md:px-12 flex flex-col gap-40">
          
          {/* Gateway 1: The Vision */}
          <Link href="/the-vision" onMouseEnter={() => setCursorType('explore')} onMouseLeave={() => setCursorType('default')}>
            <div className="group relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-slate-900/50 rounded-[4rem] rounded-br-sm shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-[0_20px_80px_rgba(212,175,55,0.3)] hover:-translate-y-2">
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[4rem] rounded-br-sm">
                <Image 
                  src="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
                  alt="The Vision"
                  fill
                  className="object-cover opacity-70 mix-blend-multiply group-hover:opacity-100 transition-transform duration-1000 group-hover:scale-105 transform ease-out"
                />
              </div>
              <div className="absolute -bottom-10 left-4 right-4 md:left-auto md:right-20 z-10 text-left bg-slate-950 rounded-[2rem] shadow-xl py-8 md:py-12 px-8 md:px-16 border border-[#d4af37]/30 max-w-xl group-hover:-translate-y-4 transition-transform duration-700">
                <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs mb-4 block font-bold">01</span>
                <h2 className="font-serif text-4xl md:text-7xl italic text-slate-100">The Vision</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#b08d20] mt-8"></div>
              </div>
            </div>
          </Link>

          {/* Gateway 2: The Residences */}
          <Link href="/the-residences" onMouseEnter={() => setCursorType('explore')} onMouseLeave={() => setCursorType('default')}>
            <div className="group relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-slate-900/50 rounded-[4rem] rounded-tl-sm shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-[0_20px_80px_rgba(212,175,55,0.3)] hover:-translate-y-2 mt-12">
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[4rem] rounded-tl-sm">
                <Image 
                  src="https://www.koltepatil.com/assets/uploads/gallery/17847871871558473491.jpg"
                  alt="The Residences"
                  fill
                  className="object-cover opacity-70 mix-blend-multiply group-hover:opacity-100 transition-transform duration-1000 group-hover:scale-105 transform ease-out"
                />
              </div>
              <div className="absolute -top-10 left-4 right-4 md:left-20 md:right-auto z-10 text-left bg-slate-950 rounded-[2rem] shadow-xl py-8 md:py-12 px-8 md:px-16 border border-[#d4af37]/30 max-w-xl group-hover:translate-y-4 transition-transform duration-700">
                <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs mb-4 block font-bold">02</span>
                <h2 className="font-serif text-4xl md:text-7xl italic text-slate-100">The Residences</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#b08d20] mt-8"></div>
              </div>
            </div>
          </Link>

          {/* Gateway 3: The Club */}
          <Link href="/the-club" onMouseEnter={() => setCursorType('explore')} onMouseLeave={() => setCursorType('default')}>
            <div className="group relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-slate-900/50 rounded-[4rem] rounded-bl-sm shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-[0_20px_80px_rgba(212,175,55,0.3)] hover:-translate-y-2 mt-12">
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[4rem] rounded-bl-sm">
                <Image 
                  src="https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg"
                  alt="The Club"
                  fill
                  className="object-cover opacity-70 mix-blend-multiply group-hover:opacity-100 transition-transform duration-1000 group-hover:scale-105 transform ease-out"
                />
              </div>
              <div className="absolute -bottom-10 left-4 right-4 md:left-auto md:right-20 z-10 text-left bg-slate-950 rounded-[2rem] shadow-xl py-8 md:py-12 px-8 md:px-16 border border-[#d4af37]/30 max-w-xl group-hover:-translate-y-4 transition-transform duration-700">
                <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs mb-4 block font-bold">03</span>
                <h2 className="font-serif text-4xl md:text-7xl italic text-slate-100">The Club</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#b08d20] mt-8"></div>
              </div>
            </div>
          </Link>

        </div>
      </main>

      {/* 
        ========================================================================
        3. THE REVEAL FOOTER
        ========================================================================
      */}
      <RevealFooter />
    </div>
  );
}
