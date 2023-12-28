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
const hashPassword_1 = require("../HelpingFoldder/hashPassword");
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = await User.findOne(payload)
    //After adding argon3 changed to email:password.emil
    const user = yield user_model_1.default.findOne({ email: payload.email }).select('+password');
    if (!user) {
        throw new Error('Invalid Creddentials');
    }
    console.log(user);
    const jwtPayLoad = {
        email: user.email,
        role: user.role,
    };
    const password = payload.password;
    const hashedPassword = yield (0, hashPassword_1.hashPassord)(password);
    if (!hashPassword_1.hashPassord) {
        throw new Error('Caanot ');
    }
    const isCorrectPasword = yield (0, hashPassword_1.verifyPassword)(hashedPassword, password);
    console.log(isCorrectPasword);
    const token = jsonwebtoken_1.default.sign(jwtPayLoad, 'tour-secret', {
        expiresIn: '10d',
    });
    //   return null
    return { token };
});
const register = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const password = payload.password;
    const hashedPassword = yield (0, hashPassword_1.hashPassord)(password);
    // console.log('Hashed ', hashedPassword)
    const result = yield user_model_1.default.create(Object.assign(Object.assign({}, payload), { password: hashedPassword, role: 'user', userStatus: 'active' }));
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const changePassword = (
// eslint-disable-next-line @typescript-eslint/no-unused-vars
decodedToken, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
payload) => {
    console.log(decodedToken);
    const { iat, exp } = decodedToken;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const forgetPassword = () => {}
exports.authServices = {
    login,
    register,
    changePassword,
};
