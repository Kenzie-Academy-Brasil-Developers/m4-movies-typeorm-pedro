import { NextFunction, Request, Response } from "express";
import { TMoviesRepository } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

const verify = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const moviesRepository: TMoviesRepository =
    AppDataSource.getRepository(Movie);

  const movieExists = await moviesRepository.exist({
    where: {
      id: Number(req.params.id),
    },
  });

  if (!movieExists) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};

export default { verify };
