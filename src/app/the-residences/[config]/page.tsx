import RevealFooter from "@/components/layout/RevealFooter";
import { configData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export async function generateStaticParams() {
  return Object.keys(configData).map((cfg) => ({
    config: cfg,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ config: string }> }) {
  const resolvedParams = await params;
  const data = configData[resolvedParams.config];
  if (!data) return { title: 'Configuration Not Found' };
  return {
    title: `${data.title} | The Reserve by Kolte Patil`,
    description: data.excerpt,
    keywords: [data.keyword, "Luxury Apartments Pune", "Kolte Patil The Reserve"]
  };
}

export default async function ConfigurationPage({ params }: { params: Promise<{ config: string }> }) {
  const resolvedParams = await params;
  const data = configData[resolvedParams.config];
  
  if (!data) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${data.title} at The Reserve`,
    "description": data.excerpt,
    "image": "https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Kolte Patil"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://thereserve.koltepatil.digital/the-residences/${resolvedParams.config}`,
      "priceCurrency": "INR",
      "price": "15000000", // Dynamic fallback price
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Script
        id={`product-schema-${resolvedParams.config}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />      
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-40 z-10 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
            alt="Luxury Interior"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-10 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8 block font-bold">
            Bespoke Floorplans
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 text-white uppercase tracking-tight">
            {data.title}.
          </h1>
          <p className="font-sans text-xl text-slate-400 font-light leading-relaxed mb-12">
            {data.excerpt}
          </p>
          
          <div className="flex justify-center gap-6">
            <Link href="/the-residences" className="px-8 py-4 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white transition-colors">
              Request Pricing
            </Link>
          </div>
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
