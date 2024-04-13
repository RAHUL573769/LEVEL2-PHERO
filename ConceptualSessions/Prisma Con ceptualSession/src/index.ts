import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { userRouter } from "./modules/User/user.route";

app.use(cors());
app.use(express.json());

app.use("/api/v1", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World From Prisma!");
});
export default app;
