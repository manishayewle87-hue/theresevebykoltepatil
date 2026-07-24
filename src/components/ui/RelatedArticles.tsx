import Link from "next/link";
import { InsightFrontmatter } from "@/lib/mdx";

export default function RelatedArticles({ articles, title = "Further Reading" }: { articles: InsightFrontmatter[], title?: string }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-24 pt-16 border-t border-slate-800">
      <div className="flex items-center justify-between mb-12">
        <h3 className="font-serif text-3xl text-white">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link 
            href={`/insights/${article.slug}`} 
            key={article.slug}
            className="group block"
          >
            <div className="bg-slate-900 border border-slate-800 p-6 h-full flex flex-col justify-between hover:border-[#d4af37]/30 transition-colors">
              <div>
                <span className="text-[#d4af37] font-sans text-xs uppercase tracking-widest block mb-3">
                  {article.category || 'Insights'}
                </span>
                <h4 className="font-serif text-xl text-white mb-4 group-hover:text-[#d4af37] transition-colors leading-snug">
                  {article.title}
                </h4>
              </div>
              
              <div className="flex items-center justify-between text-slate-500 font-sans text-sm mt-8 border-t border-slate-800/50 pt-4">
                <span>{article.date}</span>
                <span className="group-hover:text-[#d4af37] transition-colors">Read Article &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
