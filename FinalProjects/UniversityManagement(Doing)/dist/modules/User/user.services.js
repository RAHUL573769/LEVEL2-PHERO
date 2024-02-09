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
exports.UserServices = void 0;
const student_model_1 = require("../Student/student.model");
const academicSemester_model_1 = require("../academicSemester/academicSemester.model");
const user_model_1 = require("./user.model");
const user_utils_1 = require("./user.utils");
const createStudentService = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Data From createUserService", studentData);
    //create a user object
    const userData = {};
    //if password not given,use default password
    if (!password) {
        userData.password = "Default Password";
    }
    else {
        userData.password = password;
    }
    //set student role
    userData.password = "student";
    //generate student id
    //year semestercode 4digit number
    //find academic semester info
    const admissionSemester = yield academicSemester_model_1.AcademicSemester.findById(studentData.admissionSemester);
    //manually set id
    // userData.id = "203032";
    userData.id = (0, user_utils_1.generateStudentId)(admissionSemester);
    //create a user
    const result = yield user_model_1.User.create(userData);
    //create a student
    if (Object.keys(result).length) {
        //set id,_id as user
        studentData.id = result.id;
        studentData.user = result._id;
        const newStudent = yield student_model_1.Student.create(studentData);
        return newStudent;
    }
    // const result = await User.create(studentData);
});
const getAllUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id);
    return result;
});
const updateUserService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return result;
});
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndDelete(id);
    return result;
});
exports.UserServices = {
    createStudentService,
    getAllUserService,
    getSingleService,
    updateUserService,
    deleteUserService
};
