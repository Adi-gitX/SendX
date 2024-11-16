const express = require('express');
const { sendEmail } = require('../controllers/mailController');
const router = express.Router();

// Route to handle sending emails
router.post('/send-email', async (req, res, next) => {
    try {
        await sendEmail(req, res);
    } catch (error) {
        next(error); // Pass errors to the error handler
    }
});

module.exports = router;
