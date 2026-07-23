import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import { investmentData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return Object.keys(investmentData).map((inv) => ({
    intent: inv,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ intent: string }> }) {
  const resolvedParams = await params;
  const data = investmentData[resolvedParams.intent];
  if (!data) return { title: 'Investment Page Not Found' };
  return {
    title: `${data.title} | Kolte Patil The Reserve`,
    description: data.excerpt,
    keywords: [data.keyword, "Luxury Real Estate Pune", "Property Investment Pune"]
  };
}

export default async function InvestmentIntentPage({ params }: { params: Promise<{ intent: string }> }) {
  const resolvedParams = await params;
  const data = investmentData[resolvedParams.intent];
  
  if (!data) {
    notFound();
  }

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-40 z-10 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
            alt="Investment Strategy"
            fill
            className="object-cover opacity-10 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8 block font-bold">
            Strategic Investment
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 text-white uppercase tracking-tight">
            {data.title}.
          </h1>
          <p className="font-sans text-xl text-slate-400 font-light leading-relaxed mb-12">
            {data.excerpt}
          </p>
          
          <div className="flex justify-center gap-6">
            <Link href="/" className="px-8 py-4 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white transition-colors">
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
