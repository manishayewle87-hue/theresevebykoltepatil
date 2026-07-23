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
import JsonLd from "@/components/seo/JsonLd";

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
  metadataBase: new URL('https://thereserve.koltepatil.digital'),
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital',
  },
  title: {
    default: "The Reserve by Kolte Patil | Ultra-Luxury Residences, Sinhgad Road, Pune",
    template: "%s | The Reserve by Kolte Patil, Sinhgad Road",
  },
  description: "Experience ultra-premium luxury living at The Reserve by Kolte Patil in Sinhgad Road, Pune. Master-crafted 2 & 3 BHK riverside residences designed for the discerning few.",
  keywords: ["Luxury Real Estate Pune", "Sinhgad Road Properties", "Kolte Patil Sinhgad Road", "The Reserve", "Premium Living Pune", "IGBC Platinum"],
  authors: [{ name: "Kolte Patil Developers" }],
  creator: "Kolte Patil",
  publisher: "Kolte Patil",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thereserve.koltepatil.digital",
    title: "The Reserve by Kolte Patil | Ultra-Luxury Residences, Sinhgad Road",
    description: "Experience ultra-premium luxury living at The Reserve by Kolte Patil in Sinhgad Road, Pune.",
    siteName: "The Reserve by Kolte Patil",
    images: [
      {
        url: "/kolte-patil-logo.jpg",
        width: 1200,
        height: 630,
        alt: "The Reserve by Kolte Patil, Sinhgad Road",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Reserve by Kolte Patil | Sinhgad Road, Pune",
    description: "Experience ultra-premium luxury living at The Reserve by Kolte Patil in Sinhgad Road, Pune.",
    images: ["/kolte-patil-logo.jpg"],
    creator: "@koltepatil",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <JsonLd />
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
