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
const User_services_1 = require("./User.services");
const catchAsync = (fn) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        Promise.resolve(fn(req, res, next)).catch((err) => {
            next(err);
        });
    });
};
// export const catchAsyncFunction = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => {
//       next(err);
//     });
//   };
// };
const createUserController = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield User_services_1.UserServices.creteUserServices(data);
    res.status(200).json({
        message: "User Created",
        status: "Success",
        data: result
    });
}));
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield User_services_1.UserServices.getUserServices();
        res.status(200).json({
            message: "User Fetched",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getSearchedUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = req.query;
    console.log(req.query);
    try {
        const result = yield User_services_1.UserServices.getSearchService(req.query);
        res.status(200).json({
            message: "User Fetched",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserController = {
    createUserController,
    getUserController,
    getSearchedUserController
};
