const transporter = require('../config/mailConfig');
const { body, validationResult } = require('express-validator');
const logger = require('../utils/logger'); // Assuming you have a logger utility

const sendEmail = async (req, res) => {
  await body('to').isEmail().run(req);
  await body('subject').notEmpty().run(req);
  await body('text').notEmpty().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { to, subject, text } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent: ${info.response}`);
    res.status(200).json({ message: 'Email sent successfully', info });
  } catch (error) {
    logger.error(`Failed to send email: ${error.message}`);
    res.status(500).json({ message: 'Failed to send email', error });
  }
};

module.exports = { sendEmail };
