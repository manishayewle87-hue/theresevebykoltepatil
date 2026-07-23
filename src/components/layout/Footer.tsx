import Link from "next/link";
import { Button } from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-[#FAF8F3] pt-24 pb-12 border-t border-[#B28A4A]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="flex flex-col">
            <h2 className="font-serif text-3xl mb-2 tracking-widest uppercase text-white">The Reserve</h2>
            <span className="text-xs tracking-[0.2em] uppercase text-[#8C7853] mb-8">By Kolte Patil</span>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">
              India&apos;s most premium real estate digital experience. Luxury living redefined in the heart of Pune.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-sm uppercase tracking-widest text-[#B28A4A] mb-8 font-medium">Explore</h3>
            <ul className="space-y-4 font-light text-sm text-gray-300">
              <li><Link href="#project" className="hover:text-white transition-colors">The Project</Link></li>
              <li><Link href="#residences" className="hover:text-white transition-colors">Residences</Link></li>
              <li><Link href="#amenities" className="hover:text-white transition-colors">Amenities</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="text-sm uppercase tracking-widest text-[#B28A4A] mb-8 font-medium">Contact</h3>
            <ul className="space-y-4 font-light text-sm text-gray-300">
              <li>Sinhgad Road, Pune,</li>
              <li>Maharashtra, India</li>
              <li className="pt-4">
                <a href="tel:+910000000000" className="hover:text-white transition-colors">+91 000 000 0000</a>
              </li>
              <li>
                <a href="mailto:info@thereserve.com" className="hover:text-white transition-colors">info@thereserve.com</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start">
            <h3 className="text-sm uppercase tracking-widest text-[#B28A4A] mb-8 font-medium">Exclusive Access</h3>
            <p className="text-sm text-gray-400 font-light mb-6">
              Register your interest to receive exclusive details and floor plans.
            </p>
            <Button variant="golden" className="rounded-none px-8 w-full">
              Register Interest
            </Button>
          </div>

        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} The Reserve by Kolte Patil. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
