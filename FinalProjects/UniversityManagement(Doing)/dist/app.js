"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./modules/User/user.route");
const globalErrorHandler_1 = require("./modules/helpers/ErrorHandlers/globalErrorHandler");
// import { globalErrorHandler } from "./modules/ErrorHandlers/globalErrorHandler";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/v1", user_route_1.UserRouter);
app.use(globalErrorHandler_1.globalErrorHandler);
exports.default = app;
