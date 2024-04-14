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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_services_1 = require("./user.services");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield user_services_1.UserServices.createAdmin(data);
    res.status(202).json({
        message: "User Created",
        status: "Success",
        data: result
    });
    console.log(data);
});
exports.UserController = { createUserController };
