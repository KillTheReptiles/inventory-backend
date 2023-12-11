import { https } from "firebase-functions";

import { User, userJoischema } from "../../@types/User";
import { prisma } from "../../database/config";
import { responseMessage } from "../../helpers/returnMessages";
import { joiValidation } from "../../helpers/joiValidation";

export const createUser = async (data: User, context: https.CallableContext) => {
  try {
    data.id = context.auth!.uid; // Set user id from Firebase Auth
    data.status = 1; // Set user status to active by default

    console.log(data.id);

    // Verify if the uid is already in use
    const uid = await prisma.user.findUnique({ where: { ID: data.id } });

    if (uid) {
      return responseMessage("Id already in use", 400);
    }

    // Verify if the email is already in use
    const email = await prisma.user.findUnique({ where: { EMAIL: data.email } });

    if (email) {
      return responseMessage("Email already in use", 400);
    }

    // Verify the data with the Joi schema
    joiValidation(data, userJoischema);

    // Create the user
    const user = await prisma.user.create({
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

    return responseMessage(`User created successfully`, 200);
  } catch (error) {
    console.error(error);
    return responseMessage("Something was wrong", 500);
  }
};
