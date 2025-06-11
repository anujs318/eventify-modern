import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/register', formData)
      .then(res => {
        alert('✅ Registration Successful');
        window.location.href = '/login';
      })
      .catch(err => {
        console.error(err);
        alert('❌ Registration Failed');
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Signup</h1>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded mb-4" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 rounded mb-4" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Register</button>
      </form>
    </div>
  );
}
