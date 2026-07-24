"use client";

import { Button } from "@/components/ui/Button";
import InvestmentDashboard from "@/components/ui/InvestmentDashboard";

export default function InvestmentPage() {
  return (
    <>      <main className="flex-1 w-full flex flex-col bg-[#111111]">
        <section className="pt-40 pb-20 px-6 md:px-12 bg-[#0B2B1B]">
          <div className="container mx-auto text-center">
            <span className="text-[#d4af37] tracking-widest uppercase text-xs font-semibold mb-6 block">Investment</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-white">
              A Legacy <span className="italic font-light text-white/50">of Value</span>
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 block font-bold">NRI & Investor Intelligence</span>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Wealth Generation Engine</h2>
                <p className="text-white/60 max-w-2xl mx-auto">Visualize your compounding returns and exact ROI over time using our dynamic data intelligence engine, tailored specifically for The Reserve's historical appreciation rates.</p>
              </div>
              
              <InvestmentDashboard />
            </div>
          </div>
        </section>
      </main>    </>
  );
}
