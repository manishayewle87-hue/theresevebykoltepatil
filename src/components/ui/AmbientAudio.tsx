"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // We don't autoplay immediately because browsers block it, 
  // we let the user choose to turn it on, or auto-play on first interaction.
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.2; // Keep it very subtle
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay blocked, wait for manual toggle
        });
      }
      window.removeEventListener('click', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [isPlaying]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        src="https://cdn.pixabay.com/download/audio/2022/02/10/audio_fcb0254c79.mp3?filename=ambient-piano-amp-strings-10711.mp3" 
      />
      
      <button 
        onClick={toggleAudio}
        className="fixed bottom-8 left-8 z-50 flex items-center gap-3 group mix-blend-difference"
      >
        <div className="flex items-end gap-[2px] h-3">
          <motion.div 
            animate={{ height: isPlaying ? ["2px", "10px", "4px", "12px", "2px"] : "2px" }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="w-[2px] bg-[#d4af37]"
          />
          <motion.div 
            animate={{ height: isPlaying ? ["2px", "12px", "2px", "8px", "2px"] : "2px" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-[2px] bg-[#d4af37]"
          />
          <motion.div 
            animate={{ height: isPlaying ? ["2px", "6px", "12px", "4px", "2px"] : "2px" }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            className="w-[2px] bg-[#d4af37]"
          />
        </div>
        <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">
          Sound {isPlaying ? "On" : "Off"}
        </span>
      </button>
    </>
  );
}
