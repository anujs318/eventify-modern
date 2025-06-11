import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/reset-password/${token}`, { password })
      .then(() => {
        alert('✅ Password reset successful!');
        navigate('/login');
      })
      .catch(() => alert('❌ Error resetting password.'));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Reset Password</h1>
        <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded mb-4" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Reset Password</button>
      </form>
    </div>
  );
}
