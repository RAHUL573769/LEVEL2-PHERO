"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/users", (req, res) => {
    console.log("Get Route Working");
});
router.post("/create-users", (req, res) => {
    console.log(req.body);
});
exports.userRouter = router;
