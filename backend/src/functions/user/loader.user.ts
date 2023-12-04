import { onCall } from "../../config/callbacks/onCall";
import { createUser } from "./create.user";

export const loaderUser = (exports: any): void => {
  exports.createUser = onCall(createUser);
};
