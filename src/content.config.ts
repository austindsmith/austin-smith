import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const POST_PATH = "src/data/posts";
export const GALLERY_PATH = "src/data/galleries";
export const PROJECT_PATH = "src/data/projects";

const post = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${POST_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDate: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const galleries = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: `./${GALLERY_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      draft: z.boolean().optional(),
      coverImage: image().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { post, galleries };
