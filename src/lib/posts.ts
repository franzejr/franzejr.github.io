import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

// entry.id is "<lang>/<slug>" because posts live in src/content/blog/<lang>/<slug>.yaml
export function slugOf(post: Post): string {
  return post.id.split('/').slice(1).join('/');
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
    const prefix = entry.data.lang === 'en' ? '' : `/${entry.data.lang}`;
    links[entry.data.lang] = `${prefix}/blog/${slugOf(entry)}/`;
  }
  return links;
}
