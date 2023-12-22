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
exports.checkAuth = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const user_model_1 = __importDefault(require("../models/user.model"));
const checkAuth = (roles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(roles);
        const email = req.body.email;
        //   console.log(req.body)
        const user = yield user_model_1.default.findOne({ email });
        // console.log(user?.role)
        if (!user) {
            throw new Error('User Not FOUND');
        }
        if (roles.includes(user === null || user === void 0 ? void 0 : user.role)) {
            // next(new Error('Invalid User.You Caanot change data'))
            throw new Error('Invalid User ..You Caanot ');
        }
        next();
    }));
};
exports.checkAuth = checkAuth;
