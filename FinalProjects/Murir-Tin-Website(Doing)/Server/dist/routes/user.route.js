"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRoute = express_1.default.Router();
userRoute.get("/", (req, res) => {
    res.status(200).json({
        message: "User Data Fetched",
        status: "success",
        data: [
            {
                name: "Rahul Rudra",
                email: "rahul@gmail.com"
            }
        ]
    });
});
userRoute.post("/create-user", user_controller_1.UserController.createUserController);
exports.UserRoute = userRoute;
