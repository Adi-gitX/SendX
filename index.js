require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mailRoutes = require('./routes/mailRoutes');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: ['http://adigitx.vercel.app', 'http://localhost:3000'], // Frontend origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', mailRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Global error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  logger.log(`Server running on http://localhost:${PORT}`);
});
