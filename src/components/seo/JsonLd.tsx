import Script from 'next/script';

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://thereserve.koltepatil.digital/#organization",
        "name": "Kolte Patil Developers",
        "url": "https://thereserve.koltepatil.digital",
        "logo": "https://thereserve.koltepatil.digital/kolte-patil-logo.jpg",
        "image": "https://thereserve.koltepatil.digital/kolte-patil-logo.jpg",
        "description": "Premium real estate developer in Pune, delivering ultra-luxury residential projects.",
        "telephone": "+91-0000000000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sinhgad Road",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411030",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://thereserve.koltepatil.digital/#property",
        "name": "The Reserve by Kolte Patil",
        "description": "Experience ultra-premium luxury living at The Reserve by Kolte Patil in Sinhgad Road, Pune. Master-crafted 3, 4 & 5 BHK residences.",
        "url": "https://thereserve.koltepatil.digital",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sinhgad Road",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411030",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.4716",
          "longitude": "73.8344"
        },
        "telephone": "+91-0000000000",
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Infinity Pool",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Clubhouse",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "IGBC Platinum",
            "value": "True"
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="beforeInteractive"
    />
  );
}
