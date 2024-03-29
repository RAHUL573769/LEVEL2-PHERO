import express from "express";
import { UserRoute } from "../modules/user/user.route";

const globalRouter = express.Router();

globalRouter.use("/users", UserRoute);

// const randomArray = [
//   {
//     path: "/users",
//     route: UserRoute
//   }
// ];

// randomArray.forEach((item) => {
//   globalRouter.use((item.path, item.route));
// });
export default globalRouter;
