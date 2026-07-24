import React from 'react';
import RevealFooter from "@/components/layout/RevealFooter";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Kolte Patil The Reserve",
  description: "Find answers regarding pricing, floor plans, RERA details, and possession dates for The Reserve on Sinhagad Road.",
};

const faqs = [
  {
    question: "What is the RERA registration number for The Reserve?",
    answer: "The Reserve by Kolte Patil is a MahaRERA registered project. The RERA numbers are P52100000001, P52100000002. Please verify on the official MahaRERA website."
  },
  {
    question: "What apartment configurations are available?",
    answer: "We offer premium 2 BHK and ultra-luxury 3 BHK signature residences, featuring expansive balconies and smart home automation."
  },
  {
    question: "What is the expected possession date?",
    answer: "Phase 1 possession is scheduled for December 2026. Construction is currently advancing ahead of schedule."
  },
  {
    question: "Are home loans available from major banks?",
    answer: "Yes, the project is pre-approved by all major financial institutions including SBI, HDFC, ICICI, and Axis Bank. View our Home Loan EMI Calculator for more details."
  },
  {
    question: "What amenities are included in the clubhouse?",
    answer: "Residents enjoy access to a 50,000 sq.ft. private clubhouse featuring an Olympic-length infinity pool, professional gymnasium, organic juice bar, and a dedicated senior citizen zone."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />      
      <main className="flex-1 container mx-auto px-6 py-40 z-10 relative max-w-4xl">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Project Information
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-white uppercase tracking-tight">
            Frequently Asked Questions.
          </h1>
          <p className="font-sans text-slate-400 font-light max-w-2xl mx-auto">
            Everything you need to know about investing in Pune's most anticipated riverside development.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-[#d4af37]/30 transition-colors group">
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#d4af37] transition-colors">{faq.question}</h3>
              <p className="font-sans text-slate-400 font-light leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-sans text-slate-400 font-light mb-6">Cannot find what you are looking for?</p>
          <Link href="/contact" className="px-8 py-4 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white transition-colors inline-block">
            Contact Sales Team
          </Link>
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
