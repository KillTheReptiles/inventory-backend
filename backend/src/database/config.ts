import * as admin from "firebase-admin";
import * as serviceAccount from "./permissions.json";
import { PrismaClient } from "@prisma/client";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const prisma = new PrismaClient();
