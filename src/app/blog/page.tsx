import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Insights & Lifestyle | The Reserve by Kolte Patil",
  description: "Read our latest articles on luxury living, architecture, and real estate investment in Pune.",
};

export default function BlogPage() {
  const posts = [
    { title: "Why Sinhgad Road is Pune's Next Luxury Corridor", category: "Location", date: "Oct 12, 2026" },
    { title: "The Evolution of Bespoke Amenities in Modern Real Estate", category: "Lifestyle", date: "Oct 05, 2026" },
    { title: "A Guide to Real Estate Investment for NRIs", category: "Investment", date: "Sep 28, 2026" },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#FAF8F3]">
        <section className="pt-40 pb-20 px-6 md:px-12 bg-slate-950">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-[#151515]">
              Editorial <span className="italic font-light text-gray-500">& Insights</span>
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {posts.map((post, i) => (
                <article key={i} className="flex flex-col group cursor-pointer">
                  <div className="w-full h-[300px] bg-gray-200 mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gray-300 transition-transform duration-700 group-hover:scale-105"></div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#B28A4A] tracking-widest uppercase text-[10px] font-semibold">{post.category}</span>
                    <span className="text-gray-400 text-[10px] uppercase tracking-widest">{post.date}</span>
                  </div>
                  <h2 className="font-serif text-2xl text-[#151515] group-hover:text-[#B28A4A] transition-colors">{post.title}</h2>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
