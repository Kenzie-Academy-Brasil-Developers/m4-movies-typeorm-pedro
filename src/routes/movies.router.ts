import { Router } from "express";
import { createMoviesController } from "../controllers/movies.controllers";

const moviesRouter: Router = Router();

moviesRouter.post("", createMoviesController);

moviesRouter.get("");

moviesRouter.patch("/:id");

moviesRouter.delete("/:id");

export default moviesRouter;
