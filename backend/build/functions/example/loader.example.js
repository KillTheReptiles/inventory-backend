"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loader = void 0;
const onCall_1 = require("../../config/callbacks/onCall");
const create_example_1 = require("./create.example");
const loader = (exports) => {
    exports.createExample = (0, onCall_1.onCall)(create_example_1.createExample);
};
exports.loader = loader;
//# sourceMappingURL=loader.example.js.map