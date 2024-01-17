import express, { Request, Response } from "express";
import { UserRouter } from "./modules/User/user.route";
const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/v1", UserRouter);

export default app;
