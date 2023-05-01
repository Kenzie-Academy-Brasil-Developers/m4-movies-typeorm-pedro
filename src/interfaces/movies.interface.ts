import { z } from "zod";
import {
  moviesSchema,
  moviesCreateRequest,
  moviesUpdateRequest,
} from "../schemas";

type TMovies = z.infer<typeof moviesSchema>;

type TMoviesRequest = z.infer<typeof moviesCreateRequest>;

type TMoviesResponse = {};
