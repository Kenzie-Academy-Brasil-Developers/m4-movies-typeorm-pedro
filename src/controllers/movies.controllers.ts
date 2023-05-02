import { Request, Response } from "express";
import moviesService from "../services/movies.service";

const create = async (req: Request, res: Response) => {
  const payload = req.body;

  const newMovie = await moviesService.create(payload);

  return res.status(201).json(newMovie);
};

export default { create };
