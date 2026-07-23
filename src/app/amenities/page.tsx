import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

export const metadata = {
  title: "World-Class Amenities | The Reserve by Kolte Patil",
  description: "Experience luxury living with our curated world-class amenities including an infinity pool, private cinema, and wellness spa at The Reserve.",
};

export default function AmenitiesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Amenities at The Reserve",
    "description": "Experience luxury living with our curated world-class amenities.",
    "url": "https://thereservebykoltepatil.com/amenities"
  };

  const amenitiesList = [
    {
      category: "Wellness & Spa",
      items: [
        { name: "Infinity Edge Pool", desc: "Temperature-controlled pool with panoramic city views." },
        { name: "Holistic Spa", desc: "Therapy rooms, sauna, and steam facilities designed by wellness experts." },
        { name: "State-of-the-Art Gymnasium", desc: "Equipped with the latest Technogym apparatus and private training studios." }
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
    },
    {
      category: "Entertainment & Leisure",
      items: [
        { name: "Private Cinema", desc: "Acoustically treated screening room with plush seating for 20 guests." },
        { name: "The Reserve Club", desc: "An exclusive resident lounge featuring a curated library and cigar room." },
        { name: "Private Dining Area", desc: "A chef's kitchen and dining space for hosting intimate gatherings." }
      ],
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2574&auto=format&fit=crop"
    },
    {
      category: "Outdoor & Nature",
      items: [
        { name: "Zen Gardens", desc: "Meticulously landscaped Japanese-inspired gardens for meditation." },
        { name: "Sky Promenade", desc: "A 400ft high walkway connecting towers, featuring observation decks." },
        { name: "Kids' Play Sanctuary", desc: "Safe, interactive outdoor spaces designed for cognitive development." }
      ],
      image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=2574&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#151515] text-white">
        
        {/* Page Header */}
        <section className="pt-40 pb-20 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <span className="text-[#B28A4A] tracking-widest uppercase text-xs font-semibold mb-6 block">The Club</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight max-w-4xl mx-auto">
              A Life of <span className="italic font-light text-[#8C7853]">Unrivaled</span> Leisure
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 font-light text-lg">
              Spanning over 50,000 sq.ft., the amenities at The Reserve are designed to cater to every facet of your lifestyle, offering sanctuaries of wellness, entertainment, and nature.
            </p>
          </div>
        </section>

        {/* Amenities Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 flex flex-col gap-32">
            {amenitiesList.map((category, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-16 items-start">
                
                {/* Category Content */}
                <div className="w-full lg:w-1/3 sticky top-32">
                  <h2 className="font-serif text-3xl md:text-4xl mb-12 text-[#FAF8F3] border-l-2 border-[#B28A4A] pl-6">
                    {category.category}
                  </h2>
                  <div className="flex flex-col gap-10 pl-6">
                    {category.items.map((item, i) => (
                      <div key={i}>
                        <h3 className="text-xl font-medium tracking-wide mb-3 text-[#E6E0D4]">{item.name}</h3>
                        <p className="text-gray-400 font-light text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Image */}
                <div className="w-full lg:w-2/3 h-[500px] md:h-[800px] relative overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${category.image})` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
