// In this file we define the messages that we will return to the client and server in case of error or success

export function responseMessage(message: any, status: number) {
  return { message: message, status: status };
}

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
