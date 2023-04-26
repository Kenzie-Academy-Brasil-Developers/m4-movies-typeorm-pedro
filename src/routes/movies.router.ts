import { Router } from "express";
import { createMoviesController } from "../controllers/movies.controllers";

const moviesRouter: Router = Router();

moviesRouter.post("", createMoviesController);

export default moviesRouter;
