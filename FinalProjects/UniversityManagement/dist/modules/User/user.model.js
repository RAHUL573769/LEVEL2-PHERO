"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_constants_1 = require("./user.constants");
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: Object.values(user_constants_1.USER_ROLE)
    },
    status: {
        type: String,
        enum: Object.values(user_constants_1.USER_STATUS)
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.User = (0, mongoose_1.model)("User", userSchema);
