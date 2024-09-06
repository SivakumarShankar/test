// const express = require('express');
// const router = express.Router();
// const Admin = require('../models/admin');

// router.get('/', async (req, res) => {
//     try {
//       const admin = await Admin.find({});
//       res.status(200).json(admin);
//     } catch (err) {
//       console.error('Error fetching admin:', err);
//       res.status(500).json({ message: 'Internal Server Error', error: err.message });
//     }
//   });

// // POST endpoint to add a new admin
// router.post('/', async (req, res) => {
//     try {
//       const { email, password } = req.body;
      
//       if (!email || !password) {
//         return res.status(400).json({ message: 'Email and Password are required.' });
//       }
      
//       const newAdmin = new Admin({ email, password });
//       const savedAdmin = await newAdmin.save();
      
//       res.status(201).json(savedAdmin);
//     } catch (err) {
//       console.error('Error creating admin:', err);
//       res.status(500).json({ message: 'Internal Server Error', error: err.message });
//     }
//   });

// module.exports = router;

// src/routes/admin.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

// POST endpoint to login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and Password are required.' });
    }

    // Find the admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate a token
    const token = jwt.sign({ id: admin._id, email: admin.email }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});

module.exports = router;
