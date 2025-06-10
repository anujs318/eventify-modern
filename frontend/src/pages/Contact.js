import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', formData)
      .then(() => {
        alert('✅ Contact submitted successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch(() => alert('❌ Failed to submit contact.'));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 bg-white shadow-md p-6 rounded">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
