require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mailRoutes = require('./routes/mailRoutes'); // Ensure this is the correct path for your routes

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: /https:\/\/adigitx\.vercel\.app/, // Regex to allow any subdomain of adigitx.vercel.app
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allows cookies/credentials
};

app.use(cors(corsOptions)); // Apply CORS settings globally

app.use(morgan('dev')); // Logging middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api', mailRoutes); // Your mail routes

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Preflight request handling for CORS
app.options('*', cors(corsOptions)); // Handles preflight requests

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error in request:", err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Vercel automatically handles serverless functions; 
// Do not use app.listen() in this case for Vercel
module.exports = app; // For Vercel deployment (no need for app.listen)
