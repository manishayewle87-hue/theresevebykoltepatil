"use client";

import { ReactLenis } from 'lenis/react';
import React from 'react';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 2.5, smoothWheel: true, wheelMultiplier: 0.8, syncTouch: false, touchMultiplier: 1.2 }}>
      {children}
    </ReactLenis>
  );
}
