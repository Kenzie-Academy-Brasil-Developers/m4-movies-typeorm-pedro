import { Router } from "express";

import {
  ensureMovieExistsMiddleware,
  ensureMovieIsNotRegistedMiddleware,
  validateBodyMiddleware,
} from "../middlewares";
import { createMoviesSchema, updateMoviesSchema } from "../schemas";
import { moviesControllers } from "../controllers";

const moviesRouter: Router = Router();

moviesRouter.post(
  "",
  validateBodyMiddleware.body(createMoviesSchema),
  ensureMovieExistsMiddleware.verify,
  moviesControllers.create
);

moviesRouter.get("");

moviesRouter.patch(
  "/:id",
  ensureMovieExistsMiddleware.verify,
  validateBodyMiddleware.body(updateMoviesSchema),
  ensureMovieIsNotRegistedMiddleware.verify,
  moviesControllers.update
);

moviesRouter.delete(
  "/:id",
  ensureMovieExistsMiddleware.verify,
  moviesControllers.deleteMovies
);

export default moviesRouter;
