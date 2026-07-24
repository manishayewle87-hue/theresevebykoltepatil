import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'The Reserve Overview | Luxury Apartments on Sinhagad Road by Kolte Patil',
  description: 'Discover the philosophy behind The Reserve by Kolte Patil. A rare 21.03-acre riverside luxury real estate development on Sinhgad Road, Pune.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/overview',
  }
};

export default function OverviewLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Reserve by Kolte Patil",
    "description": "Discover the philosophy behind The Reserve by Kolte Patil. A rare 21.03-acre riverside luxury real estate development on Sinhgad Road, Pune.",
    "url": "https://thereserve.koltepatil.digital/overview"
  };

  return (
    <>
      <h1 className="sr-only">The Reserve by Kolte Patil Sinhgad Road - Overview</h1>
      <Script id="json-ld-overview" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
