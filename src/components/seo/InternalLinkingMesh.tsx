import React from 'react';
import Link from 'next/link';

interface LinkItem {
  title: string;
  url: string;
}

interface InternalLinkingMeshProps {
  title?: string;
  links: LinkItem[];
}

export default function InternalLinkingMesh({ title = "Explore Related Topics", links }: InternalLinkingMeshProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 my-12">
      <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-4">
        <span className="w-8 h-[1px] bg-[#d4af37]"></span>
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, idx) => (
          <Link 
            key={idx} 
            href={link.url}
            className="group flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-300"
          >
            <span className="font-sans text-sm text-slate-300 group-hover:text-[#d4af37] transition-colors line-clamp-1">
              {link.title}
            </span>
            <span className="text-[#d4af37] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
