// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().transform(
      (date) => date.toISOString().split("T")[0] // Converts to 'YYYY-MM-DD'
    ),
    description: z.string(),
    summary: z.string().optional(),
    tags: z
      .array(z.enum(["social media", "blog", "museum", "history"]))
      .optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
