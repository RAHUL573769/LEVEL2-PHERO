"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickFunction = void 0;
const pickFunction = (obj, keys) => {
    // console.log("From Line Number 5", obj, keys);
    const finalObj = {}; //creating an object
    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            finalObj[key] = obj[key];
        }
    }
    return finalObj;
};
exports.pickFunction = pickFunction;
