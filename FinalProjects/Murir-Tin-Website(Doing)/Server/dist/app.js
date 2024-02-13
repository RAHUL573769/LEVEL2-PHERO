"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./routes/user.route");
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", user_route_1.UserRoute);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome TO murir tin website",
        status: "success"
    });
});
exports.default = app;
