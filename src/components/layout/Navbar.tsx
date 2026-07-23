"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useConcierge } from "@/context/ConciergeContext";

export default function Navbar() {
  const { setIsConciergeOpen } = useConcierge();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    }
  };

  const navLinks = [
    { name: "The Vision", href: "/the-vision" },
    { name: "Residences", href: "/the-residences" },
    { name: "The Club", href: "/the-club" },
    { name: "Locality", href: "/location" }
  ];

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-700",
          isScrolled || isMobileMenuOpen
            ? "bg-slate-950 shadow-md shadow-black/50 border-b-[3px] border-transparent"
            : "bg-slate-950/70 backdrop-blur-md border-b-[3px] border-transparent"
        )}
        style={{
          borderBottomColor: 'transparent',
          borderImage: 'linear-gradient(to right, #d4af37 0%, #b08d20 100%) 1'
        }}
      >
        <div className="px-6 md:px-12 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-1 z-50 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.15em] text-slate-100 group-hover:text-[#d4af37] transition-cinematic uppercase">
                The Reserve
              </span>
              <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-slate-400 text-left mt-1 hidden md:block">
                by Kolte Patil
              </span>
            </div>
            
            {/* Corporate Logo - With Frosted White Pill for Dark Mode */}
            <div className="relative h-8 w-24 md:h-12 md:w-32 block transition-transform duration-500 hover:scale-105 ml-2 border-l border-slate-700 pl-4">
              <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-md p-1.5 shadow-inner">
                <Image 
                  src="/kolte-patil-logo.jpg" 
                  alt="Kolte Patil Developers" 
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xs uppercase tracking-widest font-bold text-slate-300 hover:text-[#d4af37] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Menu Trigger */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsConciergeOpen(true)}
              aria-label="Open Concierge Panel for Inquiries"
              className="hidden md:flex px-6 py-2 border border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-slate-950 transition-cinematic font-bold"
            >
              VIP Concierge
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="text-slate-100 text-xs tracking-[0.3em] uppercase font-bold hover:text-[#d4af37] transition-colors z-[60] relative"
            >
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </motion.header>
      {/* Ultra-Advanced Full Screen Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-slate-950 flex flex-col md:flex-row"
          >
            {/* Split Screen Image for Tablets */}
            <div className="hidden md:block w-1/2 h-full relative border-r border-slate-800">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950"></div>
            </div>
            
            {/* Menu Items */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 pt-20">
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                className="flex flex-col gap-6"
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      open: { y: 0, opacity: 1, rotateX: 0 },
                      closed: { y: 40, opacity: 0, rotateX: 45 }
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-serif text-4xl md:text-5xl uppercase font-bold text-slate-100 hover:text-[#d4af37] transition-all duration-500 flex items-center gap-4 group"
                    >
                      <span className="text-sm font-sans text-slate-500 tracking-widest group-hover:text-[#d4af37] transition-colors">0{i+1}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8 }}
                className="mt-16 pt-8 border-t border-slate-800 flex flex-col gap-4"
              >
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-500">Contact Concierge</p>
                <a href="tel:+910000000000" className="font-serif text-2xl text-[#d4af37] hover:text-slate-100 transition-colors">+91 98765 43210</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
