import React from 'react';
import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Floor Plans | 2 BHK & 3 BHK Layouts | Kolte Patil The Reserve",
  description: "Explore the Vastu-compliant 2 BHK and 3 BHK floor plans for Kolte Patil The Reserve on Sinhagad Road. View carpet areas, dimensions, and unit layouts.",
};

const floorPlans = [
  {
    id: "2-bhk",
    title: "2 BHK Signature Residence",
    tower: "Tower 06",
    type: "Type 03",
    carpetAreaSqft: "791.00",
    balconyAreaSqft: "87.00",
    totalUsableSqft: "878.00",
    imageSrc: "/images/floor-plans/2-bhk.png",
    altText: "2 BHK Floor Plan Kolte Patil The Reserve Pune",
    highlights: ["Spacious Living & Dining", "Dedicated Kitchen Balcony", "Vastu-Compliant Layout"]
  },
  {
    id: "3-bhk",
    title: "3 BHK Ultra-Luxury Residence",
    tower: "Tower 05",
    type: "Type 02",
    carpetAreaSqft: "1016.00",
    balconyAreaSqft: "133.00",
    totalUsableSqft: "1149.00",
    imageSrc: "/images/floor-plans/3-bhk.png",
    altText: "3 BHK Floor Plan Kolte Patil The Reserve Pune",
    highlights: ["Expansive Wrap-around Balcony", "Master Suite with Walk-in Area", "Premium Riverside Views"]
  }
];

export default function FloorPlansPage() {
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Kolte Patil The Reserve Floor Plans",
    "image": floorPlans.map(plan => ({
      "@type": "ImageObject",
      "contentUrl": `https://thereserve.koltepatil.digital${plan.imageSrc}`,
      "caption": plan.title,
      "name": plan.altText
    }))
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Script
        id="floor-plan-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-40 z-10 relative max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Project Layouts
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-white uppercase tracking-tight">
            Master Floor Plans.
          </h1>
          <p className="font-sans text-slate-400 font-light max-w-2xl mx-auto">
            Meticulously engineered for zero space wastage, cross-ventilation, and optimal natural lighting.
          </p>
        </div>

        <div className="space-y-24">
          {floorPlans.map((plan) => (
            <div key={plan.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-12">
              
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="flex flex-col h-full justify-center">
                  <span className="text-[#d4af37] font-bold text-xs tracking-widest uppercase mb-2">{plan.tower} • {plan.type}</span>
                  <h2 className="font-serif text-3xl text-white mb-6">{plan.title}</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400 font-sans text-sm">Flat Carpet Area</span>
                      <span className="text-white font-bold">{plan.carpetAreaSqft} Sq.ft</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400 font-sans text-sm">Balcony Area</span>
                      <span className="text-white font-bold">{plan.balconyAreaSqft} Sq.ft</span>
                    </div>
                    <div className="flex justify-between border-b border-[#d4af37]/30 pb-2">
                      <span className="text-[#d4af37] font-sans text-sm uppercase tracking-wider font-bold">Total Usable Area</span>
                      <span className="text-[#d4af37] font-bold">{plan.totalUsableSqft} Sq.ft</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-10">
                    {plan.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm font-sans text-slate-300 font-light">
                        <span className="text-[#d4af37] mr-3">✔</span> {highlight}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-4 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white transition-colors">
                    Request Pricing
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 order-1 lg:order-2 bg-white rounded-2xl p-4 overflow-hidden shadow-2xl">
                <Image 
                  src={plan.imageSrc} 
                  alt={plan.altText} 
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain scale-[1.02] hover:scale-105 transition-transform duration-700 cursor-zoom-in"
                  unoptimized={true} // Since it's a diagram, we want maximum clarity
                />
              </div>

            </div>
          ))}
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
