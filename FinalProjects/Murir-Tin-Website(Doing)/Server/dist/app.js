"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
app.use("/all-users", userRoute);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome TO murir tin website",
        status: "success"
    });
});
exports.default = app;
