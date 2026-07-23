import { getInsightBySlug, getAllInsights } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export async function generateStaticParams() {
  const posts = getAllInsights();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  try {
    const { meta } = getInsightBySlug(resolvedParams.slug);
    return {
      title: `${meta.title} | The Reserve Insights`,
      description: meta.excerpt,
    };
  } catch (e) {
    return {
      title: 'Insight Not Found',
    };
  }
}

export default async function InsightPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post;
  
  try {
    post = getInsightBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.meta.title,
    "datePublished": post.meta.date,
    "description": post.meta.excerpt,
    "image": post.meta.coverImage ? [post.meta.coverImage] : [],
    "author": [{
        "@type": "Organization",
        "name": "Kolte Patil Developers"
    }]
  };

  const components = {
    h1: (props: any) => <h1 className="font-serif text-4xl mt-12 mb-6 text-white" {...props} />,
    h2: (props: any) => <h2 className="font-serif text-3xl mt-10 mb-5 text-[#E6E0D4]" {...props} />,
    p: (props: any) => <p className="text-gray-300 font-light leading-relaxed mb-6 text-lg" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-6 text-gray-300 font-light" {...props} />,
    li: (props: any) => <li className="mb-2" {...props} />,
    a: (props: any) => <a className="text-[#B28A4A] hover:underline" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-2 border-[#B28A4A] pl-6 my-8 italic text-xl text-gray-400 font-serif" {...props} />,
  };

  return (
    <>
      <Script
        id={`json-ld-article-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#151515] text-white pt-32 pb-20">
        {post.meta.coverImage && (
          <div className="w-full h-[40vh] md:h-[60vh] relative mb-16">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.meta.coverImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent"></div>
          </div>
        )}
        
        <article className="container mx-auto px-6 md:px-12 max-w-4xl">
          <header className="mb-16 text-center">
            <span className="text-[#B28A4A] tracking-widest uppercase text-xs font-bold mb-6 block">
              {new Date(post.meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
              {post.meta.title}
            </h1>
          </header>
          
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>
          
          <hr className="border-white/10 my-16" />
          
          <div className="bg-[#1a1a1a] border border-white/5 p-12 text-center">
            <h3 className="font-serif text-3xl mb-4">Experience The Reserve</h3>
            <p className="text-gray-400 font-light mb-8 max-w-xl mx-auto">
              Discover the pinnacle of riverside luxury on Sinhgad Road. Schedule a private tour of our 2 & 3 BHK signature residences today.
            </p>
            <button className="px-8 py-4 bg-[#d4af37] text-slate-900 font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white transition-colors">
              Request VIP Access
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
