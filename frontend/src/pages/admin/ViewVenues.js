import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewVenues() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = () => {
    axios.get('https://eventify-modern-1.onrender.com/api/venues')
      .then(res => setVenues(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">All Venues</h1>
      {venues.length === 0 ? (
        <p className="text-gray-600">No venues found.</p>
      ) : (
        <ul className="space-y-4">
          {venues.map(venue => (
            <li key={venue._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold">{venue.name}</h2>
              <p><strong>City:</strong> {venue.city}</p>
              <p><strong>Contact:</strong> {venue.contact}</p>
              <p><strong>Review:</strong> {venue.review || 'No review yet'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
