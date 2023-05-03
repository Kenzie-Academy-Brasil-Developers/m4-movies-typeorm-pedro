import { z } from "zod";
import { createMoviesSchema, moviesSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";

type TMovies = z.infer<typeof moviesSchema>;

type TMoviesCreate = z.infer<typeof createMoviesSchema>;

type TMoviesUpdate = DeepPartial<Movie>;

type TMoviesRepository = Repository<Movie>;

interface IPagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Movie[];
}

export {
  TMovies,
  TMoviesCreate,
  TMoviesUpdate,
  TMoviesRepository,
  IPagination,
};
