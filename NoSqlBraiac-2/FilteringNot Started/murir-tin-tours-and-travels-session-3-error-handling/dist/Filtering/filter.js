"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = (model, queryObj) => {
    const excludedFields = [
        'page',
        'searchTearm',
        'sortBy',
        'sortOrder',
        'fields',
    ];
    excludedFields.forEach((keyword) => delete queryObj[keyword]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const query = model.find(queryObj);
    return query;
};
exports.filter = filter;
