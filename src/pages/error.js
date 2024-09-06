import React, { useState, useEffect } from 'react';

const ItemManager = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Fetch items when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/items');
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchItems();
  }, []);

  // Handle form submission to add or update an item
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = editingItemId ? 'PUT' : 'POST';
      const url = editingItemId 
        ? `http://localhost:5001/api/items/${editingItemId}` 
        : 'http://localhost:5001/api/items';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error('Failed to save item');
      }

      const savedItem = await response.json();
      
      if (editingItemId) {
        setItems(items.map(item => item._id === editingItemId ? savedItem : item));
        setMessage(`Item updated: ${savedItem.title}`);
      } else {
        setItems([...items, savedItem]);
        setMessage(`Item added: ${savedItem.title}`);
      }

      setTitle('');
      setDescription('');
      setEditingItemId(null);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  // Handle editing an item
  const handleEdit = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setEditingItemId(item._id);
  };

  // Handle deleting an item
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/items/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      setItems(items.filter(item => item._id !== id));
      setMessage('Item deleted');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Item Manager</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">
          {editingItemId ? 'Update Item' : 'Add Item'}
        </button>
      </form>

      {message && <p>{message}</p>}
      {error && <p>Error: {error}</p>}

      <h2>Item List</h2>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item._id}>
              <strong>{item.title}</strong>: {item.description}
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemManager;
