import express from "express";
import { UserRoutes } from "./user.routes";
import { TourRoutes } from "./tour.route";
import { ReviewRoutes } from "./review.route";

export const globalRouter = express.Router();

const randomArray = [
  {
    path: "/users",
    route: UserRoutes
  },
  {
    path: "/tours",
    route: TourRoutes
  },
  {
    path: "/reviews",
    route: ReviewRoutes
  }
];

randomArray.forEach((routerObj: any) => {
  // globalRouter.use("/users", UserRoutes);
  globalRouter.use(routerObj.path, routerObj.route);
});

// globalRouter.use("/api/v1/tours", TourRoutes);
// globalRouter.use("/api/v1/reviews", ReviewRoutes);
