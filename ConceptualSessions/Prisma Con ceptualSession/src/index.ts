import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World From Prisma!");
});
export default app;
