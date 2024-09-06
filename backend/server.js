require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware
const adminRoutes = require('./routes/admin') // Adjust the path as needed
const itemRoutes = require('./routes/item') // Adjust the path as needed

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
    allowedHeaders: ['Content-Type'], // Allow these headers
  }));

// Use the item routes
app.use('/api/items', itemRoutes);
app.use('/api/admin', adminRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
