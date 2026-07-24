import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const insightsDirectory = path.join(process.cwd(), 'src/content/insights');
const guidesDirectory = path.join(process.cwd(), 'src/content/guides');
const compareDirectory = path.join(process.cwd(), 'src/content/compare');

export interface InsightFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  coverImage?: string;
  category?: string;
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
  return slugs
    .map((slug) => getInsightBySlug(slug))
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
}

// --- GUIDES ---
export function getGuideSlugs() {
  if (!fs.existsSync(guidesDirectory)) return [];
  return fs.readdirSync(guidesDirectory);
}

export function getGuideBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(guidesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data as InsightFrontmatter, content };
}

export function getAllGuides() {
  return getGuideSlugs().map(getGuideBySlug).sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
}

// --- COMPARE ---
export function getCompareSlugs() {
  if (!fs.existsSync(compareDirectory)) return [];
  return fs.readdirSync(compareDirectory);
}

export function getCompareBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(compareDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data as InsightFrontmatter, content };
}

export function getAllCompares() {
  return getCompareSlugs().map(getCompareBySlug).sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
}
