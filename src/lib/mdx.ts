import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const insightsDirectory = path.join(process.cwd(), 'src/content/insights');

export interface InsightFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  coverImage?: string;
}

export function getInsightSlugs() {
  if (!fs.existsSync(insightsDirectory)) {
    return [];
  }
  return fs.readdirSync(insightsDirectory);
}

export function getInsightBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(insightsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data as InsightFrontmatter,
    content,
  };
}

export function getAllInsights() {
  const slugs = getInsightSlugs();
  const insights = slugs
    .map((slug) => getInsightBySlug(slug))
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
  return insights;
}
