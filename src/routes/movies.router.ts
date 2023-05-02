import { Router } from "express";

import {
  ensureMovieExistsMiddleware,
  validateBodyMiddleware,
} from "../middlewares";
import { moviesCreateSchema, moviesUpdateSchema } from "../schemas";
import { moviesControllers } from "../controllers";

const moviesRouter: Router = Router();

moviesRouter.post(
  "",
  validateBodyMiddleware.body(moviesCreateSchema),
  ensureMovieExistsMiddleware.verify,
  moviesControllers.create
);

moviesRouter.get("");

moviesRouter.patch(
  "/:id",
  ensureMovieExistsMiddleware.verify,
  validateBodyMiddleware.body(moviesUpdateSchema)
);

moviesRouter.delete("/:id", ensureMovieExistsMiddleware.verify);

export default moviesRouter;
