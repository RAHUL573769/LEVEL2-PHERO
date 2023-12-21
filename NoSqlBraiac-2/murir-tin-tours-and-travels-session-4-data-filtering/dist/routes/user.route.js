"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.post('/create-user', (0, auth_1.checkAuth)(['admin']), user_controller_1.userController.createUser);
router.get('/', 
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
