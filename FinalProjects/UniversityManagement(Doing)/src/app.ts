import express, { Request, Response } from "express";
import { UserRouter } from "./modules/User/user.route";
import { globalErrorHandler } from "./modules/helpers/ErrorHandlers/globalErrorHandler";
// import { globalErrorHandler } from "./modules/ErrorHandlers/globalErrorHandler";
const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/v1", UserRouter);
app.use(globalErrorHandler);

export default app;
