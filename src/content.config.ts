import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const technicalPosts = defineCollection({
  loader: glob({
    base: "./src/content/technical-posts",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tag: z.string(),
    draft: z.boolean().default(false),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  technicalPosts,
};
