"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get("/users", (req, res) => {
    console.log("Get Route Working");
});
router.get("/get-users", user_controller_1.UserController.getUserController);
router.get("/search-users", user_controller_1.UserController.getSearchedUserController);
router.post("/create-users", user_controller_1.UserController.createUserController);
exports.userRouter = router;
