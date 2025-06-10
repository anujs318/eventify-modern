import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white flex justify-center space-x-8 p-4 font-semibold text-lg">
      <Link to="/" className="hover:text-yellow-300">Home</Link>
      <Link to="/services" className="hover:text-yellow-300">Services</Link>
      <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      <Link to="/about" className="hover:text-yellow-300">About</Link>
      <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
    </nav>
  );
}
