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
const router = express_1.default.Router();
router.post('/create-user', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    console.log(email);
    const user = yield user_model_1.default.find({ email });
    console.log('22', user);
    if (!user) {
        res.status(400).json({
            status: 'Fail',
            mesage: 'Invalid User or Password',
        });
    }
}), user_controller_1.userController.createUser);
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    console.log(email);
    const user = yield user_model_1.default.find({ email });
    console.log(user);
    if (!user) {
        res.status(400).json({
            status: 'Fail',
            mesage: 'Invalid User or Password',
        });
    }
}), 
//   catchAsyncFunction(
//     async (req: Request, res: Response, next: NextFunction) => {
//       const email = req.body.email
//       const password = req.body.password
//       console.log(req)
//       const user = await User.findOne({ email, password })
//       console.log(user)
//       if (!user) {
//         throw new Error('Invalid Email')
//       }
//       if (user?.role !== 'admin') {
//         throw new Error('Invalid User.You Caanot change data')
//       }
//     },
//   ),
user_controller_1.userController.getAllUsers);
router.get('/:id', user_controller_1.userController.getSingleUser);
router.patch('/:id', user_controller_1.userController.updateUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
exports.userRoutes = router;
