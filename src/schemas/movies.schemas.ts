import { z } from "zod";

const moviesSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().int(),
});

const moviesCreateSchema = moviesSchema.omit({ id: true });

const moviesUpdateSchema = moviesSchema.omit({ id: true }).partial();

export { moviesSchema, moviesCreateSchema, moviesUpdateSchema };
