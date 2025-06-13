// src/pages/AdminAddVenue.js
import React, { useState } from 'react';
import axios from 'axios';

export default function AdminAddVenue() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    contact: '',
    review: '',
    image: '',
    rating: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://eventify-modern-1.onrender.com/api/venues', formData)
      .then(() => {
        alert('✅ Venue added successfully!');
        setFormData({ name: '', city: '', contact: '', review: '', image: '', rating: '' });
      })
      .catch(err => {
        console.error(err);
        alert('❌ Failed to add venue.');
      });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Add New Venue</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Venue Name" className="w-full border p-2 rounded" required />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full border p-2 rounded" required />
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" className="w-full border p-2 rounded" required />
        <input type="text" name="review" value={formData.review} onChange={handleChange} placeholder="Review" className="w-full border p-2 rounded" />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full border p-2 rounded" />
        <input type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} placeholder="Star Rating (1-5)" className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Venue</button>
      </form>
    </div>
  );
}
