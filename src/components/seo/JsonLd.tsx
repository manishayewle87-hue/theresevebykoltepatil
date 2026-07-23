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
        "description": "Experience ultra-premium luxury living at The Reserve by Kolte Patil in Sinhgad Road, Pune. Master-crafted 2 & 3 BHK riverside residences.",
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
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://thereserve.koltepatil.digital/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thereserve.koltepatil.digital"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "The Residences",
            "item": "https://thereserve.koltepatil.digital/the-residences"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://thereserve.koltepatil.digital/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is The Reserve RERA registered?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The Reserve is registered under MahaRERA with Registration Number PM1261012600748."
            }
          },
          {
            "@type": "Question",
            "name": "What apartment configurations are available at The Reserve Sinhgad Road?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Reserve offers ultra-luxury 2 & 3 BHK riverside residences."
            }
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
