const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Adjust the path as needed

// POST endpoint to add a new item
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required.' });
    }
    
    const newItem = new Item({ title, description });
    const savedItem = await newItem.save();
    
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error creating item:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});
// PUT endpoint to update an item
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const updatedItem = await Item.findByIdAndUpdate(id, { title, description }, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json(updatedItem);
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
  });
  
  // DELETE endpoint to delete an item
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedItem = await Item.findByIdAndDelete(id);
      if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json({ message: 'Item deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
  });
// GET endpoint to fetch all items
router.get('/', async (req, res) => {
  try {
    // Retrieve items from the database
    const items = await Item.find({});
    
    // Send a response with the items
    res.status(200).json(items);
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});

module.exports = router;
