"use client";

import React, { useState, useEffect } from 'react';
import RevealFooter from "@/components/layout/RevealFooter";
import { motion } from "framer-motion";
import Head from 'next/head';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(10000000); // 1 Cr
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);
  
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  useEffect(() => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = tenureYears * 12;

    if (P > 0 && R > 0 && N > 0) {
      const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(Math.round(emiCalc));
      setTotalInterest(Math.round((emiCalc * N) - P));
    } else {
      setEmi(0);
      setTotalInterest(0);
    }
  }, [loanAmount, interestRate, tenureYears]);

  const totalPayment = loanAmount + totalInterest;

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-white">
      <title>Home Loan EMI Calculator Pune | Kolte Patil The Reserve</title>
      <meta name="description" content="Calculate your home loan EMI instantly. Find out your monthly affordability for luxury apartments at The Reserve, Sinhagad Road." />      
      <main className="flex-1 container mx-auto px-6 py-40 z-10 relative max-w-5xl">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Interactive Tools
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-white uppercase tracking-tight">
            Smart EMI Calculator.
          </h1>
          <p className="font-sans text-slate-400 font-light max-w-2xl mx-auto">
            Plan your investment effortlessly. Calculate your monthly mortgage payments and discover which premium configuration at The Reserve matches your financial profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Controls */}
          <div className="md:col-span-7 bg-slate-900 border border-[#d4af37]/20 p-8 md:p-12 rounded-[2rem] shadow-2xl">
            
            <div className="mb-10">
              <label className="flex justify-between font-sans text-sm text-slate-400 uppercase tracking-widest mb-4">
                <span>Loan Amount</span>
                <span className="text-[#d4af37] font-bold">₹{(loanAmount / 100000).toFixed(2)} Lakhs</span>
              </label>
              <input 
                type="range" min="1000000" max="50000000" step="100000"
                value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
            </div>

            <div className="mb-10">
              <label className="flex justify-between font-sans text-sm text-slate-400 uppercase tracking-widest mb-4">
                <span>Interest Rate (P.A.)</span>
                <span className="text-[#d4af37] font-bold">{interestRate}%</span>
              </label>
              <input 
                type="range" min="5" max="15" step="0.1"
                value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
            </div>

            <div className="mb-10">
              <label className="flex justify-between font-sans text-sm text-slate-400 uppercase tracking-widest mb-4">
                <span>Loan Tenure</span>
                <span className="text-[#d4af37] font-bold">{tenureYears} Years</span>
              </label>
              <input 
                type="range" min="5" max="30" step="1"
                value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
            </div>

          </div>

          {/* Results Display */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            <motion.div 
              key={emi}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-900 border border-[#d4af37] p-8 rounded-[2rem] shadow-[0_0_30px_rgba(212,175,55,0.15)] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]"></div>
              <span className="font-sans text-[10px] tracking-widest uppercase text-slate-400 block mb-4">Monthly EMI</span>
              <h2 className="font-serif text-5xl text-white mb-2">₹{emi.toLocaleString('en-IN')}</h2>
            </motion.div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-slate-500 block mb-2">Principal</span>
                <span className="font-sans text-lg text-slate-200">₹{(loanAmount / 100000).toFixed(2)} L</span>
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-slate-500 block mb-2">Total Interest</span>
                <span className="font-sans text-lg text-slate-200">₹{(totalInterest / 100000).toFixed(2)} L</span>
              </div>
            </div>

            {/* Smart Conversion Suggestion */}
            <div className="bg-[#101015] border border-[#d4af37]/30 p-8 rounded-[2rem] text-center">
              <span className="font-sans text-[10px] tracking-widest uppercase text-[#d4af37] block mb-4 animate-pulse">Smart Match</span>
              <p className="font-sans text-sm text-slate-300 font-light mb-6">
                Based on your selected budget, you pre-qualify for our <strong>{loanAmount > 20000000 ? "Signature 3 BHK" : "Premium 2 BHK"}</strong> riverside residences.
              </p>
              <button className="w-full px-6 py-4 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white transition-colors">
                Lock VIP Price
              </button>
            </div>

          </div>

        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
