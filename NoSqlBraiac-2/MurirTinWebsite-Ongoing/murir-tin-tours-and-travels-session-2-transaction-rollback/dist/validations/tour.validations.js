"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z
    .object({
    name: zod_1.z.string().refine((data) => {
        if (data.length < 5) {
            return false;
        }
    }, {
        message: 'Name must be less tha n 5 characters',
    }),
    durationHours: zod_1.z.number().int().positive().min(1),
    //   ratingsAverage: z.number().int().positive().min(1).max(5),
    price: zod_1.z.number().positive(),
    discountPrice: zod_1.z.number().int().positive().optional(),
})
    .refine((data) => {
    if (data.discountPrice === undefined) {
        return true;
    }
    if (data.discountPrice > data.price) {
        return false;
    }
}, {
    message: 'Discount Price Must be less than actual price',
});
exports.TourValidation = { createZodSchema };
