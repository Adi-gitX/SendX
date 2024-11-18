// require('dotenv').config();
// const express = require('express');
// const cors = require('cors'); // Import the CORS middleware
// const morgan = require('morgan');
// const mailRoutes = require('./routes/mailRoutes');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // CORS configuration
// const corsOptions = {
//   origin: ['http://adigitx.vercel.app', 'http://localhost:3000'], // Allow frontend requests from this origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   credentials: true, // Allows sending cookies/credentials
// };

// // Use CORS middleware
// app.use(cors(corsOptions)); // Apply CORS settings globally

// app.use(morgan('dev')); // Logging middleware
// app.use(express.json()); // Parse incoming JSON requests

// app.use('/api', mailRoutes); // Mount mail routes

// // Health check route
// app.get('/health', (req, res) => {
//   res.status(200).send('OK');
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mailRoutes = require('./routes/mailRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: ['http://adigitx.vercel.app', 'http://localhost:3000'], // Allow frontend requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allows sending cookies/credentials
};

app.use(cors(corsOptions)); // Apply CORS settings globally
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', mailRoutes); // Mount mail routes

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
