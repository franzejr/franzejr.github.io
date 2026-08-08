import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    lang: z.enum(['en', 'fr', 'pt-br']),
    translationId: z.string(),
    tags: z.array(z.string()).default([]),
    body: z.string(),
  }),
});

export const collections = { blog };
