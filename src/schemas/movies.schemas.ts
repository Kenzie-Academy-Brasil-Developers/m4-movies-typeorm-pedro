import { z } from "zod";

const moviesSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().int(),
});

const createMoviesSchema = moviesSchema.omit({ id: true });

const updateMoviesSchema = moviesSchema.omit({ id: true }).partial();

const listMoviesSchema = moviesSchema.array();

export { moviesSchema, createMoviesSchema, updateMoviesSchema };
