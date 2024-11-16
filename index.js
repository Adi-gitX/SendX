require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mailRoutes = require('./routes/mailRoutes');

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

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', mailRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
