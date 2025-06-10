import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [events, setEvents] = useState([]);

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

  return (
    <div className="p-6 max-w-4xl mx-auto">
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
                {/* Update feature will be added next */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
