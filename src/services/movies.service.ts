import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  TMoviesCreate,
  TMoviesRepository,
  TMovies,
  TMoviesUpdate,
} from "../interfaces";
import { createMoviesSchema, moviesSchema } from "../schemas";

const create = async (payload: TMoviesCreate) => {
  const moviesRepository: TMoviesRepository =
    AppDataSource.getRepository(Movie);

  const movie: Movie = moviesRepository.create(payload);

  await moviesRepository.save(movie);

  return createMoviesSchema.parse(movie);
};

const update = async (
  movieId: number,
  payload: TMoviesUpdate
): Promise<TMovies> => {
  const moviesRepository: TMoviesRepository =
    AppDataSource.getRepository(Movie);

  const foundMovie = await moviesRepository.findOneBy({ id: movieId });

  const updatedMovie = moviesRepository.create({
    ...foundMovie,
    ...payload,
  });

  await moviesRepository.save(updatedMovie);

  const update = moviesSchema.parse(updatedMovie);

  return update;
};

const deleteMovies = async (movieId: number): Promise<void> => {
  const moviesRepository: TMoviesRepository =
    AppDataSource.getRepository(Movie);

  const movie = await moviesRepository.findOne({
    where: {
      id: movieId,
    },
  });

  await moviesRepository.remove(movie!);
};

export default { create, update, deleteMovies };
