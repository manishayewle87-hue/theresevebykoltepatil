"use client";

import React, { useState } from 'react';
import RevealFooter from "@/components/layout/RevealFooter";
import { motion } from "framer-motion";

export default function StampDutyCalculator() {
  const [propertyValue, setPropertyValue] = useState<number>(15000000); // 1.5 Cr
  const [isFemaleOwner, setIsFemaleOwner] = useState<boolean>(false);
  const [isPMC, setIsPMC] = useState<boolean>(true); // Pune Municipal Corp vs Gram Panchayat
  
  // Logic based on standard Maharashtra 2026 rates (approximate for demonstration)
  // PMC: 7% (Base 5% + 1% Metro + 1% LBT/Transport). Gram Panchayat: 6%.
  // Female concession: 1% discount on base rate.
  let stampDutyRate = isPMC ? 7 : 6;
  if (isFemaleOwner) {
    stampDutyRate -= 1;
  }
  
  const stampDutyAmount = (propertyValue * stampDutyRate) / 100;
  
  // Registration is 1% up to max of 30,000
  const registrationAmount = Math.min((propertyValue * 1) / 100, 30000);
  
  const totalTaxes = stampDutyAmount + registrationAmount;

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-white">
      <title>Stamp Duty Calculator Pune, Maharashtra | Kolte Patil</title>
      <meta name="description" content="Calculate exact stamp duty and registration charges for buying property in Pune, Maharashtra. Includes 1% female homebuyer concession logic." />      
      <main className="flex-1 container mx-auto px-6 py-40 z-10 relative max-w-5xl">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Interactive Tools
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-white uppercase tracking-tight">
            Stamp Duty Calculator.
          </h1>
          <p className="font-sans text-slate-400 font-light max-w-2xl mx-auto">
            Calculate the exact legal and registration costs for your new luxury home in Pune, applying the latest Maharashtra state tax regulations and concessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Controls */}
          <div className="md:col-span-7 bg-slate-900 border border-[#d4af37]/20 p-8 md:p-12 rounded-[2rem] shadow-2xl">
            
            <div className="mb-12">
              <label className="flex justify-between font-sans text-sm text-slate-400 uppercase tracking-widest mb-4">
                <span>Agreement Value</span>
                <span className="text-[#d4af37] font-bold">₹{(propertyValue / 100000).toFixed(2)} Lakhs</span>
              </label>
              <input 
                type="range" min="5000000" max="100000000" step="100000"
                value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
            </div>

            <div className="mb-8 border-b border-slate-800 pb-8">
              <label className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only" checked={isFemaleOwner} onChange={() => setIsFemaleOwner(!isFemaleOwner)} />
                  <div className={`block w-10 h-6 rounded-full transition-colors ${isFemaleOwner ? 'bg-[#d4af37]' : 'bg-slate-700'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isFemaleOwner ? 'transform translate-x-4' : ''}`}></div>
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="font-sans text-sm text-slate-200 uppercase tracking-widest">Female Sole/Joint Owner</span>
                  <span className="font-sans text-xs text-slate-500 font-light mt-1">Applies 1% Maharashtra State Concession</span>
                </div>
              </label>
            </div>

            <div>
              <label className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only" checked={isPMC} onChange={() => setIsPMC(!isPMC)} />
                  <div className={`block w-10 h-6 rounded-full transition-colors ${isPMC ? 'bg-[#d4af37]' : 'bg-slate-700'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isPMC ? 'transform translate-x-4' : ''}`}></div>
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="font-sans text-sm text-slate-200 uppercase tracking-widest">Within PMC Limits</span>
                  <span className="font-sans text-xs text-slate-500 font-light mt-1">Pune Municipal Corporation adds 1% Metro Cess</span>
                </div>
              </label>
            </div>

          </div>

          {/* Results Display */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            <motion.div 
              key={totalTaxes}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-900 border border-[#d4af37] p-8 rounded-[2rem] shadow-[0_0_30px_rgba(212,175,55,0.15)] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]"></div>
              <span className="font-sans text-[10px] tracking-widest uppercase text-slate-400 block mb-4">Total Government Taxes</span>
              <h2 className="font-serif text-5xl text-white mb-2">₹{(totalTaxes / 100000).toFixed(2)} L</h2>
              <span className="font-sans text-xs text-[#d4af37]">Effective Rate: {stampDutyRate}% + Reg.</span>
            </motion.div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-slate-500 block mb-2">Stamp Duty ({stampDutyRate}%)</span>
                <span className="font-sans text-lg text-slate-200">₹{(stampDutyAmount / 100000).toFixed(2)} L</span>
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-slate-500 block mb-2">Registration</span>
                <span className="font-sans text-lg text-slate-200">₹{(registrationAmount).toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Smart Conversion Suggestion */}
            <div className="bg-[#101015] border border-[#d4af37]/30 p-8 rounded-[2rem] text-center">
              <p className="font-sans text-sm text-slate-300 font-light mb-6">
                Did you know? Booking a unit at The Reserve during our <strong>New Launch Window</strong> may qualify you for Stamp Duty waivers.
              </p>
              <button className="w-full px-6 py-4 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white transition-colors">
                Claim Launch Offers
              </button>
            </div>

          </div>

        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
