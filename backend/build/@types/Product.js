"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productJoischema = void 0;
const Joi = require("joi");
exports.productJoischema = Joi.object({
    id: Joi.string(),
    companyId: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().required(),
    imageUrl: Joi.string(),
    categoryId: Joi.string().required(),
    stock: Joi.number().required(),
    status: Joi.number().required(),
});
//# sourceMappingURL=Product.js.map