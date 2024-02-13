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
const user_services_1 = require("../services/user.services");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const data = yield user_services_1.UserServices.createUserIntoDb(userData);
        res.status(200).json({
            message: "User Created Successfully",
            status: "Success",
            data
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
const getAllUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_services_1.UserServices.getUserServices();
        console.log("Data in User Controller", data);
        res.status(200).json({
            message: "All Users Successfully",
            status: "Success",
            data
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.UserController = {
    createUserController,
    getAllUserController
};
