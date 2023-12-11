import { https } from "firebase-functions";
import { prisma } from "../../database/config";
import { responseMessage } from "../../helpers/returnMessages";

export const getAllProducts = async (data: void, context: https.CallableContext) => {
  try {
    const products = await prisma.product.findMany({});

    return products;
  } catch (error) {
    console.error(error);
    return responseMessage("Something was wrong", 500);
  }
};

export const getProductsByCompanyId = async (data: void, context: https.CallableContext) => {
  try {
    const companyId = context.auth!.uid;
    const products = await prisma.product.findMany({
      where: {
        COMPANY_ID: companyId,
      },
    });

    return products;
  } catch (error) {
    console.error(error);
    return responseMessage("Something was wrong", 500);
  }
};
