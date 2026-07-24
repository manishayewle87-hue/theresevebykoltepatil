"use client";

import { ReactLenis } from 'lenis/react';
import React from 'react';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 2.0, smoothWheel: true, wheelMultiplier: 0.9 }}>
      {children}
    </ReactLenis>
  );
}
