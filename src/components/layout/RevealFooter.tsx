"use client";

import Link from "next/link";
import { Button } from "../ui/Button";

export default function RevealFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[100vh] -z-10 bg-white flex flex-col justify-end overflow-hidden">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="object-cover w-full h-full opacity-30 grayscale"
        >
          <source src="https://player.vimeo.com/external/394627252.hd.mp4?s=d00e57262ba627d3568853c89657f8cfec47fb21&profile_id=174" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-[#0B2B1B]/95 to-[#0B2B1B]/40"></div>
      </div>

      <div className="relative z-20 w-full container mx-auto px-6 md:px-12 pb-12 pt-32 h-full flex flex-col justify-end">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col">
            <h2 className="font-serif text-3xl mb-2 tracking-widest uppercase text-white">The Reserve</h2>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37] mb-8 font-bold">By Kolte Patil</span>
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-xs">
              India's most premium real estate digital experience. Luxury living redefined in the heart of Pune.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">Explore</h3>
            <ul className="space-y-4 font-light text-sm text-white/80">
              <li><Link href="#overview" className="hover:text-[#d4af37] transition-colors">The Narrative</Link></li>
              <li><Link href="#master-plan" className="hover:text-[#d4af37] transition-colors">Masterplan</Link></li>
              <li><Link href="#amenities" className="hover:text-[#d4af37] transition-colors">The Privileges</Link></li>
              <li><Link href="#floor-plans" className="hover:text-[#d4af37] transition-colors">Residences</Link></li>
              <li><Link href="/insights" className="hover:text-[#d4af37] transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Contact */}
            <div className="text-right">
              <span className="font-serif text-xl text-white block mb-2">Connect</span>
              <ul className="space-y-1 font-sans text-xs text-white/60">
                <li>Sinhgad Road, Pune</li>
                <li>Maharashtra 411030</li>
                <li>MahaRERA: PM1261012600748</li>
                <li className="mt-4"><a href="mailto:sales@koltepatil.com" className="hover:text-[#d4af37] transition-colors">sales@koltepatil.com</a></li>
              </ul>
            </div>

          {/* CTA */}
          <div className="flex flex-col items-start">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">Exclusive Access</h3>
            <p className="text-sm text-white/60 font-light mb-6">
              Register your interest to receive exclusive details and floor plans.
            </p>
            <Button variant="golden" className="rounded-none px-8 w-full bg-[#d4af37] text-[#0B2B1B] hover:bg-white hover:text-[#0B2B1B]">
              Enquire Now
            </Button>
          </div>

        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} The Reserve by Kolte Patil.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#fd8e03] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#fd8e03] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
