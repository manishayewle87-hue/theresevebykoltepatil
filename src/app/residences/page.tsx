import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Luxury Residences | The Reserve by Kolte Patil",
  description: "Explore the expansive 3 & 4.5 BHK luxury residences at The Reserve. Discover floor plans, premium specifications, and an elevated lifestyle in Pune.",
};

export default function ResidencesPage() {
    const residences = [
    {
      id: "3bhk",
      type: "3 Bed Residences",
      title: "The Signature Suite",
      carpetArea: "1,450 sq.ft.",
      desc: "Designed for modern families, these residences feature expansive living areas, wrap-around balconies, and floor-to-ceiling windows that invite natural light.",
      features: ["Private Foyer", "Walk-in Wardrobe", "Smart Home Automation", "Premium Italian Marble"],
      image: "https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
    },
    {
      id: "4bhk",
      type: "4.5 Bed Residences",
      title: "The Grand Penthouse",
      carpetArea: "2,200 sq.ft.",
      desc: "The pinnacle of luxury living. A sprawling layout featuring dual master suites, a private study, and an ultra-premium kitchen designed for culinary excellence.",
      features: ["Private Elevator Access", "Plunge Pool Option", "Staff Quarters", "Panoramic Views"],
      image: "https://www.koltepatil.com/assets/uploads/gallery/17847871871558473491.jpg"
    }
  ];

  return (
    <>      <main className="flex-1 w-full flex flex-col bg-[#FAF8F3]">
        
        {/* Page Header */}
        <section className="pt-40 pb-20 px-6 md:px-12 bg-[#151515] text-white">
          <div className="container mx-auto">
            <span className="text-[#B28A4A] tracking-widest uppercase text-xs font-semibold mb-6 block">Residences</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              Spaces Designed <br />
              <span className="italic font-light text-gray-400">for Greatness</span>
            </h1>
            <p className="max-w-2xl text-gray-300 font-light text-lg">
              Every home at The Reserve is a masterpiece of architectural precision. Discover our carefully curated collection of 3 and 4.5 bedroom luxury residences.
            </p>
          </div>
        </section>

        {/* Residences Listing */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12 flex flex-col gap-32">
            {residences.map((res, index) => (
              <div key={res.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                
                {/* Image side */}
                <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] group overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                  {/* Using next/image requires configuring remote patterns. Since we bypass sandbox for dev, let's stick to standard img or styled div for simplicity if domains aren't configured, but standard img works too */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${res.image})` }}
                  ></div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <span className="text-[#8C7853] tracking-[0.2em] uppercase text-xs font-semibold mb-4">{res.type}</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-[#151515] mb-6">{res.title}</h2>
                  <p className="text-2xl font-light text-gray-500 mb-8">{res.carpetArea} Carpet</p>
                  
                  <p className="text-gray-600 font-light text-lg mb-10 leading-relaxed max-w-lg">
                    {res.desc}
                  </p>
                  
                  <div className="mb-12">
                    <h3 className="text-sm uppercase tracking-widest text-[#151515] font-medium mb-6">Signature Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {res.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 font-light text-sm before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#B28A4A] before:rounded-full before:mr-3">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="default" className="rounded-none uppercase tracking-widest text-xs px-10">
                      View Floor Plan
                    </Button>
                    <Button variant="outline" className="rounded-none uppercase tracking-widest text-xs border-gray-300 text-gray-600 hover:border-black hover:text-black">
                      Enquire Now
                    </Button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>
        
      </main>    </>
  );
}
