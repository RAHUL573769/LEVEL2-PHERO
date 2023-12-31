"use strict";
let anything;
anything = "Next Level Developer";
anything.length;
const kgToGram = (value) => {
    if (typeof value === "string") {
        return `The value is ${value}`;
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return undefined;
    }
};
