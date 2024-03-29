import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { UserRoute } from "./modules/user/user.route";
import { globalErrorHandler } from "./ErrorHandlers/globalErrorHandler";
import { notFound } from "./middlewares/notFound";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/users", UserRoute);
//no Found
app.use(notFound);
//global error handler

app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
