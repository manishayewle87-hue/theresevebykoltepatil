"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useConcierge } from "@/context/ConciergeContext";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const { setIsConciergeOpen } = useConcierge();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide/Show navbar based on scroll direction for fluid experience
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // Scrolling down, hide the island to maximize screen space
    } else {
      setHidden(false); // Scrolling up, reveal the island
    }
    setIsScrolled(latest > 50);
  });

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setIsMobileMenuOpen(false);
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Overview", href: "/overview" },
    { name: "Master Layout", href: "/master-layout" },
    { name: "Floor Plans", href: "/floor-plans" },
    { name: "Amenities", href: "/amenities" },
    { name: "Specifications", href: "/specifications" },
    { name: "Location", href: "/location" }
  ];

  return (
    <>
      {/* THE FLOATING ISLAND NAVBAR */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1, scale: 1 },
          hidden: { y: "-100%", opacity: 0, scale: 0.95 }
        }}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 md:px-0 pointer-events-none"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
            isScrolled 
              ? "bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-2 px-4 rounded-full border border-white/40 w-full max-w-5xl md:max-w-4xl" 
              : "bg-transparent py-4 px-6 w-full max-w-7xl"
          }`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4 z-50 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative h-8 w-24 md:h-10 md:w-32 block transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-full p-1.5 shadow-sm border border-black/5">
                <Image 
                  src="/kolte-patil-logo.jpg" 
                  alt="Kolte Patil Developers" 
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
            {!isScrolled && (
              <div className="flex flex-col opacity-0 md:opacity-100 transition-opacity duration-500">
                <span className="font-serif text-xl tracking-[0.15em] text-[#0B2B1B] uppercase">
                  The Reserve
                </span>
                <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-[#0B2B1B]/60 text-left">
                  by Kolte Patil
                </span>
              </div>
            )}
          </Link>

          {/* DESKTOP LINKS (Fluidly hide on mobile) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-[10px] xl:text-xs uppercase tracking-widest font-bold hover:text-[#d4af37] transition-colors relative group ${isScrolled ? "text-[#0B2B1B]" : "text-[#0B2B1B]/80"}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTAs & MENU BUTTON */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <MagneticButton>
              <button 
                onClick={() => setIsConciergeOpen(true)}
                aria-label="Open Concierge Panel for Inquiries"
                className="hidden md:flex px-6 py-2.5 bg-[#0B2B1B] text-white rounded-full text-[9px] tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-[#0B2B1B] transition-colors font-bold shadow-lg"
              >
                Enquire
              </button>
            </MagneticButton>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md border border-[#0B2B1B]/5 text-[#0B2B1B] hover:bg-[#F5F5F5] transition-colors z-[110]"
            >
              <div className="flex flex-col gap-1 md:gap-1.5 w-4 md:w-5">
                <motion.span 
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-full h-[1.5px] bg-current origin-center transition-transform"
                />
                <motion.span 
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-[1.5px] bg-current transition-opacity"
                />
                <motion.span 
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-full h-[1.5px] bg-current origin-center transition-transform"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ULTRA-ADVANCED FULL SCREEN MEGA MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(30px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-[#0B2B1B]/95 flex flex-col md:flex-row overflow-hidden"
          >
            {/* Split Screen Image for Tablets/Desktop */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block w-1/2 h-full relative"
            >
              <div className="absolute inset-0 bg-[url('https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B2B1B]/50 to-[#0B2B1B]"></div>
            </motion.div>
            
            {/* Menu Items */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 pt-20">
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                className="flex flex-col gap-4 md:gap-8"
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      open: { y: 0, opacity: 1, rotateX: 0 },
                      closed: { y: 40, opacity: 0, rotateX: 45 }
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ perspective: "1000px" }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="font-serif text-5xl md:text-7xl capitalize font-bold text-white hover:text-[#d4af37] transition-all duration-500 flex items-center gap-6 group"
                    >
                      <span className="text-sm font-sans text-white/30 tracking-widest group-hover:text-[#d4af37] transition-colors mt-2">0{i+1}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-4"
              >
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50">Contact Concierge</p>
                <a href="tel:+910000000000" className="font-serif text-3xl text-[#d4af37] hover:text-white transition-colors">+91 98765 43210</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
