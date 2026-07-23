import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import GlobalCursor from "@/components/ui/GlobalCursor";
import { CursorProvider } from "@/context/CursorContext";
import { ConciergeProvider } from "@/context/ConciergeContext";
import ConciergePanel from "@/components/ui/ConciergePanel";
import AmbientAudio from "@/components/ui/AmbientAudio";
import Preloader from "@/components/ui/Preloader";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Reserve by Kolte Patil | Luxury Residences in Pune",
  description: "India's most premium real estate digital experience. Explore the ultra-premium luxury residences at The Reserve by Kolte Patil in Sinhgad Road, Pune.",
  keywords: ["Luxury Real Estate", "Pune", "Kolte Patil", "The Reserve", "Premium Living", "Sinhgad Road"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] selection:bg-[#d4af37] selection:text-white">
        <NoiseOverlay />
        <CursorProvider>
          <ConciergeProvider>
            <Preloader />
            <GlobalCursor />
            <AmbientAudio />
            <ConciergePanel />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </ConciergeProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
