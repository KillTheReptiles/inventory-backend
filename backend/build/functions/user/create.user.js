"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = require("../../@types/User");
const config_1 = require("../../database/config");
const returnMessages_1 = require("../../helpers/returnMessages");
const joiValidation_1 = require("../../helpers/joiValidation");
const createUser = async (data, context) => {
    try {
        data.id = context.auth.uid; // Set user id from Firebase Auth
        data.status = 1; // Set user status to active by default
        console.log(data.id);
        // Verify if the uid is already in use
        const uid = await config_1.prisma.user.findUnique({ where: { ID: data.id } });
        if (uid) {
            return (0, returnMessages_1.responseMessage)("Id already in use", 400);
        }
        // Verify if the email is already in use
        const email = await config_1.prisma.user.findUnique({ where: { EMAIL: data.email } });
        if (email) {
            return (0, returnMessages_1.responseMessage)("Email already in use", 400);
        }
        // Verify the data with the Joi schema
        (0, joiValidation_1.joiValidation)(data, User_1.userJoischema);
        // Create the user
        const user = await config_1.prisma.user.create({
            data: {
                ID: data.id,
                EMAIL: data.email,
                COMPANY_NAME: data.companyName,
                LOGO_URL: data.logoUrl,
                STATUS: data.status,
                ROLE: data.role,
            },
        });
        console.log(user);
        return (0, returnMessages_1.responseMessage)(`User created successfully`, 200);
    }
    catch (error) {
        console.error(error);
        return (0, returnMessages_1.responseMessage)("Something was wrong", 500);
    }
};
exports.createUser = createUser;
//# sourceMappingURL=create.user.js.map