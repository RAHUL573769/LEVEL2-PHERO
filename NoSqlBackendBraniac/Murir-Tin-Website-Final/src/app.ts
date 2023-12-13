import express, { Application, Request, Response } from "express";
import { UserRouter } from "./routes/user.route";
import cors from "cors";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/vi/users", UserRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
