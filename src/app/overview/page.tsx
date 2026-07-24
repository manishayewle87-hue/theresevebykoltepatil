'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function OverviewPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <main ref={containerRef} className="min-h-[200vh] bg-forest-900 text-white relative selection:bg-gold-500 selection:text-forest-900">
      
      {/* Hero Section */}
      <section className="h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y as any, opacity }}
        >
          {/* Subtle radial gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,rgba(10,25,15,1)_100%)]" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold-500 tracking-[0.2em] text-sm uppercase mb-6 font-medium"
          >
            The Philosophy
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8"
          >
            Some addresses are built.<br />
            <span className="italic text-gold-500">This one was set aside.</span>
          </motion.h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-20 bg-forest-900/95 backdrop-blur-xl rounded-t-[3rem] border-t border-white/5 py-32 mt-[100vh]">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="space-y-32">
            
            {/* The Setting */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-light mb-6 text-gold-400">A Rare Riverside Setting.</h2>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                  Spread across <strong className="text-white">21.03 acres</strong> at Wadgaon Budruk, The Reserve brings together river-facing greens, scenic NDA hill views, and a central landscaped boulevard. 
                </p>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mt-4">
                  A life where river, hills, sky, and nature converge seamlessly, minutes from the everyday conveniences of Sinhgad Road.
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-forest-800 to-forest-950 rounded-2xl border border-white/10 p-8 flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors duration-700" />
                  <h3 className="text-8xl font-light text-white/20 absolute top-8 left-8">21</h3>
                  <div>
                    <p className="text-gold-500 uppercase tracking-widest text-sm mb-2">Preserved Landscape</p>
                    <p className="text-2xl text-white font-light">Acres of lush, riverside nature.</p>
                  </div>
              </div>
            </motion.div>

            {/* The Residences */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1 aspect-[4/5] bg-gradient-to-tr from-forest-950 to-forest-800 rounded-2xl border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                <div className="flex justify-between items-start w-full relative z-10">
                   <span className="text-gold-400 text-lg">Phase 1</span>
                   <span className="text-white/50 text-sm tracking-widest uppercase">Now Open</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-light text-white mb-4">2 & 3 Bed</h3>
                  <p className="text-white/60">Designed around complete openness.</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-light mb-6 text-gold-400">Crafted for Openness.</h2>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                  Introducing thoughtfully planned 2 & 3 bed residences designed around a core philosophy: absolute spaciousness. 
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Excellent cross ventilation",
                    "Abundant natural light",
                    "Well-spaced towers for enhanced privacy",
                    "Views that belong to nature"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-white/80 font-light text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Location Advantage */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="text-center max-w-3xl mx-auto border-t border-white/10 pt-24 pb-24"
            >
              <p className="text-gold-500 tracking-[0.2em] text-sm uppercase mb-6 font-medium">The Corridor</p>
              <h2 className="text-3xl md:text-5xl font-light mb-8 text-white">Pune's Most Promising Growth Corridor.</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                Sinhgad Road is evolving rapidly. With the proposed Pune Ring Road, future metro connectivity plans, and a mature ecosystem of schools, hospitals, and retail already in place, The Reserve places you at the epicenter of the city's next chapter—without ever compromising the calm of the riverside.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
