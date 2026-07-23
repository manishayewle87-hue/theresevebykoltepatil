import React from 'react';
import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import Script from "next/script";

export const metadata = {
  title: "Virtual Tour & Walkthrough | Kolte Patil The Reserve",
  description: "Experience a 360-degree virtual tour and drone flyovers of Kolte Patil The Reserve on Sinhagad Road.",
};

export default function VirtualTourPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Kolte Patil The Reserve - 360 Walkthrough",
    "description": "A comprehensive virtual tour and drone flyover of The Reserve luxury apartments in Pune.",
    "thumbnailUrl": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    "uploadDate": "2026-07-23T08:00:00+08:00",
    "contentUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder for actual client video
    "embedUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ"
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-40 z-10 relative max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Interactive Experience
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-white uppercase tracking-tight">
            360° Virtual Tour.
          </h1>
          <p className="font-sans text-slate-400 font-light max-w-2xl mx-auto">
            Walk through our signature 3 BHK residences and explore the 50,000 sq.ft. clubhouse from the comfort of your home.
          </p>
        </div>

        {/* Video Embed Container */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] group">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0&modestbranding=1" 
            title="The Reserve Walkthrough"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-[#d4af37]/50 transition-colors">
            <h3 className="font-serif text-2xl text-white mb-4">Live Drone View</h3>
            <p className="font-sans text-slate-400 font-light text-sm mb-6">See actual construction progress and Mutha River views.</p>
            <button className="text-[#d4af37] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Watch Now →</button>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-[#d4af37]/50 transition-colors">
            <h3 className="font-serif text-2xl text-white mb-4">2 BHK Walkthrough</h3>
            <p className="font-sans text-slate-400 font-light text-sm mb-6">Explore space-optimized premium layouts.</p>
            <button className="text-[#d4af37] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Watch Now →</button>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-[#d4af37]/50 transition-colors">
            <h3 className="font-serif text-2xl text-white mb-4">Clubhouse Tour</h3>
            <p className="font-sans text-slate-400 font-light text-sm mb-6">Dive into 5-star amenities and infinity pool.</p>
            <button className="text-[#d4af37] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Watch Now →</button>
          </div>
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
