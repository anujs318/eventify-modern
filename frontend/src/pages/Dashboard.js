import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updateData, setUpdateData] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  };

  const deleteEvent = (id) => {
    axios.delete(`http://localhost:5000/api/events/${id}`)
      .then(() => fetchEvents())
      .catch(err => console.error(err));
  };

  const startEditing = (event) => {
    console.log('Editing Event:', event._id); // Debug log
    setSelectedEvent(event._id);
    setUpdateData({
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description
    });
  };

  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const updateEvent = (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    setLoading(true);
    console.log('Updating Event ID:', selectedEvent); // Debug log
    console.log('Data to Update:', updateData); // Debug log

    axios.put(`http://localhost:5000/api/events/${selectedEvent}`, updateData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        fetchEvents();
        setSelectedEvent(null);
        setUpdateData({ title: '', date: '', location: '', description: '' });
        alert('✅ Event updated successfully!');
      })
      .catch(err => {
        console.error(err);
        alert('❌ Failed to update event.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Dashboard - Manage Events</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="p-2">Title</th>
            <th className="p-2">Date</th>
            <th className="p-2">Location</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event._id} className="text-center border-b">
              <td className="p-2">{event.title}</td>
              <td className="p-2">{event.date}</td>
              <td className="p-2">{event.location}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => deleteEvent(event._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
                <button onClick={() => startEditing(event)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedEvent && (
        <motion.form
          onSubmit={updateEvent}
          className="mt-8 bg-gray-100 p-6 rounded space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Update Event</h2>
          <input type="text" name="title" value={updateData.title} onChange={handleUpdateChange} className="w-full p-2 border rounded" required />
          <input type="text" name="date" value={updateData.date} onChange={handleUpdateChange} className="w-full p-2 border rounded" required />
          <input type="text" name="location" value={updateData.location} onChange={handleUpdateChange} className="w-full p-2 border rounded" required />
          <textarea name="description" value={updateData.description} onChange={handleUpdateChange} className="w-full p-2 border rounded" rows="4" required />
          <div className="flex space-x-4">
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              {loading ? 'Updating...' : 'Update Event'}
            </button>
            <button type="button" onClick={() => setSelectedEvent(null)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Cancel
            </button>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
}
