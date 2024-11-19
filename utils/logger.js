// utils/logger.js
const logger = {
    log: (message) => {
      console.log(`[INFO]: ${message}`);
    },
    error: (message) => {
      console.error(`[ERROR]: ${message}`);
    },
  };
  
  module.exports = logger;
  