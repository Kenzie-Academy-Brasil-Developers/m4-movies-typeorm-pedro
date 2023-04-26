import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./error";
import moviesRouter from "./routes/movies.router";

const app: Application = express();
app.use(express.json());

app.use("/movies", moviesRouter);

app.use(handleErros);

export default app;
