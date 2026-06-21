import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared fields used across games & software (anything "shippable")
const projectFields = {
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string(),
  description: z.string().optional(),
  genre: z.string().optional(),
  platforms: z.array(z.string()).default([]),
  status: z.enum(['Released', 'In Development', 'Unreleased']).default('In Development'),
  category: z.enum(['Jam', 'Experiment', 'Project']).optional(),
  capsuleImage: z.string().optional(),
  bgImage: z.string().optional(),
  storeUrl: z.string().optional(),
  itchUrl: z.string().optional(),
  youtubeId: z.string().optional(),
  featured: z.boolean().default(false),
  featuredOrder: z.number().default(0),
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
    venueUrl: z.string().optional(),
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
    externalUrl: z.string().optional(),
    coverImage: z.string().optional(),
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
    downloadZipUrl: z.string().optional(),
    assets: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { games, software, poems, blog, press };
