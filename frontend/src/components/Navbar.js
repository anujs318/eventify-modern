import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/eventify-logo.png'; // 🔥 Add your logo image here (save it as eventify-logo.png in frontend/src/assets)

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-pink-700 text-white">
      {/* 👉 Logo with Eventify text */}
      <Link to="/" className="flex items-center hover:scale-110 transition-transform duration-300">
        <img src={logo} alt="Eventify Logo" className="w-8 h-8 mr-2" />
        <span className="text-2xl font-bold">Eventify</span>
      </Link>

      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
        <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
        <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
        <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
        <li><Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link></li>
        <li><Link to="/venues" className="hover:text-blue-300">Venues</Link></li>


        {!user ? (
          <>
            <li><Link to="/login" className="hover:text-blue-300">Login</Link></li>
            <li><Link to="/signup" className="hover:text-blue-300">Signup</Link></li>
          </>
        ) : (
          <>
            <li className="flex items-center space-x-2">
              <div className="bg-white text-blue-700 font-bold w-8 h-8 flex items-center justify-center rounded-full">
                {user.email.charAt(0).toUpperCase()}
              </div>
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
