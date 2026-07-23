"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

interface HorizontalScrollProps {
  children: React.ReactNode;
  title: string;
}

export default function HorizontalScroll({ children, title }: HorizontalScrollProps) {
  const { setCursorType } = useCursor();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translate vertical scroll into horizontal movement
  // The exact translation distance will depend on the width of the children
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#0a0a0c]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-white">
        <div className="absolute top-32 left-6 md:left-12 z-20">
          <h2 className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-black mix-blend-difference drop-shadow-sm opacity-20 whitespace-nowrap tracking-tight">{title}</h2>
        </div>
        
        <motion.div 
          style={{ x }} 
          className="flex gap-8 px-6 md:px-12 items-center h-full pt-32 pb-24"
          onMouseEnter={() => setCursorType("drag")}
          onMouseLeave={() => setCursorType("default")}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
