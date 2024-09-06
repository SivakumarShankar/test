const mongoose = require('mongoose');

// Define the schema
const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String }
});

// Create or use the existing model
const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

module.exports = Item;
