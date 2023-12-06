"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserStatus = exports.UserRole = void 0;
const mongoose_1 = require("mongoose");
exports.UserRole = ["admin", "faculty", "student"];
exports.UserStatus = ["blocked", "in-progress"];
const userSchema = new mongoose_1.Schema({
    id: {
        type: String
    },
    password: {
        type: String
    },
    needsPasswordChange: {
        type: Boolean
    },
    role: {
        type: String,
        enum: {
            values: exports.UserRole
        }
    },
    status: {
        type: String,
        enum: {
            values: exports.UserStatus
        },
        default: "in-progress"
    },
    isDeleted: {
        type: Boolean
    }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)("User", userSchema);
