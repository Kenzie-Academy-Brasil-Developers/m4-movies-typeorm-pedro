import { z } from "zod";
import { moviesCreateSchema, moviesSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";

type TMovies = z.infer<typeof moviesSchema>;

type TMoviesCreate = z.infer<typeof moviesCreateSchema>;

type TMoviesUpdate = DeepPartial<Movie>;

type TMoviesRepository = Repository<Movie>;

export { TMovies, TMoviesCreate, TMoviesUpdate, TMoviesRepository };
