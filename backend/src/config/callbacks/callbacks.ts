// Here you need to put all the routes of the loaders
// example:
// import { loader as loaderProduct } from '../../functions/product/loader.product';

import { loaderUser } from "../../functions/user/loader.user";

export function loadAllFunctions(exports: any) {
  // loaderProduct(exports);
  loaderUser(exports);
}
