import Joi = require("joi");

export type User = {
  id: string;
  email: string;
  companyName: string;
  status: number;
  logoUrl: string;
  role: string;
};

export const userJoischema = Joi.object({
  id: Joi.string().required(),
  email: Joi.string().email().required(),
  companyName: Joi.string().required(),
  logoUrl: Joi.string().required(),
  status: Joi.number().required(),
  role: Joi.string().required(),
});
