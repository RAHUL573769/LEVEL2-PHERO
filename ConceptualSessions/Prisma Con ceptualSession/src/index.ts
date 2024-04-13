import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { userRouter } from "./modules/User/user.route";
import { globalErrorHandler } from "./middlewares/errorMiddlewares";

app.use(cors());
app.use(express.json());

app.use("/api/v1", userRouter);
app.use(globalErrorHandler);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World From Prisma!");
});
export default app;
