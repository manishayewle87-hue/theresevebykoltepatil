"use client";

import { useState } from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function InvestmentDashboard() {
  const [amount, setAmount] = useState(25000000);
  const [downPayment, setDownPayment] = useState(20);
  const [years, setYears] = useState(10);
  const interest = 8.5; // fixed interest for simplicity
  const appreciationRate = 0.08; // 8% expected annual appreciation

  const principal = amount - (amount * (downPayment / 100));
  const r = interest / 12 / 100;
  const n = years * 12;
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPaid = (emi * n) + (amount * (downPayment / 100));

  // Generate chart data for appreciation vs cost over the tenure
  const data = Array.from({ length: years + 1 }).map((_, i) => {
    const currentYear = new Date().getFullYear() + i;
    const propertyValue = amount * Math.pow(1 + appreciationRate, i);
    const costPaid = (amount * (downPayment / 100)) + (emi * (i * 12));
    
    return {
      year: currentYear.toString(),
      "Property Value": Math.round(propertyValue),
      "Total Investment": Math.round(costPaid),
    };
  });

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="w-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Controls */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="font-sans font-bold text-3xl mb-2">ROI Calculator</h3>
            <p className="text-white/50 text-sm">Visualize your wealth generation over time.</p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <div className="flex justify-between mb-4 text-xs tracking-widest uppercase text-white/70">
                <span>Property Value</span>
                <span className="text-gradient-kp font-bold">{formatCurrency(amount)}</span>
              </div>
              <input type="range" min="10000000" max="100000000" step="1000000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-[#fe9a17]" />
            </div>
            
            <div>
              <div className="flex justify-between mb-4 text-xs tracking-widest uppercase text-white/70">
                <span>Down Payment</span>
                <span className="text-gradient-kp font-bold">{downPayment}%</span>
              </div>
              <input type="range" min="10" max="90" step="5" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full accent-[#fe9a17]" />
            </div>

            <div>
              <div className="flex justify-between mb-4 text-xs tracking-widest uppercase text-white/70">
                <span>Holding Period</span>
                <span className="text-gradient-kp font-bold">{years} Years</span>
              </div>
              <input type="range" min="5" max="25" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-[#fe9a17]" />
            </div>
          </div>
          
          <div className="flex justify-between items-center p-6 bg-black/40 rounded-2xl border border-white/5">
            <span className="text-white/60 text-sm tracking-widest uppercase">Est. Monthly EMI</span>
            <span className="text-3xl font-bold">{formatCurrency(emi)}</span>
          </div>
        </div>

        {/* Chart */}
        <div className="flex flex-col">
          <div className="mb-6 flex justify-between items-end">
            <div>
               <span className="text-white/50 text-xs uppercase tracking-widest block mb-2">Projected Value (10 Yrs)</span>
               <span className="text-4xl font-bold text-gradient-kp">{formatCurrency(data[data.length-1]["Property Value"])}</span>
            </div>
            <div className="text-right">
               <span className="text-white/50 text-xs uppercase tracking-widest block mb-2">Net Gain</span>
               <span className="text-xl font-bold text-green-400">+{formatCurrency(data[data.length-1]["Property Value"] - data[data.length-1]["Total Investment"])}</span>
            </div>
          </div>
          
          <div className="w-full h-[300px] mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fada09" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#fe9a17" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.2)" fontSize={10} tickMargin={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} 
                  itemStyle={{ color: '#fff', fontSize: '12px' }}
                  formatter={(value: any) => formatCurrency(Number(value))}
                />
                <Area type="monotone" dataKey="Property Value" stroke="#fe9a17" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                <Area type="monotone" dataKey="Total Investment" stroke="#ffffff" strokeWidth={1} fillOpacity={1} fill="url(#colorCost)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
