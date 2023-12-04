"use strict";
// Here you need to put all the routes of the loaders
// example:
// import { loader as loaderProduct } from '../../functions/product/loader.product';
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAllFunctions = void 0;
const loader_user_1 = require("../../functions/user/loader.user");
function loadAllFunctions(exports) {
    // loaderProduct(exports);
    (0, loader_user_1.loaderUser)(exports);
}
exports.loadAllFunctions = loadAllFunctions;
//# sourceMappingURL=callbacks.js.map