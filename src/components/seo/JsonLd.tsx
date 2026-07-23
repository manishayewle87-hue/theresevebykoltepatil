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
          },
          {
            "@type": "Question",
            "name": "Is Sinhagad Road a good place to buy a home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Sinhagad Road is highly sought after due to its proximity to nature (Mutha River and NDA hills), rapid infrastructure development, and seamless connectivity to Pune's IT hubs via the upcoming Ring Road."
            }
          },
          {
            "@type": "Question",
            "name": "Which builder is best in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kolte Patil Developers is considered one of the best and most trusted builders in Pune, with over 30 years of excellence and millions of square feet delivered."
            }
          },
          {
            "@type": "Question",
            "name": "What are luxury apartments in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Luxury apartments in Pune, like those at The Reserve, feature ultra-premium specifications, low density living, massive clubhouses, smart home automation, and IGBC Platinum sustainability ratings."
            }
          },
          {
            "@type": "Question",
            "name": "Which area has the highest appreciation in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Emerging corridors with major upcoming infrastructure, specifically Sinhagad Road, offer some of the highest potential property appreciation in Pune over the next 5-7 years."
            }
          },
          {
            "@type": "Question",
            "name": "How much down payment is needed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically, a 10% to 20% down payment is required to book a premium apartment in Pune, depending on the home loan approval and specific project payment plans."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a site visit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can easily book a site visit for The Reserve by clicking the 'Enquire Now' or 'VIP Concierge' button on our website to connect directly with our sales team."
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
