"use client";

import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>      <main className="flex-1 w-full flex flex-col bg-[#FAF8F3]">
        <section className="pt-40 pb-20 px-6 md:px-12 bg-slate-950">
          <div className="container mx-auto text-center">
            <span className="text-[#B28A4A] tracking-widest uppercase text-xs font-semibold mb-6 block">Get in Touch</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-[#151515]">
              Schedule a <span className="italic font-light text-gray-500">Private Viewing</span>
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 justify-center">
            
            <div className="w-full max-w-xl bg-slate-950 p-12 shadow-2xl border border-gray-100">
              <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); window.location.href='/thank-you'; }}>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Full Name *</label>
                  <input type="text" required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#B28A4A] bg-transparent transition-colors" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Email Address *</label>
                  <input type="email" required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#B28A4A] bg-transparent transition-colors" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Phone Number *</label>
                  <input type="tel" required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#B28A4A] bg-transparent transition-colors" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Preferred Time to Call</label>
                  <input type="text" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#B28A4A] bg-transparent transition-colors" />
                </div>
                <Button variant="default" className="w-full mt-4 rounded-none h-14 text-sm tracking-widest uppercase">
                  Submit Enquiry
                </Button>
              </form>
            </div>

          </div>
        </section>
      </main>    </>
  );
}
