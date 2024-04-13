"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./modules/User/user.route");
const errorMiddlewares_1 = require("./middlewares/errorMiddlewares");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1", user_route_1.userRouter);
app.use(errorMiddlewares_1.globalErrorHandler);
app.get("/", (req, res) => {
    res.send("Hello World From Prisma!");
});
exports.default = app;
