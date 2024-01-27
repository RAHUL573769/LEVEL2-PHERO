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
/* eslint-disable @typescript-eslint/no-unused-vars */
const user_model_1 = __importDefault(require("../models/user.model"));
const doRegister = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-unused-vars
    const result = yield user_model_1.default.create(Object.assign(Object.assign({}, data), { userStatus: 'active', role: 'user' }));
    return result;
});
// eslint-disable-next-line no-unused-vars
const doLogin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOne(data);
    if (!result) {
        throw new Error('Invalid Credentials');
    }
    return null;
});
exports.authServices = {
    doRegister,
    doLogin,
};
