import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Specifications | Premium Quality Homes at The Reserve Pune',
  description: 'Review the high-end project specifications of The Reserve by Kolte Patil. Uncompromising quality with imported marble, premium fittings, and digital security.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/specifications',
  }
};

export default function SpecificationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Luxury Project Specifications - The Reserve Sinhgad Road</h1>
      {children}
    </>
  );
}
