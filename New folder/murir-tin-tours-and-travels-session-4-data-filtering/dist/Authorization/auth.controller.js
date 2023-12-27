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
exports.authController = void 0;
const auth_service_1 = require("./auth.service");
// import catchAsyncFunction from '../utils/catchAsync'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const login = catchAsyncFunction(
//   async (req: Request, res: Response, next: NextFunction) => {},
// )
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authServices.register(req.body);
    res.status(200).json({
        message: 'User Registered Succesfully',
        data: result,
    });
});
exports.authController = {
    register,
};
