import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoute } from "./modules/user/user.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/users", UserRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
