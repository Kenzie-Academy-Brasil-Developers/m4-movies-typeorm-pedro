import { z } from "zod";

const moviesSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().int(),
});

const moviesCreateRequest = moviesSchema.omit({ id: true });

const moviesUpdateRequest = moviesSchema.partial().omit({ id: true });

export { moviesSchema, moviesCreateRequest, moviesUpdateRequest };
