import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Premium Amenities | The Reserve by Kolte Patil, Sinhgad Road',
  description: 'Explore world-class amenities at The Reserve by Kolte Patil. Featuring a 21-acre landscape, riverside walkways, luxury clubhouse, and IGBC Platinum lifestyle.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/amenities',
  }
};

export default function AmenitiesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Pickleball Court" },
      { "@type": "ListItem", "position": 2, "name": "Riverside Walkway" },
      { "@type": "ListItem", "position": 3, "name": "Central Landscaped Boulevard" },
      { "@type": "ListItem", "position": 4, "name": "Luxury Clubhouse" }
    ]
  };

  return (
    <>
      <h1 className="sr-only">Ultra-Luxury Amenities at The Reserve by Kolte Patil Sinhgad Road</h1>
      <Script id="json-ld-amenities" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
