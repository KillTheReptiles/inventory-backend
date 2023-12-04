"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiValidation = void 0;
// this function is used to validate the data that comes from the client
function joiValidation(data, schema) {
    const { error } = schema.validate(data);
    if (error) {
        throw new Error(error.message);
    }
    return data;
}
exports.joiValidation = joiValidation;
//# sourceMappingURL=joiValidation.js.map