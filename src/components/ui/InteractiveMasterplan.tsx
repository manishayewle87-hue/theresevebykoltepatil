"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCursor } from "@/context/CursorContext";

const mapAreas = [
  {
    id: "tower-a",
    title: "Signature Tower A",
    desc: "4.5 BHK Ultra-Luxury Residences",
    points: "20,10 40,20 40,60 20,50", // Percentage-based coordinates for responsiveness
  },
  {
    id: "tower-b",
    title: "Signature Tower B",
    desc: "3 BHK Premium Residences",
    points: "50,30 70,40 70,80 50,70",
  },
  {
    id: "clubhouse",
    title: "Club Platinum",
    desc: "50,000 sq.ft. of world-class amenities",
    points: "30,70 60,85 45,95 15,80",
  }
];

export default function InteractiveMasterplan() {
  const { setCursorType } = useCursor();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const activeArea = mapAreas.find(a => a.id === hoveredArea);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video md:aspect-[21/9] bg-[#050505] rounded-sm overflow-hidden border border-white/10 group cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorType("explore")}
      onMouseLeave={() => {
        setCursorType("default");
        setHoveredArea(null);
      }}
    >
      {/* Background Architectural Map */}
      <Image
        src="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
        alt="Masterplan Aerial View"
        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-50 grayscale transition-all duration-1000 group-hover:scale-105 group-hover:opacity-40"
      />

      {/* SVG Interaction Layer */}
      <svg 
        className="absolute inset-0 w-full h-full z-10" 
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {mapAreas.map((area) => (
          <polygon
            key={area.id}
            points={area.points}
            className="transition-all duration-500 ease-out cursor-pointer"
            fill={hoveredArea === area.id ? "rgba(212, 175, 55, 0.4)" : "transparent"}
            stroke={hoveredArea === area.id ? "rgba(212, 175, 55, 1)" : "rgba(255, 255, 255, 0.1)"}
            strokeWidth="0.5"
            onMouseEnter={() => setHoveredArea(area.id)}
            onMouseLeave={() => setHoveredArea(null)}
          />
        ))}
      </svg>

      {/* Dynamic Tooltip */}
      <AnimatePresence>
        {hoveredArea && activeArea && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 pointer-events-none bg-black/80 backdrop-blur-md border border-[#d4af37]/30 p-6 shadow-2xl w-64"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 40,
            }}
          >
            <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#d4af37] mb-2 block">
              Highlight
            </span>
            <h4 className="font-serif text-2xl text-white mb-2">{activeArea.title}</h4>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              {activeArea.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* HUD Overlay */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
        <div className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40 flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
          Live Interactive Map
        </div>
      </div>
    </div>
  );
}
