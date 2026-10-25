import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Links come from CMS-edited frontmatter; reject javascript:/data: etc. so a bad
// edit can't turn a button into a script.
const httpUrl = z.string().url().refine((u) => /^https?:\/\//i.test(u), 'Must be an http(s) URL');
const youtubeId = z.string().regex(/^[A-Za-z0-9_-]{11}$/, 'Must be an 11-character YouTube video ID');

// Shared fields used across games & software (anything "shippable")
const projectFields = {
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string(),
  description: z.string().optional(),
  pressSummary: z.string().optional(),
  pressUrl: httpUrl.optional(),
  genre: z.string().optional(),
  platforms: z.array(z.string()).default([]),
  status: z.enum(['Released', 'In Development', 'Unreleased']).default('In Development'),
  category: z.enum(['Other']).optional(),
  capsuleImage: z.string().optional(),
  heroImage: z.string().optional(),
  bgImage: z.string().optional(),
  storeUrl: httpUrl.optional(),
  itchUrl: httpUrl.optional(),
  youtubeId: youtubeId.optional(),
  youtubeIds: z.array(youtubeId).optional(),
  screenshots: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  featuredOrder: z.number().default(0),
  pressKitAvailable: z.boolean().default(false),
  draft: z.boolean().default(false),
};

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object(projectFields),
});

const software = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
  schema: z.object(projectFields),
});

const poems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/poems' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    venue: z.string().optional(),
    venueUrl: httpUrl.optional(),
    featured: z.boolean().default(false),
    featuredOrder: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    externalUrl: httpUrl.optional(),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    featuredOrder: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/press' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['Released', 'In Development']).default('In Development'),
    developer: z.string().default('Blu Cat Dev'),
    genre: z.string().optional(),
    platforms: z.string().optional(),
    releaseDate: z.string().optional(),
    price: z.string().optional(),
    engine: z.string().default('Unity'),
    downloadZipUrl: httpUrl.optional(),
    assets: z
      .array(
        z.object({
          label: z.string(),
          url: httpUrl,
        })
      )
      .default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { games, software, poems, blog, press };
