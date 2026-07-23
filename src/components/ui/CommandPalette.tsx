"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Search, Map, Calculator, BookOpen, Home, Settings2, X } from 'lucide-react';

const searchData = [
  { id: '1', title: 'Luxury 3 BHK Residences', route: '/the-residences/3-bhk-pune', icon: <Home size={18} />, category: 'Apartments' },
  { id: '2', title: 'Premium 2 BHK Residences', route: '/the-residences/2-bhk-pune', icon: <Home size={18} />, category: 'Apartments' },
  { id: '3', title: 'Smart EMI Calculator', route: '/tools/emi-calculator', icon: <Calculator size={18} />, category: 'Tools' },
  { id: '4', title: 'Stamp Duty Calculator', route: '/tools/stamp-duty-calculator', icon: <Calculator size={18} />, category: 'Tools' },
  { id: '5', title: 'Living on Sinhagad Road Guide', route: '/guides/living-on-sinhagad-road', icon: <Map size={18} />, category: 'Guides' },
  { id: '6', title: 'Financial Planning & Tax Benefits', route: '/guides/financial-planning-homebuyers-pune', icon: <BookOpen size={18} />, category: 'Guides' },
  { id: '7', title: 'Project Master Plan', route: '/project/master-plan', icon: <Settings2 size={18} />, category: 'Project' },
  { id: '8', title: 'Pricing & Availability', route: '/project/pricing', icon: <Settings2 size={18} />, category: 'Project' },
  { id: '9', title: 'Virtual 360 Tour', route: '/virtual-tour', icon: <Home size={18} />, category: 'Experience' },
  { id: '10', title: 'Gallery & Renders', route: '/gallery', icon: <Home size={18} />, category: 'Experience' },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filteredResults = searchData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (route: string) => {
    setIsOpen(false);
    router.push(route);
  };

  return (
    <>
      {/* Mobile Trigger Button (Optional, since mobile can't Cmd+K easily) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-6 z-40 w-12 h-12 bg-slate-900 border border-[#d4af37]/30 rounded-full flex items-center justify-center shadow-lg md:hidden text-[#d4af37]"
        aria-label="Open Search"
      >
        <Search size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] md:pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-slate-900 border border-[#d4af37]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center px-4 py-4 border-b border-slate-800">
                <Search size={20} className="text-[#d4af37] mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search floor plans, calculators, guides..."
                  className="flex-1 bg-transparent border-none outline-none text-slate-100 font-sans text-lg placeholder:text-slate-500"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto py-2">
                {filteredResults.length === 0 ? (
                  <div className="px-6 py-12 text-center text-slate-500 font-sans">
                    No results found for "{query}"
                  </div>
                ) : (
                  filteredResults.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => handleSelect(item.route)}
                      className="px-4 py-3 hover:bg-slate-800/50 cursor-pointer flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-slate-500 group-hover:text-[#d4af37] transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-slate-200 font-sans text-sm">{item.title}</span>
                          <span className="text-slate-500 text-[10px] uppercase tracking-wider">{item.category}</span>
                        </div>
                      </div>
                      <span className="text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  ))
                )}
              </div>
              
              <div className="px-4 py-3 bg-slate-950/50 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-sans">
                <div className="flex items-center gap-2">
                  <span>Press</span>
                  <kbd className="px-2 py-1 bg-slate-800 rounded font-mono text-[10px]">esc</kbd>
                  <span>to close</span>
                </div>
                <span>Kolte Patil Developers</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
