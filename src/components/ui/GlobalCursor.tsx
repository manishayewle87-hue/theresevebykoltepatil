"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function GlobalCursor() {
  const { cursorType } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      x: "-50%",
      y: "-50%",
      backgroundColor: "#d4af37",
      borderWidth: 0,
      opacity: 1
    },
    explore: {
      width: 80,
      height: 80,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(212, 175, 55, 0.1)",
      border: "1px solid rgba(212, 175, 55, 0.5)",
      opacity: 1
    },
    drag: {
      width: 80,
      height: 80,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(212, 175, 55, 0.1)",
      border: "1px solid rgba(212, 175, 55, 0.5)",
      opacity: 1
    },
    hidden: {
      opacity: 0
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center font-sans text-[8px] tracking-[0.2em] uppercase text-[#d4af37]"
      style={{ x: cursorX, y: cursorY }}
      variants={variants}
      animate={cursorType}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorType === "explore" || cursorType === "drag" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {cursorType === "explore" ? "Play" : cursorType === "drag" ? "Drag" : ""}
      </motion.span>
    </motion.div>
  );
}
