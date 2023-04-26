import { Request, Response } from "express";

const createMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload = req.body;

  return res.json("deu bom");
};

export { createMoviesController };
