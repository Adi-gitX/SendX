const transporter = require('../config/nodemailer');
const logger = require('../utils/logger');

const sendEmail = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // Admin email from environment variables
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    logger.log('Email sent successfully');
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    logger.error(`Error sending email: ${error.message}`);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { sendEmail };
