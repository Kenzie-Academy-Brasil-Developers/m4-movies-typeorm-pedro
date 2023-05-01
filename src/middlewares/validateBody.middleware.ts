import { NextFunction, Request, Response } from "express";
import { ZodAny } from "zod";

const validateBodyMiddleware =
  (schema: ZodAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validatedBody = schema.parse(req.body);

    req.body = validatedBody;

    return next();
  };

export default validateBodyMiddleware;
