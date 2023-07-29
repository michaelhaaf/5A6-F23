import { defineCollection } from "astro:content";
import { customSchema } from "@components/schema";

export const collections = {
  docs: defineCollection({ schema: customSchema() }),
};
