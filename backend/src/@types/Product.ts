import * as Joi from "joi";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  status: number;
};
export const productJoischema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  imageUrl: Joi.string().required(),
  status: Joi.number().required(),
});
