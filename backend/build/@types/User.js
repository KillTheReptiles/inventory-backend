"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userJoischema = void 0;
const Joi = require("joi");
exports.userJoischema = Joi.object({
    id: Joi.string().required(),
    email: Joi.string().email().required(),
    companyName: Joi.string().required(),
    logoUrl: Joi.string().required(),
    status: Joi.number().required(),
    role: Joi.string().required(),
});
//# sourceMappingURL=User.js.map