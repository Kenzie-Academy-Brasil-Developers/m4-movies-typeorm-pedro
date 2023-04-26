import { z } from "zod";

const moviesSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  duration: z.string(),
  price: z.string(),
});
