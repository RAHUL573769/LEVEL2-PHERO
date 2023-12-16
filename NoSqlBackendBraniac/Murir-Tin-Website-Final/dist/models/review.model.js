"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    review: {
        type: String
    },
    rating: {
        type: Number
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Tour",
        unique: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now()
    }
});
//Pre hook for Query Middle ware
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });
//Pre hook for Query Middle ware
exports.Review = (0, mongoose_1.model)("Review", reviewSchema);
