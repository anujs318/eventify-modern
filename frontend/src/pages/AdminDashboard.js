import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/admin/venues" className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 text-center">Manage Venues</Link>
        <Link to="/admin/users" className="bg-green-500 text-white p-4 rounded hover:bg-green-600 text-center">View Users</Link>
        <Link to="/admin/events" className="bg-purple-500 text-white p-4 rounded hover:bg-purple-600 text-center">View Events</Link>
        <Link to="/admin/contacts" className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600 text-center">View Contact Messages</Link>
        <Link to="/admin/add-venue" className="bg-red-500 text-white p-4 rounded hover:bg-red-600 text-center">Add New Venue</Link>

        
      </div>
    </div>
  );
}
