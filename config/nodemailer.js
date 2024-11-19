// config/nodemailer.js
require('dotenv').config();
const nodemailer = require('nodemailer');
const logger = require('../utils/logger'); // Use logger for consistent logging

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
  logger.error('Missing required environment variables for email configuration');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  secure: Number(EMAIL_PORT) === 465, // Use secure:true for port 465
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    logger.error('Error connecting to email server:', error);
  } else {
    logger.log('Email server is ready to take messages');
  }
});

module.exports = transporter;
