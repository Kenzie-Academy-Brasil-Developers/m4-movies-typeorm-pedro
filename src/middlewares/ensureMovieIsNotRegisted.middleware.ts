import { NextFunction, Request, Response } from "express";
import { TMoviesRepository } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

const verify = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const moviesRepository: TMoviesRepository =
    AppDataSource.getRepository(Movie);

  const movieName = request.body.name;

  if (movieName) {
    const exists = await moviesRepository.exist({
      where: { name: movieName },
    });

    if (exists) {
      throw new AppError("Movie already exists.", 409);
    }
  }

  next();
};

export default { verify };
