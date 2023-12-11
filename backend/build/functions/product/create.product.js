"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const Product_1 = require("../../@types/Product");
const joiValidation_1 = require("../../helpers/joiValidation");
const returnMessages_1 = require("../../helpers/returnMessages");
const config_1 = require("../../database/config");
const createProduct = async (data, context) => {
    try {
        data.companyId = context.auth.uid;
        (0, joiValidation_1.joiValidation)(data, Product_1.productJoischema);
        const product = await config_1.prisma.product.create({
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
        return (0, returnMessages_1.responseMessage)(`Product created successfully`, 200);
    }
    catch (error) {
        console.error(error);
        return (0, returnMessages_1.responseMessage)("Something was wrong", 500);
    }
};
exports.createProduct = createProduct;
//# sourceMappingURL=create.product.js.map