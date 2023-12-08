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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const user_services_1 = require("./user.services");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const {
        //   password,
        //   student: { studentData }
        // } = req.body;
        // const { student } = req.body.student;
        const _a = req.body, { password } = _a, studentData = __rest(_a.student, []);
        console.log("15", studentData);
        const result = yield user_services_1.UserServices.createStudentIntoDb(password, studentData);
        // res.status(202).json({
        //   message: "User Data Added Successfully",
        //   success: true,
        //   data: result
        // });
    }
    catch (error) {
        console.log(error);
    }
});
exports.StudentController = {
    createStudent
};
