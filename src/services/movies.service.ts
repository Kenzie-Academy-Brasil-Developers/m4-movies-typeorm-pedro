import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { TMoviesCreate, TMoviesRepository } from "../interfaces";
import { moviesCreateSchema } from "../schemas";

const create = async (payload: TMoviesCreate) => {
  const moviesRepository: TMoviesRepository =
    AppDataSource.getRepository(Movie);

  const movie: Movie = moviesRepository.create();

  await moviesRepository.save(movie);

  return moviesCreateSchema.parse(movie);
};

export default { create };
