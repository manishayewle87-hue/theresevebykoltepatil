"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface PulseMessage {
  id: string;
  text: string;
  type: "investor" | "scarcity" | "booking";
  location: string;
}

interface PulseContextType {
  currentPulse: PulseMessage | null;
}

const PulseContext = createContext<PulseContextType>({ currentPulse: null });

const LOCATIONS = ["Dubai", "Singapore", "Mumbai", "London", "USA", "Pune", "Qatar"];
const INVESTOR_ACTIONS = [
  "is analyzing the 3 BHK layout.",
  "requested the project brochure.",
  "is viewing the Master Plan.",
  "just enquired about ROI potential.",
  "scheduled a virtual site visit.",
];

export function PulseProvider({ children }: { children: React.ReactNode }) {
  const [currentPulse, setCurrentPulse] = useState<PulseMessage | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Generate random pulses
    const generatePulse = () => {
      const loc = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      const action = INVESTOR_ACTIONS[Math.floor(Math.random() * INVESTOR_ACTIONS.length)];
      
      let text = `An NRI investor from ${loc} ${action}`;
      let type: "investor" | "scarcity" | "booking" = "investor";

      // Contextual pulses
      if (pathname === "/gallery") {
        text = `3 High-Net-Worth individuals are currently viewing the Gallery.`;
        type = "scarcity";
      } else if (pathname === "/investment") {
        const amt = (Math.random() * 5 + 2).toFixed(1);
        text = `₹${amt} Cr of inventory absorbed in the last 48 hours.`;
        type = "booking";
      } else if (pathname === "/floor-plans") {
        text = `A family from ${loc} just downloaded the 3 BHK layout.`;
        type = "investor";
      } else if (Math.random() > 0.8) {
        text = `Only 12 premium riverside units remaining in Phase 1.`;
        type = "scarcity";
      }

      setCurrentPulse({
        id: Date.now().toString(),
        text,
        type,
        location: loc
      });

      // Clear pulse after 6 seconds
      setTimeout(() => {
        setCurrentPulse(null);
      }, 6000);
    };

    // Trigger first pulse after 5 seconds
    const initialTimer = setTimeout(generatePulse, 5000);

    // Then random interval between 15s and 45s
    const pulseLoop = () => {
      const nextDelay = Math.random() * 30000 + 15000;
      setTimeout(() => {
        generatePulse();
        pulseLoop();
      }, nextDelay);
    };

    const loopTimer = setTimeout(pulseLoop, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(loopTimer);
    };
  }, [pathname]);

  return (
    <PulseContext.Provider value={{ currentPulse }}>
      {children}
    </PulseContext.Provider>
  );
}

export const usePulse = () => useContext(PulseContext);
