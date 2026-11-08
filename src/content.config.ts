/**
 * Content model. Mirrors the "CMS templates, blocks & fields" board:
 * the collections below map to its collections, and the `blocks` union maps
 * to its block library. A CMS (Decap, Sveltia, SeeCMS…) can be added later
 * against these same fields.
 */
import { defineCollection, reference, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

/** An image slot. `placeholder` is shown until `src` is added. */
const image = z.object({
  alt: z.string(),
  placeholder: z.string(),
  src: z.string().optional(),
  caption: z.string().optional(),
});

/** A subheading with optional intro paragraphs, a bullet list, and a closing note. */
const subsection = z.object({
  heading: z.string(),
  body: z.array(z.string()).default([]),
  list: z.array(z.string()).default([]),
  note: z.string().optional(),
});

/** Block library (B02, B03, B11–B17 on the board). Section numbers are generated from order. */
const block = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('stats'),
    label: z.string(),
    heading: z.string(),
    items: z.array(z.object({ value: z.string(), caption: z.string() })).min(2).max(4),
    note: z.string().optional(),
  }),
  z.object({
    type: z.literal('bars'),
    caption: z.string(),
    headline: z.string(),
    bars: z
      .array(z.object({ label: z.string(), note: z.string(), percent: z.number().min(1).max(100) }))
      .min(2)
      .max(3),
  }),
  z.object({
    type: z.literal('media'),
    frame: z.enum(['none', 'browser', 'phone']).default('browser'),
    address: z.string().optional(),
    items: z.array(image).min(1).max(3),
  }),
  z.object({
    type: z.literal('text'),
    label: z.string(),
    heading: z.string(),
    body: z.array(z.string()).default([]),
    subsections: z.array(subsection).default([]),
    tags: z.array(z.string()).default([]),
    surface: z.boolean().default(false),
  }),
  z.object({
    type: z.literal('steps'),
    label: z.string(),
    heading: z.string(),
    steps: z.array(z.object({ title: z.string(), text: z.string() })).min(2).max(6),
    surface: z.boolean().default(false),
  }),
  z.object({
    type: z.literal('images'),
    items: z.array(image).length(2),
  }),
  z.object({
    type: z.literal('feature'),
    label: z.string(),
    status: z.enum(['live', 'prototype']).optional(),
    heading: z.string(),
    sections: z.array(subsection).min(1),
    tech: z.string().optional(),
    link: z.object({ label: z.string(), href: z.string() }).optional(),
    media: image.extend({ address: z.string().optional() }),
    mediaSide: z.enum(['left', 'right']).default('left'),
    surface: z.boolean().default(false),
  }),
  z.object({
    type: z.literal('cards'),
    label: z.string(),
    heading: z.string(),
    cards: z
      .array(z.object({ title: z.string(), text: z.string(), highlight: z.boolean().default(false) }))
      .min(2)
      .max(8),
    surface: z.boolean().default(false),
  }),
  z.object({
    type: z.literal('tags'),
    tags: z.array(z.string()).min(1),
  }),
]);

export type Block = z.infer<typeof block>;

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    lede: z.string(),
    order: z.number(),
    featured: z.boolean().default(true),
    card: z.object({
      summary: z.string(),
      meta: z.string(),
      tag: z.string(),
      tagTone: z.enum(['c', 'm']).default('c'),
      image,
    }),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).min(2).max(4),
    footnote: z.string().optional(),
    blocks: z.array(block),
    cta: z.object({
      heading: z.string(),
      label: z.string().default('hello@robertwood.me'),
      href: z.string().default('mailto:hello@robertwood.me'),
    }),
    seoDescription: z.string().optional(),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    lede: z.string(),
    cardSummary: z.string(),
    order: z.number(),
    icon: z.enum(['viewport', 'images', 'guides']),
    version: z.string(),
    licence: z.string().default('MIT'),
    shortcut: z.string().optional(),
    install: z.string().url(),
    source: z.string().url().default('https://github.com/cubik73/Tampermonkey-Scripts/'),
    screenshot: image,
    check: z.object({ heading: z.string(), body: z.string() }),
    features: z.array(z.object({ title: z.string(), text: z.string() })).min(3).max(6),
    steps: z.array(z.string()).min(3).max(5),
    hood: z.string(),
    tags: z.array(z.string()).default([]),
    related: reference('caseStudies').optional(),
  }),
});

const experience = defineCollection({
  loader: file('src/data/experience.json'),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string().optional(),
    summary: z.string(),
    main: z.boolean().default(true),
    order: z.number(),
  }),
});

export const collections = { caseStudies, tools, experience };
