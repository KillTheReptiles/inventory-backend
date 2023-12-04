"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loaderUser = void 0;
const onCall_1 = require("../../config/callbacks/onCall");
const create_user_1 = require("./create.user");
const loaderUser = (exports) => {
    exports.createUser = (0, onCall_1.onCall)(create_user_1.createUser);
};
exports.loaderUser = loaderUser;
//# sourceMappingURL=loader.user.js.map