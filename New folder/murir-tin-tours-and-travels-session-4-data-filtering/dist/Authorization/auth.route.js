"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
// import { userController } from '../controllers/user.controller'
// import { checkAuth } from '../middlewares/checkAuth'
// import User from '../models/user.model'
// import catchAsyncFunction from '../utils/catchAsync'
const router = express_1.default.Router();
router.post('/register', 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
auth_controller_1.authController.register);
router.post('/login', 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
auth_controller_1.authController.login);
// router.post(
//   '/login',
//   // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
//   authController.login,
// )
exports.authRoutes = router;
