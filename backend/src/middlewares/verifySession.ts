// Here we are going to verify if the user is logged in or not

import { https } from "firebase-functions";

// this is a middleware to check if the user is authenticated
export const isLogged = async (data: void, context: https.CallableContext): Promise<void> => {
  if (!context.auth) {
    // if the user is not authenticated, throw an error
    throw new https.HttpsError("unauthenticated", "The function must be called while authenticated.");
  }
};
