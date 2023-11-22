import { Express, Request, Response } from "express";

const userRoutes = Express.Router();
const getRoute = (req: Request, res: Response) => {
  console.log("Hello World");
};

export default {
  getRoute
};
