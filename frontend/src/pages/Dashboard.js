import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });

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
    axios.get(`http://localhost:5000/api/events?userId=${user.email}`)
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!user) return alert('User not logged in');

    axios.post('http://localhost:5000/api/events', {
      ...formData,
      userId: user.email
    })
      .then(() => {
        fetchEvents();
        setFormData({ title: '', date: '', location: '', description: '' });
        alert('✅ Event created successfully!');
      })
      .catch(err => {
        console.error(err);
        alert('❌ Failed to create event.');
      });
  };

  const deleteEvent = (id) => {
    axios.delete(`http://localhost:5000/api/events/${id}`)
      .then(() => fetchEvents())
      .catch(err => console.error(err));
  };

  const startEditing = (event) => {
    console.log('Editing Event:', event._id);
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
    console.log('Updating Event ID:', selectedEvent);
    console.log('Data to Update:', updateData);

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

      {/* Event Creation Form */}
      <motion.form
        onSubmit={handleCreateEvent}
        className="mb-8 bg-gray-100 p-6 rounded space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Create New Event</h2>
        <input type="text" name="title" value={formData.title} onChange={handleFormChange} className="w-full p-2 border rounded" placeholder="Event Title" required />
        <input type="text" name="date" value={formData.date} onChange={handleFormChange} className="w-full p-2 border rounded" placeholder="Event Date" required />
        <input type="text" name="location" value={formData.location} onChange={handleFormChange} className="w-full p-2 border rounded" placeholder="Event Location" required />
        <textarea name="description" value={formData.description} onChange={handleFormChange} className="w-full p-2 border rounded" rows="4" placeholder="Event Description" required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Create Event</button>
      </motion.form>

      {/* Events Table */}
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
                <button onClick={() => deleteEvent(event._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                <button onClick={() => startEditing(event)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Form */}
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
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{loading ? 'Updating...' : 'Update Event'}</button>
            <button type="button" onClick={() => setSelectedEvent(null)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
}
