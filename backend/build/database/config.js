"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const admin = require("firebase-admin");
const serviceAccount = require("./permissions.json");
const client_1 = require("@prisma/client");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
exports.prisma = new client_1.PrismaClient();
//# sourceMappingURL=config.js.map