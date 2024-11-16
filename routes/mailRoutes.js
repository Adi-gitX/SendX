const express = require('express');
const router = express.Router();

// Example route, add your mail logic here
router.post('/send', (req, res) => {
  const { recipient, subject, body } = req.body;

  // Logic for sending email goes here
  res.status(200).json({ message: 'Email sent successfully', recipient, subject, body });
});

module.exports = router;
