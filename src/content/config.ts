import { defineCollection, z } from "astro:content";

const food = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    buy: z.object({
      col: z.string().url(),
      ve: z.string().url(),
    }),
  }),
});

export const collections = { food }