"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type CursorType = "default" | "hover" | "drag" | "explore" | "locked";

interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  cursorPosition: { x: number; y: number };
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouseX, smoothOptions),
    y: useSpring(mouseY, smoothOptions)
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  const variants = {
    default: {
      height: 12,
      width: 12,
      x: smoothMouse.x.get() - 6,
      y: smoothMouse.y.get() - 6,
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
    hover: {
      height: 60,
      width: 60,
      x: smoothMouse.x.get() - 30,
      y: smoothMouse.y.get() - 30,
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
    drag: {
      height: 80,
      width: 80,
      x: smoothMouse.x.get() - 40,
      y: smoothMouse.y.get() - 40,
      backgroundColor: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.5)",
    },
    explore: {
      height: 100,
      width: 100,
      x: smoothMouse.x.get() - 50,
      y: smoothMouse.y.get() - 50,
      backgroundColor: "rgba(212, 175, 55, 1)",
    },
    locked: {
      height: 0,
      width: 0,
      opacity: 0
    }
  };

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType, cursorPosition }}>
      {children}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center overflow-hidden"
        variants={variants}
        animate={cursorType}
        style={{
          x: smoothMouse.x,
          y: smoothMouse.y,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        <AnimatePresence>
          {cursorType === "drag" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex items-center justify-center text-white text-[10px] tracking-widest uppercase font-sans"
            >
              Drag
            </motion.div>
          )}
          {cursorType === "explore" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex items-center justify-center text-slate-950 font-bold text-[10px] tracking-[0.3em] uppercase font-sans"
            >
              Explore
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
