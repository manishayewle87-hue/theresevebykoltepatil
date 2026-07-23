"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ConciergeContextType {
  isConciergeOpen: boolean;
  setIsConciergeOpen: (isOpen: boolean) => void;
}

const ConciergeContext = createContext<ConciergeContextType | undefined>(undefined);

export function ConciergeProvider({ children }: { children: ReactNode }) {
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);

  return (
    <ConciergeContext.Provider value={{ isConciergeOpen, setIsConciergeOpen }}>
      {children}
    </ConciergeContext.Provider>
  );
}

export function useConcierge() {
  const context = useContext(ConciergeContext);
  if (context === undefined) {
    throw new Error("useConcierge must be used within a ConciergeProvider");
  }
  return context;
}
