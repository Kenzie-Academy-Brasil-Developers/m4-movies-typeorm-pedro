import { Request, Response } from "express";
import moviesService from "../services/movies.service";
import { TMovies } from "../interfaces";

const create = async (req: Request, res: Response) => {
  const payload = req.body;

  const newMovie = await moviesService.create(payload);

  return res.status(201).json(newMovie);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const moviedId: number = Number(req.params.id);

  const payload = req.body;

  const updatedMovie: TMovies = await moviesService.update(moviedId, payload);

  return res.status(200).json(updatedMovie);
};

const deleteMovies = async (req: Request, res: Response) => {
  const moviedId: number = Number(req.params.id);

  const deletedMovie = await moviesService.deleteMovies(moviedId);

  return res.status(204).send();
};

export default { create, update, deleteMovies };
