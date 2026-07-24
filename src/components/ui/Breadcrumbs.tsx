"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter(Boolean);
  
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thereserve.koltepatil.digital"
      },
      ...paths.map((path, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        "item": `https://thereserve.koltepatil.digital/${paths.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <nav aria-label="Breadcrumb" className="w-full max-w-7xl mx-auto px-6 pt-24 absolute top-0 left-0 right-0 z-40 hidden md:block">
        <ol className="flex items-center space-x-2 text-xs font-sans tracking-wider uppercase text-slate-400">
          <li>
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
          </li>
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;
            const label = path.replace(/-/g, ' ');

            return (
              <li key={path} className="flex items-center space-x-2">
                <span className="text-slate-600">/</span>
                {isLast ? (
                  <span className="text-white font-medium truncate max-w-[200px]" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-[#d4af37] transition-colors truncate max-w-[150px]">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
