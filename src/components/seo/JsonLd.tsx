import Script from 'next/script';

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thereserve.koltepatil.digital/#organization",
        "name": "Kolte-Patil Developers",
        "url": "https://thereserve.koltepatil.digital",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thereserve.koltepatil.digital/kolte-patil-logo.jpg",
          "caption": "Kolte-Patil Developers Logo"
        },
        "telephone": "+91-0000000000",
        "email": "sales@koltepatil.com",
        "description": "Pune's leading real estate developer with over 30 years of excellence.",
        "sameAs": [
          "https://www.facebook.com/KoltePatilDevelopers",
          "https://www.linkedin.com/company/kolte-patil-developers-ltd",
          "https://www.instagram.com/koltepatil"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://thereserve.koltepatil.digital/#website",
        "url": "https://thereserve.koltepatil.digital",
        "name": "The Reserve by Kolte Patil",
        "publisher": {
          "@id": "https://thereserve.koltepatil.digital/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://thereserve.koltepatil.digital/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://thereserve.koltepatil.digital/#localbusiness",
        "name": "The Reserve Sales Office",
        "image": "https://thereserve.koltepatil.digital/kolte-patil-logo.jpg",
        "telephone": "+91-0000000000",
        "parentOrganization": {
          "@id": "https://thereserve.koltepatil.digital/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "The Reserve Site, Sinhgad Road",
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
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "ContactPoint",
        "@id": "https://thereserve.koltepatil.digital/#contactpoint",
        "telephone": "+91-0000000000",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
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
