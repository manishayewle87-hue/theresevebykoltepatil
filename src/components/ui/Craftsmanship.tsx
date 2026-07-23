"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AnimatedReveal } from "./AnimatedReveal";

const galleryImages = [
  {
    id: "img-1",
    src: "https://images.unsplash.com/photo-1620668903823-380d525cc401?q=80&w=2000&auto=format&fit=crop",
    title: "Statuario Marble",
    desc: "Book-matched Italian marble sourced from Carrara.",
    className: "col-span-12 md:col-span-7 h-[60vh]"
  },
  {
    id: "img-2",
    src: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2000&auto=format&fit=crop",
    title: "Brushed Champagne",
    desc: "Custom-forged metalwork detailing.",
    className: "col-span-12 md:col-span-5 h-[40vh] md:h-[60vh] md:mt-24"
  },
  {
    id: "img-3",
    src: "https://images.unsplash.com/photo-1549429188-725350be4cdb?q=80&w=2000&auto=format&fit=crop",
    title: "European Oak",
    desc: "Acoustically treated wide-plank flooring.",
    className: "col-span-12 md:col-span-6 h-[50vh]"
  },
  {
    id: "img-4",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
    title: "The Lounge",
    desc: "Seamless indoor-outdoor transitions.",
    className: "col-span-12 md:col-span-6 h-[50vh] md:-mt-12"
  }
];

export default function Craftsmanship() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedImage = galleryImages.find(img => img.id === selectedId);

  return (
    <div className="w-full">
      <AnimatedReveal>
        <div className="mb-20">
          <h2 className="font-serif text-5xl md:text-7xl mb-6 text-white">The Art of Craftsmanship</h2>
          <p className="font-sans text-[#d4af37] tracking-[0.2em] uppercase text-xs">Explore the details</p>
        </div>
      </AnimatedReveal>

      {/* Masonry Grid */}
      <div className="grid grid-cols-12 gap-6 md:gap-12">
        {galleryImages.map((item) => (
          <motion.div 
            key={item.id}
            layoutId={`container-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            className={`relative group cursor-zoom-in overflow-hidden ${item.className}`}
          >
            <motion.div layoutId={`image-${item.id}`} className="absolute inset-0">
              <Image 
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            
            <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <h3 className="font-serif text-3xl text-white drop-shadow-md">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cinematic Lightbox */}
      <AnimatePresence>
        {selectedId && selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div 
              layoutId={`container-${selectedImage.id}`}
              className="relative w-[90vw] max-w-6xl h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing lightbox immediately if desired, but here we want anywhere to close it usually. Actually, let's let click anywhere close it.
            >
              <motion.div layoutId={`image-${selectedImage.id}`} className="absolute inset-0">
                <Image 
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-cover md:object-contain" // Contain works better in lightbox so nothing is cropped
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent"
              >
                <h3 className="font-serif text-4xl md:text-5xl text-white mb-4">{selectedImage.title}</h3>
                <p className="font-sans text-white/60 font-light max-w-2xl">{selectedImage.desc}</p>
              </motion.div>
            </motion.div>

            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Close [X]</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
