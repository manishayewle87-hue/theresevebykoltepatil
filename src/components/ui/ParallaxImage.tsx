"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string; // Classes for the container (e.g. h-[500px])
  imageClassName?: string; // Classes for the image itself
  sizes?: string;
  parallaxOffset?: number; // Negative pushes up, positive pulls down. Default 100
}

export default function ParallaxImage({
  src,
  alt,
  className = "h-[500px] w-full",
  imageClassName = "transition-cinematic duration-[2s] group-hover:scale-105",
  sizes = "100vw",
  parallaxOffset = -150
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position relative to this element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress (0 to 1) to a Y pixel offset
  const y = useTransform(scrollYProgress, [0, 1], [-parallaxOffset, parallaxOffset]);

  return (
    <motion.div 
      ref={containerRef}
      className={`relative overflow-hidden group bg-black ${className}`}
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div 
        className="absolute inset-[-150px] w-[calc(100%+300px)] h-[calc(100%+300px)]"
        style={{ y }}
      >
        <Image 
          src={src}
          alt={alt}
          fill
          className={`object-cover ${imageClassName}`}
          sizes={sizes}
        />
      </motion.div>
    </motion.div>
  );
}
