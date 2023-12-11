"use strict";
// Here you need to put all the routes of the loaders
// example:
// import { loader as loaderProduct } from '../../functions/product/loader.product';
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAllFunctions = void 0;
const loader_product_1 = require("../../functions/product/loader.product");
const loader_user_1 = require("../../functions/user/loader.user");
function loadAllFunctions(exports) {
    // loaderProduct(exports);
    (0, loader_user_1.loaderUser)(exports);
    (0, loader_product_1.loaderProduct)(exports);
}
exports.loadAllFunctions = loadAllFunctions;
//# sourceMappingURL=callbacks.js.map