import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Prime Location on Sinhgad Road, Pune | The Reserve Connectivity',
  description: 'Discover the strategic location of The Reserve on Sinhgad Road, Pune. Seamless connectivity to the upcoming metro, Pune Ring Road, and city conveniences.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/location',
  }
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "The Reserve by Kolte Patil - Sinhgad Road",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sinhgad Road",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411030",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <h1 className="sr-only">Location & Connectivity - The Reserve by Kolte Patil, Sinhgad Road, Pune</h1>
      <Script id="json-ld-location" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
