const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { recipient, subject, body } = req.body;

  // Check if all necessary fields are provided
  if (!recipient || !subject || !body) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example, can be any email service you use
      auth: {
        user: process.env.EMAIL_USER, // Make sure to store your email user and password in .env file
        pass: process.env.EMAIL_PASS,
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: recipient, // List of recipients
      subject: subject, // Subject line
      text: body, // Plain text body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
};

module.exports = { sendEmail };
