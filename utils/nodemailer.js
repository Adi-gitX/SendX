require('dotenv').config();
const nodemailer = require('nodemailer');

// Destructure the environment variables
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

// Check if the required environment variables are set
if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
  console.error('Missing required environment variables for email configuration');
  process.exit(1);
}

// Create a transporter object using the SMTP settings
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: false, // Use TLS
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Verify the connection to the email server
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to take messages');
  }
});

module.exports = transporter; // Export the transporter for use in the mail controller
