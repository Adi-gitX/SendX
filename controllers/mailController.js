require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mailRoutes = require('./routes/mailRoutes'); // Ensure this is the correct path for your mail routes

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: 'http://adigitx.vercel.app', // Allow frontend requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allows sending cookies/credentials
};

// Use CORS middleware
app.use(cors(corsOptions)); // Apply CORS settings globally

app.use(morgan('dev')); // Logging middleware
app.use(express.json()); // Parse JSON requests

// Routes for the mail API
app.use('/api', mailRoutes); // Your mail routes

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Preflight request handling for CORS
app.options('*', cors(corsOptions)); // Handles preflight requests

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error in request:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app; // For Vercel deployment (no need for app.listen on Vercel)
