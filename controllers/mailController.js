// controllers/mailController.js
const transporter = require('../config/nodemailer'); // Use transporter from config
const logger = require('../utils/logger'); // Use logger for consistent logging

const sendEmail = async (req, res) => {
  const { recipient, subject, body } = req.body;

  // Validate request body
  if (!recipient || !subject || !body) {
    return res.status(400).json({ message: 'Missing required fields: recipient, subject, or body.' });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject,
      text: body,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    logger.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
};

module.exports = { sendEmail };
