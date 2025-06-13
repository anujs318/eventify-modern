import React, { useState } from 'react';
import axios from 'axios';

export default function AddVenue() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    contact: '',
    review: '',
    image: '',     // 📷 New field for image URL
    rating: ''     // ⭐ New field for star rating
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://eventify-modern-1.onrender.com/api/venues', formData)
      .then(() => {
        alert('✅ Venue Added Successfully');
        setFormData({ name: '', city: '', contact: '', review: '', image: '', rating: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Add New Venue</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Venue Name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} className="w-full border p-2 rounded" required />
        <textarea name="review" placeholder="Review" value={formData.review} onChange={handleChange} className="w-full border p-2 rounded" rows="3" />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="number" name="rating" placeholder="Star Rating (1-5)" value={formData.rating} onChange={handleChange} className="w-full border p-2 rounded" min="1" max="5" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Venue</button>
      </form>
    </div>
  );
}
