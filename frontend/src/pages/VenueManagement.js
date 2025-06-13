import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function VenueManagement() {
  const [venues, setVenues] = useState([]);
  const [formData, setFormData] = useState({ name: '', city: '', contact: '', reviews: [] });

  const majorCities = [
    'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad',
    'Solapur', 'Amravati', 'Kolhapur', 'Thane', 'Nanded',
    'Jalgaon', 'Sangli', 'Akola', 'Latur', 'Dhule',
    'Ahmednagar', 'Chandrapur', 'Parbhani', 'Beed', 'Satara'
  ];

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = () => {
    axios.get('https://eventify-modern-1.onrender.com/api/venues')
      .then(res => setVenues(res.data))
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://eventify-modern-1.onrender.com/api/venues', formData)
      .then(() => {
        fetchVenues();
        setFormData({ name: '', city: '', contact: '', reviews: [] });
        alert('✅ Venue added successfully!');
      })
      .catch(err => console.error(err));
  };

  const deleteVenue = (id) => {
    axios.delete(`https://eventify-modern-1.onrender.com/api/venues/${id}`)
      .then(() => fetchVenues())
      .catch(err => console.error(err));
  };

  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Venue Management</h1>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded mb-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Venue Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select City</option>
          {majorCities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Venue
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">All Venues</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="p-2">Venue Name</th>
            <th className="p-2">City</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map(venue => (
            <tr key={venue._id} className="text-center border-b">
              <td className="p-2">{venue.name}</td>
              <td className="p-2">{venue.city}</td>
              <td className="p-2">{venue.contact}</td>
              <td className="p-2">
                <button onClick={() => deleteVenue(venue._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
