"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCompanyId = exports.getAllProducts = void 0;
const config_1 = require("../../database/config");
const returnMessages_1 = require("../../helpers/returnMessages");
const getAllProducts = async (data, context) => {
    try {
        const products = await config_1.prisma.product.findMany({});
        return products;
    }
    catch (error) {
        console.error(error);
        return (0, returnMessages_1.responseMessage)("Something was wrong", 500);
    }
};
exports.getAllProducts = getAllProducts;
const getProductsByCompanyId = async (data, context) => {
    try {
        const companyId = context.auth.uid;
        const products = await config_1.prisma.product.findMany({
            where: {
                COMPANY_ID: companyId,
            },
        });
        return products;
    }
    catch (error) {
        console.error(error);
        return (0, returnMessages_1.responseMessage)("Something was wrong", 500);
    }
};
exports.getProductsByCompanyId = getProductsByCompanyId;
//# sourceMappingURL=get.product.js.map