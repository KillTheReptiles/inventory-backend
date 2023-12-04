"use strict";
// In this file we define the messages that we will return to the client and server in case of error or success
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseMessage = void 0;
function responseMessage(message, status) {
    return { message: message, status: status };
}
exports.responseMessage = responseMessage;
// Custom console.log and console.error
// Save the original console.log and console.error
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
// Overwrite console.log with a new implementation
console.log = function () {
    const timestampedArguments = [`[${new Date().toLocaleString()}] - INFO:`].concat(Array.from(arguments));
    originalConsoleLog.apply(console, timestampedArguments);
};
// Overwrite console.error with a new implementation
console.error = function () {
    const timestampedArguments = [`[${new Date().toLocaleString()}] - ERROR:`].concat(Array.from(arguments));
    originalConsoleError.apply(console, timestampedArguments);
};
//# sourceMappingURL=returnMessages.js.map