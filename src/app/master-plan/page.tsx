import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Interactive Master Plan | The Reserve by Kolte Patil",
  description: "Explore the meticulously designed 50-acre master plan of The Reserve. Discover towers, landscaping, and world-class amenities.",
};

export default function MasterPlanPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Master Plan - The Reserve",
    "description": "Explore the meticulously designed 50-acre master plan of The Reserve."
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#FAF8F3]">
        <section className="pt-40 pb-20 px-6 md:px-12 bg-slate-950">
          <div className="container mx-auto text-center">
            <span className="text-[#B28A4A] tracking-widest uppercase text-xs font-semibold mb-6 block">Master Plan</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-[#151515]">
              A Vision of <span className="italic font-light text-gray-500">Scale & Serenity</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 font-light text-lg">
              Navigate through our interactive master plan to discover how architecture and nature intertwine to create the perfect living ecosystem.
            </p>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="w-full h-[600px] md:h-[800px] bg-gray-200 relative group overflow-hidden flex items-center justify-center">
              {/* Stylized Master Plan Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Interactive Hotspots Placeholder */}
              <div className="relative z-10 flex flex-col items-center">
                <Button variant="golden" className="shadow-2xl mb-4">Explore Interactive Map</Button>
                <p className="text-white text-sm uppercase tracking-widest">Hover over towers for details</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
