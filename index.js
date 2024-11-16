require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // Import cors
const mailRoutes = require('./routes/mailRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: '/https:\/\/adigitx\.vercel\.app/', // Allow frontend requests from this origin
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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://adigitx.vercel.app/contactus`);
});



// require('dotenv').config();
// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const mailRoutes = require('./routes/mailRoutes'); // Ensure the path is correct

// const app = express();
// const PORT = process.env.PORT || 3000;

// // CORS configuration
// const corsOptions = {
//   origin: ['https://adigitx.vercel.app'], // Allow requests only from this origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   credentials: true, // Allows cookies/credentials
// };

// // Middleware
// app.use(cors(corsOptions)); // Apply CORS settings globally
// app.use(morgan('dev')); // Logging middleware
// app.use(express.json()); // Parse JSON requests

// // Middleware to enforce requests only from `/contactus`
// app.use((req, res, next) => {
//   const allowedReferer = 'https://adigitx.vercel.app/contactus';
//   const referer = req.headers.referer || '';
//   if (referer && referer.startsWith(allowedReferer)) {
//     next();
//   } else {
//     return res.status(403).json({ error: 'Access is restricted to /contactus only' });
//   }
// });

// // Routes
// app.use('/api', mailRoutes); // Use your mail routes

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.status(200).send('OK');
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('Error stack:', err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
