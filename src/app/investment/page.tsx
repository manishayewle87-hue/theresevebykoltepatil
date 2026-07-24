"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function InvestmentPage() {
  const [amount, setAmount] = useState(25000000);
  const [downPayment, setDownPayment] = useState(20);
  const [years, setYears] = useState(15);
  const [interest, setInterest] = useState(8.5);

  const principal = amount - (amount * (downPayment / 100));
  const r = interest / 12 / 100;
  const n = years * 12;
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <>      <main className="flex-1 w-full flex flex-col bg-[#FAF8F3]">
        <section className="pt-40 pb-20 px-6 md:px-12 bg-slate-950">
          <div className="container mx-auto text-center">
            <span className="text-[#B28A4A] tracking-widest uppercase text-xs font-semibold mb-6 block">Investment</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-[#151515]">
              A Legacy <span className="italic font-light text-gray-500">of Value</span>
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto bg-slate-950 p-10 shadow-2xl border border-gray-100">
              <h2 className="font-serif text-3xl mb-10 text-[#151515]">EMI Calculator</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-8">
                  <div>
                    <label className="text-sm tracking-widest uppercase text-gray-500 mb-4 block">Property Value: {formatCurrency(amount)}</label>
                    <input type="range" min="10000000" max="100000000" step="1000000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-[#B28A4A]" />
                  </div>
                  <div>
                    <label className="text-sm tracking-widest uppercase text-gray-500 mb-4 block">Down Payment: {downPayment}%</label>
                    <input type="range" min="10" max="90" step="5" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full accent-[#B28A4A]" />
                  </div>
                  <div>
                    <label className="text-sm tracking-widest uppercase text-gray-500 mb-4 block">Loan Tenure (Years): {years}</label>
                    <input type="range" min="5" max="30" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-[#B28A4A]" />
                  </div>
                  <div>
                    <label className="text-sm tracking-widest uppercase text-gray-500 mb-4 block">Interest Rate: {interest}%</label>
                    <input type="range" min="5" max="15" step="0.1" value={interest} onChange={(e) => setInterest(Number(e.target.value))} className="w-full accent-[#B28A4A]" />
                  </div>
                </div>

                <div className="bg-[#151515] p-10 text-white flex flex-col justify-center items-center text-center">
                  <span className="text-[#B28A4A] tracking-widest uppercase text-xs mb-4">Estimated Monthly EMI</span>
                  <div className="font-serif text-5xl mb-8">{formatCurrency(emi)}</div>
                  <div className="flex flex-col gap-2 text-sm text-gray-400 font-light mb-8">
                    <p>Loan Amount: {formatCurrency(principal)}</p>
                    <p>Down Payment: {formatCurrency(amount - principal)}</p>
                  </div>
                  <Button variant="golden" className="w-full rounded-none uppercase tracking-widest text-xs">Apply for Finance</Button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>    </>
  );
}
