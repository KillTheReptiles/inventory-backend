"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCall = void 0;
const firebase_functions_1 = require("firebase-functions");
// this is a helper function to create a callable function with the correct region
// TODO: Find a way to not use "https" import but importing CallableContext directly
const onCall = (callback, worldRegion = "us-east1") => {
    return (0, firebase_functions_1.region)(worldRegion).https.onCall(callback);
};
exports.onCall = onCall;
//# sourceMappingURL=onCall.js.map