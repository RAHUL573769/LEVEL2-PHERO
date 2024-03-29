"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const globalRouter = express_1.default.Router();
globalRouter.use("/users", user_route_1.UserRoute);
// const randomArray = [
//   {
//     path: "/users",
//     route: UserRoute
//   }
// ];
// randomArray.forEach((item) => {
//   globalRouter.use((item.path, item.route));
// });
exports.default = globalRouter;
