import { onCall } from "../../config/callbacks/onCall";
import { isLogged } from "../../middlewares/verifySession";
import { createProduct } from "./create.product";
import { getAllProducts, getProductsByCompanyId } from "./get.product";

export const loaderProduct = (exports: any): void => {
  exports.createProduct = onCall(createProduct, [isLogged]);
  exports.getAllProducts = onCall(getAllProducts, [isLogged]);
  exports.getProductsByCompanyId = onCall(getProductsByCompanyId, [isLogged]);
};
