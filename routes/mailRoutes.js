// routes/mailRoutes.js
const express = require('express');
const { sendEmail } = require('../controllers/mailController');

const router = express.Router();

// POST route to send email
router.post('/send-email', sendEmail);

module.exports = router;
