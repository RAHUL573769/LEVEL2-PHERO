"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = require("./routes/userRouter");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/users", userRouter_1.userRotes);
app.use("/post", userRouter_1.userRotes);
app.use("/update", userRouter_1.userRotes);
app.use("/single", userRouter_1.userRotes);
// app.use("/", userRouter.getRoute);
// console.log(process.cwd());
exports.default = app;
