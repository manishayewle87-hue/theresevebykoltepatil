import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Floor Plans | The Reserve by Kolte Patil",
  description: "View detailed floor plans for our 3 Bed and 4.5 Bed luxury residences at The Reserve, Pune.",
};

export default function FloorPlansPage() {
    const plans = [
    { title: "3 BHK Signature", area: "1,450 sq.ft", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
    { title: "4.5 BHK Penthouse", area: "2,200 sq.ft", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" },
  ];

  return (
    <>
      
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#151515] text-white">
        <section className="pt-40 pb-20 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Floor Plans</h1>
            <p className="max-w-2xl mx-auto text-gray-400 font-light text-lg">
              Meticulously crafted layouts designed for optimal space utilization, natural light, and cross-ventilation.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {plans.map((plan, idx) => (
                <div key={idx} className="flex flex-col border border-white/10 bg-slate-950/5 p-8 group hover:border-[#B28A4A] transition-colors duration-500">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="font-serif text-3xl">{plan.title}</h2>
                    <span className="text-[#B28A4A] tracking-widest uppercase text-xs">{plan.area}</span>
                  </div>
                  <div className="w-full h-[400px] bg-black/50 relative flex items-center justify-center overflow-hidden mb-8">
                     <p className="absolute text-gray-500 tracking-widest uppercase text-xs z-20">Confidential Floor Plan Layout</p>
                     <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm" style={{ backgroundImage: `url(${plan.image})` }}></div>
                  </div>
                  <Button variant="outline" className="w-full rounded-none border-white/20 hover:bg-slate-950 hover:text-black">
                    Request Detailed Layout
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
