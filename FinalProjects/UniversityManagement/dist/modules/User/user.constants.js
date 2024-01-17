"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strongPassword = exports.USER_ROLE = exports.USER_STATUS = void 0;
exports.USER_STATUS = {
    inprogress: "in-progress",
    blocked: "blocked"
};
exports.USER_ROLE = {
    admin: "admin",
    student: "student",
    faculty: "faculty"
};
exports.strongPassword = {
    uppercase: /(?=.*[A-Z])/,
    lowercase: /(?=.*[a-z])/,
    digit: /(?=.*\d)/,
    special: /(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/,
    length: /.{6,}/
};
