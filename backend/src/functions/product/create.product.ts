import { https } from "firebase-functions";
import { Product, productJoischema } from "../../@types/Product";
import { joiValidation } from "../../helpers/joiValidation";
import { responseMessage } from "../../helpers/returnMessages";
import { prisma } from "../../database/config";

export const createProduct = async (data: Product, context: https.CallableContext) => {
  try {
    data.companyId = context.auth!.uid;
    joiValidation(data, productJoischema);
    const product = await prisma.product.create({
      data: {
        COMPANY_ID: data.companyId,
        NAME: data.name,
        DESCRIPTION: data.description,
        PRICE: data.price,
        IMG_URL: data.imageUrl,
        CATEGORY_ID: data.categoryId,
        STOCK: data.stock,
        STATUS: data.status,
      },
    });
    console.log(product);

    return responseMessage(`Product created successfully`, 200);
  } catch (error) {
    console.error(error);
    return responseMessage("Something was wrong", 500);
  }
};
