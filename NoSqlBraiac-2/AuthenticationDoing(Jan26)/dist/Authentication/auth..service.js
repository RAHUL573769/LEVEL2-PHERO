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
exports.authServices = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const config_1 = __importDefault(require("../config"));
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const doRegister = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-unused-vars
    const result = yield user_model_1.default.create(Object.assign(Object.assign({}, data), { userStatus: 'active', role: 'user' }));
    return result;
});
// eslint-disable-next-line no-unused-vars
const doLogin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne(data);
    if (!user) {
        throw new Error('Invalid Credentials');
    }
    const payLoad = {
        email: user.email,
        role: user.role,
    };
    const token = jsonwebtoken_1.default.sign(payLoad, config_1.default.jwt_secret, {
        expiresIn: config_1.default.jwt_expires_in,
    });
    console.log(token);
    return token;
});
exports.authServices = {
    doRegister,
    doLogin,
};
