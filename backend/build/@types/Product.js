"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productJoischema = void 0;
const Joi = require("joi");
exports.productJoischema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    imageUrl: Joi.string().required(),
    status: Joi.number().required(),
});
//# sourceMappingURL=Product.js.map