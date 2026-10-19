import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

// entry.id is "<lang>/<slug>" because posts live in src/content/blog/<lang>/<slug>.yaml
export function slugOf(post: Post): string {
  return post.id.split('/').slice(1).join('/');
}

export function postHref(post: Post): string {
  const prefix = post.data.lang === 'en' ? '' : `/${post.data.lang}`;
  return `${prefix}/blog/${slugOf(post)}/`;
}

export async function getPostsByLang(lang: Lang): Promise<Post[]> {
  const posts = await getCollection('blog', (post) => post.data.lang === lang);
  return posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export async function getPostByLangAndSlug(lang: Lang, slug: string): Promise<Post | undefined> {
  const posts = await getCollection('blog', (post) => post.data.lang === lang);
  return posts.find((post) => slugOf(post) === slug);
}

// Build language-switcher links for a single post: same slug if a translation
// exists, otherwise fall back to that language's blog index.
export async function getPostLangLinks(post: Post): Promise<Partial<Record<Lang, string>>> {
  const allPosts = await getCollection(
    'blog',
    (entry) => entry.data.translationId === post.data.translationId,
  );
  const links: Partial<Record<Lang, string>> = {};
  for (const entry of allPosts) {
    links[entry.data.lang] = postHref(entry);
  }
  return links;
}

// Newer and older neighbours of a post within its language, by publish date.
export async function getAdjacentPosts(
  post: Post,
): Promise<{ newer?: Post; older?: Post }> {
  const posts = await getPostsByLang(post.data.lang);
  const index = posts.findIndex((entry) => entry.id === post.id);
  return { newer: posts[index - 1], older: posts[index + 1] };
}

export function readingTime(post: Post): number {
  const words = post.data.body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(date: Date, lang: Lang): string {
  // Dates in the YAML front matter are parsed as UTC midnight; format them in
  // UTC too so the day never shifts with the build machine's timezone.
  return date.toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

// Group posts (already sorted newest first) by publication year.
export function groupByYear(posts: Post[]): { year: number; posts: Post[] }[] {
  const groups: { year: number; posts: Post[] }[] = [];
  for (const post of posts) {
    const year = post.data.publishDate.getUTCFullYear();
    const last = groups[groups.length - 1];
    if (last && last.year === year) last.posts.push(post);
    else groups.push({ year, posts: [post] });
  }
  return groups;
}
