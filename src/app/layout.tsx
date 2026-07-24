import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import GlobalCursor from "@/components/ui/GlobalCursor";
import { CursorProvider } from "@/context/CursorContext";
import { ConciergeProvider } from "@/context/ConciergeContext";
import ConciergePanel from "@/components/ui/ConciergePanel";
import FloatingAction from "@/components/ui/FloatingAction";
import AmbientAudio from "@/components/ui/AmbientAudio";
import Preloader from "@/components/ui/Preloader";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import JsonLd from "@/components/seo/JsonLd";
import LenisProvider from "@/components/ui/LenisProvider";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Script from "next/script";
import dynamic from 'next/dynamic';

const StickyCTA = dynamic(() => import('@/components/layout/StickyCTA'));
const WhatsAppWidget = dynamic(() => import('@/components/layout/WhatsAppWidget'));
const CommandPalette = dynamic(() => import('@/components/ui/CommandPalette'));

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
    default: "Luxury Apartments on Sinhagad Road | Premium 2 & 3 BHK | The Reserve by Kolte Patil",
    template: "%s | The Reserve by Kolte Patil",
  },
  description: "Discover luxury apartments on Sinhagad Road with thoughtfully designed homes, premium amenities, and excellent connectivity. Enquire today to learn more.",
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
  verification: {
    google: "_KeXkPdmvdlGxf7txGc-eGMTTLpaxsssiNgaIHAX_IA",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
      <head>
        <meta name="google-site-verification" content="_KeXkPdmvdlGxf7txGc-eGMTTLpaxsssiNgaIHAX_IA" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] selection:bg-[#d4af37] selection:text-white">
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        {process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        <JsonLd />
        <NoiseOverlay />
        <CursorProvider>
          <ConciergeProvider>
            <LenisProvider>
              <Preloader />
              <Breadcrumbs />
              <GlobalCursor />
              <AmbientAudio />
              <ConciergePanel />
              <FloatingAction />
              <Navbar />
              <div className="relative z-10 mb-[100svh] bg-[#0B2B1B] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden shadow-2xl">
                {children}
              </div>
              <RevealFooter />
            </LenisProvider>
          </ConciergeProvider>
        </CursorProvider>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        <StickyCTA />
        <WhatsAppWidget />
        <CommandPalette />
      </body>
    </html>
  );
}
