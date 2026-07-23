import React from 'react';

interface AISummaryBoxProps {
  summary: string;
  questions?: { q: string; a: string }[];
}

export default function AISummaryBox({ summary, questions }: AISummaryBoxProps) {
  return (
    <div className="bg-slate-900 border border-[#d4af37]/30 rounded-2xl p-6 md:p-8 my-8 shadow-2xl relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
        <span className="font-sans text-xs tracking-widest uppercase text-[#d4af37] font-bold">
          Quick Summary (AI Optimized)
        </span>
      </div>

      <p className="font-sans text-lg text-slate-200 leading-relaxed font-light mb-6">
        {summary}
      </p>

      {questions && questions.length > 0 && (
        <div className="border-t border-slate-800 pt-6 mt-6">
          <h4 className="font-serif text-2xl text-white mb-4">Key Answers</h4>
          <dl className="space-y-4">
            {questions.map((qa, idx) => (
              <div key={idx} className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                <dt className="font-sans font-bold text-[#d4af37] mb-2">{qa.q}</dt>
                <dd className="font-sans text-slate-400 font-light text-sm leading-relaxed">{qa.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
