import React from 'react';
import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Project Gallery | Kolte Patil The Reserve",
  description: "View stunning high-resolution exterior and interior images of The Reserve by Kolte Patil, Sinhagad Road, Pune.",
};

const images = [
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop", alt: "Kolte Patil The Reserve Exterior Elevation", caption: "Premium Riverside Facade" },
  { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop", alt: "Luxury Apartment Interior Pune", caption: "Signature 3 BHK Living Room" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop", alt: "Clubhouse Amenities at The Reserve", caption: "50,000 sq.ft. Private Clubhouse" },
  { src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop", alt: "Smart Home Features", caption: "Integrated Home Automation" },
  { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop", alt: "Pune Real Estate Investment Views", caption: "Uninterrupted Mutha River Views" },
  { src: "https://images.unsplash.com/photo-1574360699298-251f93f1d2df?q=80&w=1000&auto=format&fit=crop", alt: "Infinity Pool The Reserve", caption: "Olympic-length Infinity Pool" },
];

export default function GalleryPage() {
  // Generate ImageObject Schema for Google Images SEO
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "image": images.map(img => ({
      "@type": "ImageObject",
      "contentUrl": img.src,
      "caption": img.caption,
      "name": img.alt
    }))
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Script
        id="gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-40 z-10 relative">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Visual Experience
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-white uppercase tracking-tight">
            The Reserve Gallery.
          </h1>
          <p className="font-sans text-slate-400 font-light max-w-2xl mx-auto">
            Immerse yourself in the architectural brilliance of Pune's most coveted riverside development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative w-full h-[400px] overflow-hidden rounded-xl border border-slate-800">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-sans text-xs tracking-widest text-[#d4af37] uppercase font-bold block mb-1">
                  Render
                </span>
                <h3 className="font-serif text-xl text-white">{img.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
