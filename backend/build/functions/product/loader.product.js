"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loaderProduct = void 0;
const onCall_1 = require("../../config/callbacks/onCall");
const create_product_1 = require("./create.product");
const get_product_1 = require("./get.product");
const loaderProduct = (exports) => {
    exports.createProduct = (0, onCall_1.onCall)(create_product_1.createProduct);
    exports.getAllProducts = (0, onCall_1.onCall)(get_product_1.getAllProducts);
    exports.getProductsByCompanyId = (0, onCall_1.onCall)(get_product_1.getProductsByCompanyId);
};
exports.loaderProduct = loaderProduct;
//# sourceMappingURL=loader.product.js.map