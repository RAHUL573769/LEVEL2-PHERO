"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const user_model_1 = __importDefault(require("../models/user.model"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const users_constants_1 = require("../constants/users.constants");
// import { checkAuth } from '../middlewares/auth'
// import { checkAuth } from '../middlewares/auth'
const checkAuth = (...roles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        console.log(email, password, name);
        const user = yield user_model_1.default.findOne({ email, password });
        console.log(user);
        if (!user) {
            throw new Error('Invalid Email and Password');
        }
        if (roles.includes(user.role)) {
            throw new Error('You are not Authorizes Password');
        }
        next();
    }));
};
const router = express_1.default.Router();
router.post('/create-user', checkAuth(users_constants_1.USER_ROLE.admin, users_constants_1.USER_ROLE.user), user_controller_1.userController.createUser);
router.get('/', user_controller_1.userController.getAllUsers);
router.get('/:id', user_controller_1.userController.getSingleUser);
router.patch('/:id', user_controller_1.userController.updateUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
exports.userRoutes = router;
