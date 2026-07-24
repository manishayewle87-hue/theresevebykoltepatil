import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masterplan & Project Layout | The Reserve by Kolte Patil',
  description: 'Explore the 21.03-acre master layout of The Reserve. A meticulously planned luxury real estate development featuring a central boulevard and riverside exclusivity.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/master-layout',
  }
};

export default function MasterLayoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">21 Acre Master Layout - The Reserve by Kolte Patil Sinhgad Road</h1>
      {children}
    </>
  );
}
