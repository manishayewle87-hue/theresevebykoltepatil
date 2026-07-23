import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import { locationData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return Object.keys(locationData).map((market) => ({
    'micro-market': market,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ 'micro-market': string }> }) {
  const resolvedParams = await params;
  const data = locationData[resolvedParams['micro-market']];
  if (!data) return { title: 'Location Not Found' };
  return {
    title: `${data.title} | The Reserve by Kolte Patil`,
    description: data.excerpt,
    keywords: [data.keyword, "Luxury Apartments Pune", "Kolte Patil The Reserve"]
  };
}

export default async function LocationMicroMarket({ params }: { params: Promise<{ 'micro-market': string }> }) {
  const resolvedParams = await params;
  const data = locationData[resolvedParams['micro-market']];
  
  if (!data) {
    notFound();
  }

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-40 z-10 relative">
        {/* Abstract Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop"
            alt="Pune Skyline"
            fill
            className="object-cover opacity-10 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8 block font-bold">
            Ultra-Premium Living
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 text-white uppercase tracking-tight">
            {data.title}.
          </h1>
          <p className="font-sans text-xl text-slate-400 font-light leading-relaxed mb-12">
            {data.excerpt}
          </p>
          
          <div className="flex justify-center gap-6">
            <Link href="/the-residences" className="px-8 py-4 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white transition-colors">
              View Floor Plans
            </Link>
            <Link href="/location" className="px-8 py-4 border border-[#d4af37] text-[#d4af37] font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-[#d4af37] hover:text-slate-950 transition-colors">
              Explore Masterplan
            </Link>
          </div>
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
