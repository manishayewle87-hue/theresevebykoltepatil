import Link from 'next/link';
import { getAllInsights } from '@/lib/mdx';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Insights & Market Reports | The Reserve',
  description: 'Read the latest insights on Pune luxury real estate, Sinhgad Road development, and ultra-premium lifestyle trends.',
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#151515] text-white pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-[#B28A4A] tracking-widest uppercase text-xs font-semibold mb-6 block">Market Intelligence</span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Insights &amp; Perspectives</h1>
            <p className="text-gray-400 font-light text-lg">
              Curated intelligence on ultra-luxury living, real estate investment trends, and the architectural renaissance of Sinhgad Road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {insights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group block">
                <article className="flex flex-col h-full border border-white/10 hover:border-[#B28A4A]/50 transition-colors bg-[#1a1a1a] overflow-hidden">
                  {insight.meta.coverImage && (
                    <div className="w-full h-64 overflow-hidden relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundImage: `url(${insight.meta.coverImage})` }}
                      ></div>
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[#B28A4A] text-xs font-bold tracking-widest uppercase mb-4">{new Date(insight.meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <h2 className="font-serif text-2xl mb-4 text-slate-100 group-hover:text-[#B28A4A] transition-colors">{insight.meta.title}</h2>
                    <p className="text-gray-400 font-light leading-relaxed flex-grow">{insight.meta.excerpt}</p>
                    <div className="mt-8 pt-6 border-t border-white/10 text-xs font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-white transition-colors flex items-center justify-between">
                      Read Article <span>&rarr;</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
