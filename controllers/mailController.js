const transporter = require('../config/nodemailer'); // Import the transporter from the config

// Controller to send the email
const sendEmail = async (req, res) => {
  const { recipient, subject, body } = req.body;

  if (!recipient || !subject || !body) {
    return res.status(400).json({ error: 'Missing required fields: recipient, subject, or body' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions); // Send the email using nodemailer
    res.status(200).json({ message: 'Email sent successfully', recipient, subject, body });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { sendEmail };
