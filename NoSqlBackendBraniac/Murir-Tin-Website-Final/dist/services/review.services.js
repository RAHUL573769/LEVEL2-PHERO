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
exports.ReviewServices = void 0;
const review_model_1 = require("../models/review.model");
const createReview = (reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.create(reviewData);
    console.log(result);
    return result;
});
const getAllReview = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.find();
    return result;
});
const getSingleReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findById(id);
    return result;
});
const updateReview = (id, reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findByIdAndUpdate(id, reviewData, {
        new: true,
        runValidators: true
    });
    return result;
});
// const deleteUser = async (id: string): Promise<IUser | null> => {
//     const result = await User.findByIdAndDelete(id)
//     return result
//   }
exports.ReviewServices = {
    createReview,
    getAllReview,
    getSingleReview,
    updateReview
    //   deleteUser
};
