import { MetadataRoute } from 'next';
import { locationData, configData, investmentData } from '@/lib/seoData';
import { getAllInsights } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thereserve.koltepatil.digital';

  // 1. Core Static Pages
  const staticRoutes = [
    '',
    '/the-vision',
    '/the-club',
    '/the-residences',
    '/location',
    '/insights',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  // 2. Dynamic Location Micro-Market Pages
  const locationRoutes = Object.keys(locationData).map((market) => ({
    url: `${baseUrl}/location/${market}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3. Dynamic Configuration Pages
  const configRoutes = Object.keys(configData).map((config) => ({
    url: `${baseUrl}/the-residences/${config}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 4. Dynamic Investment Intent Pages
  const investmentRoutes = Object.keys(investmentData).map((intent) => ({
    url: `${baseUrl}/investment/${intent}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 5. Dynamic MDX Insight Articles
  const insights = getAllInsights();
  const insightRoutes = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.meta.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...locationRoutes,
    ...configRoutes,
    ...investmentRoutes,
    ...insightRoutes,
  ];
}
