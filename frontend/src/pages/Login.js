import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', formData)
      .then(res => {
        alert('✅ Login Successful');
        localStorage.setItem('user', JSON.stringify(res.data.user));
        window.location.href = '/dashboard';
      })
      .catch(err => {
        console.error(err);
        alert('❌ Invalid Credentials');
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Login</button>

        {/* ✅ Forgot Password Link */}
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-blue-700 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
}
