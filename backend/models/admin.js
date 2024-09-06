// const mongoose = require('mongoose');

// // Define the schema
// const adminSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   password: { type: String }
// });

// // Create or use the existing model
// const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
// module.exports = Admin;


// src/models/admin.js
const mongoose = require('mongoose');

// Define the schema with validation
const adminSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true, 
    lowercase: true 
  },
  password: { 
    type: String, 
    required: true 
  }
});

// Create or use the existing model
const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
module.exports = Admin;
