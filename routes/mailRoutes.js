const express = require('express');
const { sendEmail } = require('../controllers/mailController'); // Importing the email controller
const router = express.Router();

// Route to handle sending emails
router.post('/contactme', async (req, res, next) => {
  try {
    await sendEmail(req, res); // Handle email sending logic
  } catch (error) {
    next(error); // Pass errors to the error handler
  }
});

module.exports = router;
