"use client";

import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import { AnimatedReveal, AnimatedTextMask } from "@/components/ui/AnimatedReveal";
import Image from "next/image";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";
import { motion, useScroll, useTransform } from "framer-motion";
import VisionaryQuote from "@/components/home/VisionaryQuote";
import HorizontalGallery from "@/components/home/HorizontalGallery";

export default function Home() {
  const { setCursorType } = useCursor();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="relative bg-white text-[#0B2B1B] selection:bg-[#d4af37] selection:text-white">
      {/* 
        ========================================================================
        1. THE PORTAL HERO (LIGHT/GLASSMORPHISM)
        ========================================================================
      */}
      <div className="h-screen w-full relative overflow-hidden flex flex-col rounded-b-[4rem] shadow-sm bg-white">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
            className="w-full h-full object-cover opacity-90"
          >
            <source src="https://player.vimeo.com/external/394627252.hd.mp4?s=d00e57262ba627d3568853c89657f8cfec47fb21&profile_id=174" type="video/mp4" />
          </video>
          {/* Light overlay to ensure text readability while maintaining airy feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </motion.div>

        <div className="relative z-50">
          <Navbar />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center relative z-20 px-4 mt-20">
          <AnimatedReveal>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-white mb-8 block font-bold drop-shadow-md">
              The Reserve by Kolte Patil
            </span>
          </AnimatedReveal>
          
          <div className="relative group max-w-6xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] tracking-tight leading-[1] relative z-10 text-white drop-shadow-lg">
              <AnimatedTextMask text="Luxury Living Redefined on Sinhagad Road" delay={0.4} />
            </h1>
          </div>

          <AnimatedReveal delay={0.6}>
            <p className="font-sans text-lg md:text-xl text-white/90 mt-8 max-w-2xl mx-auto drop-shadow-md font-light">
              Experience thoughtfully designed 2 & 3 BHK homes by Kolte-Patil Developers.
            </p>
          </AnimatedReveal>
          
          <AnimatedReveal delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center items-center">
              <button className="px-8 py-4 bg-[#d4af37] text-white font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-[#0B2B1B] transition-colors shadow-xl">
                Book a Site Visit
              </button>
              <button className="px-8 py-4 glass-panel text-white font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white hover:text-[#0B2B1B] transition-colors">
                Download Brochure
              </button>
            </div>
          </AnimatedReveal>
        </div>

        {/* Floating Fluid Stats Bar (Glassmorphism) */}
        <div className="absolute bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 z-30 w-[95%] md:w-[90%] max-w-5xl glass-panel rounded-3xl p-6 md:p-8 block">
          <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-white/20">
            <div className="flex flex-col items-center justify-center text-center px-4 pt-2 md:pt-0">
              <span className="font-serif text-3xl md:text-4xl text-white mb-1 md:mb-2 drop-shadow-md">21</span>
              <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-white/80">Acres of Luxury</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl md:text-4xl text-[#d4af37] mb-1 md:mb-2 drop-shadow-md">2 & 3</span>
              <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-white/80">BHK Signature Residences</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl md:text-4xl text-white mb-1 md:mb-2 drop-shadow-md">Pre-Launch</span>
              <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-white/80">Exclusive Phase</span>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        1.5 THE CORE PHILOSOPHY (FOREST GREEN)
        ========================================================================
      */}
      <section className="relative z-10 bg-[#0B2B1B] py-32 overflow-hidden text-white rounded-[4rem] -mt-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full md:w-1/2 flex flex-col gap-8">
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold">About Project</span>
              <h2 className="font-serif text-5xl md:text-7xl leading-tight">
                Premium Homes <br/><span className="italic text-[#d4af37]">Sinhgad Road.</span>
              </h2>
              <p className="font-sans text-lg text-white/70 leading-relaxed max-w-lg">
                Kolte Patil The Reserve is not just a residence; it is a legacy. Designed with a forward-looking vision, these Luxury Flats in Pune combine timeless architectural brilliance with modern fluidic spaces to create an environment that nurtures generations.
              </p>
              <Link href="/the-vision" className="mt-4 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white hover:text-[#d4af37] transition-colors group w-max">
                Explore Our Vision 
                <span className="w-8 h-[2px] bg-white/20 group-hover:bg-[#d4af37] transition-colors"></span>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="w-full md:w-1/2 relative h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image priority src="https://www.koltepatil.com/assets/uploads/gallery/17847871871558473491.jpg" alt="The Philosophy" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-[#0B2B1B]/10 group-hover:bg-transparent transition-colors duration-700"></div>
              <div className="absolute bottom-8 -left-4 md:left-8 glass-panel-dark p-8 rounded-[2rem] max-w-sm group-hover:-translate-y-2 transition-transform duration-700">
                <span className="font-serif text-5xl text-[#d4af37] block mb-2">30+</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-white font-bold">Years of Excellence</span>
                <p className="text-sm text-white/60 mt-2">Delivering architectural marvels across Pune, Mumbai, and Bengaluru.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        1.6 SIGNATURE HIGHLIGHTS (PURE WHITE AIRY CARDS)
        ========================================================================
      */}
      <section className="relative z-10 bg-[#F5F5F5] py-32 rounded-[4rem] -mt-12">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#0B2B1B] font-bold block mb-4">Amenities</span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#0B2B1B]">Signature Highlights</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Nature's Embrace", desc: "50 sprawling acres of curated greenery, bio-diverse parks, and serene walking trails right at your doorstep.", img: "https://www.koltepatil.com/assets/uploads/gallery/1784787123820805146.jpg" },
              { title: "Automated Homes", desc: "State-of-the-art smart home integration. Control climate, lighting, and security with a single touch.", img: "https://www.koltepatil.com/assets/uploads/gallery/17847870511644671891.jpg" },
              { title: "Private Wellness", desc: "An exclusive 50,000 sq.ft. resident club featuring spa pavilions, infinity pools, and holistic wellness zones.", img: "https://www.koltepatil.com/assets/uploads/gallery/17847869771007144168.jpg" },
              { title: "Global Standards", desc: "Crafted with imported Italian marble, European fixtures, and bespoke minimalist finishing.", img: "https://www.koltepatil.com/assets/uploads/gallery/17847868911484090893.jpg" }
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative h-[450px] overflow-hidden rounded-[2rem] bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 p-4">
                <div className="relative w-full h-[70%] rounded-[1.5rem] overflow-hidden">
                  <Image src={feature.img} alt={feature.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-3xl text-[#0B2B1B] mb-2">{feature.title}</h3>
                  <p className="font-sans text-sm text-[#0B2B1B]/60 leading-relaxed">{feature.desc}</p>
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
      <section className="relative z-10 bg-white py-32 px-4 md:px-12">
        <div className="bg-[#0B2B1B] rounded-[3rem] py-24 px-8 md:px-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <motion.div style={{ y: parallaxY }} className="absolute inset-0 opacity-20 bg-[url('https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg')] bg-cover bg-center mix-blend-luminosity"></motion.div>
          
          <div className="relative z-10 w-full md:w-1/2 mb-12 md:mb-0">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">Location</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">New Launch <br/><span className="italic text-white/70">Apartments Pune.</span></h2>
            <p className="font-sans text-white/70 mt-6 max-w-md">Strategically located in Pune's most rapidly appreciating corridor, offering seamless access to global IT parks, elite schools, and premium retail hubs.</p>
          </div>
          
          <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6">
            {[
              { time: "15 Mins", desc: "To Global IT Hubs" },
              { time: "05 Mins", desc: "To International Schools" },
              { time: "20 Mins", desc: "To Premium Retail & Dining" }
            ].map((stat, i) => (
              <div key={i} className="glass-panel-dark rounded-2xl p-6 flex items-center gap-6 hover:bg-[#12402A] transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#CD7F32] flex items-center justify-center shrink-0 shadow-lg">
                  <span className="font-serif text-xl text-white font-bold">{stat.time.split(' ')[0]}</span>
                </div>
                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#d4af37] block mb-1">Commute Time</span>
                  <span className="font-serif text-xl text-white">{stat.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. THE EDITORIAL GATEWAYS
        ========================================================================
      */}
      <main className="relative z-10 bg-white mb-[100vh] pt-16 pb-40">
        <div className="container mx-auto px-6 md:px-12 flex flex-col gap-40">
          
          {/* Gateway 1: The Vision */}
          <Link href="/the-vision" onMouseEnter={() => setCursorType('explore')} onMouseLeave={() => setCursorType('default')}>
            <div className="group relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-[#FDFBF7] rounded-[3rem] shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 p-6">
              <div className="absolute inset-6 z-0 overflow-hidden rounded-[2rem]">
                <Image 
                  src="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
                  alt="The Vision"
                  fill
                  className="object-cover group-hover:scale-105 transform ease-out transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-16 left-16 z-10 text-left max-w-xl">
                <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs mb-4 block font-bold drop-shadow-md">01</span>
                <h2 className="font-serif text-4xl md:text-7xl italic text-white drop-shadow-lg">The Vision</h2>
                <div className="w-12 h-1 bg-[#d4af37] mt-8 group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
          </Link>

          {/* Gateway 2: The Residences */}
          <Link href="/the-residences" onMouseEnter={() => setCursorType('explore')} onMouseLeave={() => setCursorType('default')}>
            <div className="group relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-[#FDFBF7] rounded-[3rem] shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 p-6">
              <div className="absolute inset-6 z-0 overflow-hidden rounded-[2rem]">
                <Image 
                  src="https://www.koltepatil.com/assets/uploads/gallery/17847871871558473491.jpg"
                  alt="The Residences"
                  fill
                  className="object-cover group-hover:scale-105 transform ease-out transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-16 left-16 z-10 text-left max-w-xl">
                <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs mb-4 block font-bold drop-shadow-md">02</span>
                <h2 className="font-serif text-4xl md:text-7xl italic text-white drop-shadow-lg">The Residences</h2>
                <div className="w-12 h-1 bg-[#d4af37] mt-8 group-hover:w-24 transition-all duration-500"></div>
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
