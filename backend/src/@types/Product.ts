import * as Joi from "joi";

export type Product = {
  id: string;
  companyId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  stock: number;
  status: number;
};
export const productJoischema = Joi.object({
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
