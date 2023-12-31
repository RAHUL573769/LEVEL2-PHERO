import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/createRouter", UserRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
// console.log(process.cwd());
export default app;
