import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function VenueList() {
  const [venues, setVenues] = useState([]);
  const [city, setCity] = useState('');
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [reviewInputs, setReviewInputs] = useState({});

  const user = JSON.parse(localStorage.getItem('user'));

  const majorCities = [
    'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad',
    'Solapur', 'Amravati', 'Kolhapur', 'Jalgaon', 'Akola',
    'Latur', 'Chandrapur', 'Dhule', 'Ahmednagar', 'Nanded',
    'Sangli', 'Parbhani', 'Satara', 'Beed', 'Ratnagiri'
  ];

  useEffect(() => {
    axios.get('https://eventify-modern-1.onrender.com/api/venues')
      .then(res => setVenues(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (city) {
      const filtered = venues.filter(venue => venue.city.toLowerCase() === city.toLowerCase());
      setFilteredVenues(filtered);
    } else {
      setFilteredVenues(venues);
    }
  }, [city, venues]);

  const handleReviewChange = (venueId, value) => {
    setReviewInputs({ ...reviewInputs, [venueId]: value });
  };

  const submitReview = (venueId) => {
    const reviewer = user?.email || 'Anonymous';

    axios.post(`https://eventify-modern-1.onrender.com/api/venues/${venueId}/reviews`, {
      user: reviewer,
      comment: reviewInputs[venueId]
    })
      .then(() => {
        alert('✅ Review Submitted');
        setReviewInputs({ ...reviewInputs, [venueId]: '' });
        window.location.reload();
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Explore Venues</h1>

      <select onChange={(e) => setCity(e.target.value)} className="border p-2 rounded mb-4 w-full">
        <option value="">Select City</option>
        {majorCities.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredVenues.map(venue => (
          <div key={venue._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{venue.name}</h2>
            <p className="text-gray-600">City: {venue.city}</p>
            <p className="text-gray-600">Contact: {venue.contact}</p>

            {venue.review && <p className="mt-2 text-green-700">Review: {venue.review}</p>}

            {venue.reviews && venue.reviews.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">User Reviews:</h3>
                {venue.reviews.map((rev, index) => (
                  <p key={index} className="text-gray-700">- {rev.user}: {rev.comment}</p>
                ))}
              </div>
            )}

      <div key={venue._id} className="border p-4 rounded shadow">
        <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover rounded mb-2" />
            <h2 className="text-xl font-bold">{venue.name}</h2>
            <p className="text-gray-600">City: {venue.city}</p>
            <p className="text-gray-600">Contact: {venue.contact}</p>
          
            {venue.review && <p className="mt-2 text-green-700">Review: {venue.review}</p>}
              <div className="mt-2">
            {'⭐'.repeat(venue.rating)} {venue.rating}/5
       </div>
    </div>

            
            {user && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Write your review"
                  value={reviewInputs[venue._id] || ''}
                  onChange={(e) => handleReviewChange(venue._id, e.target.value)}
                  className="w-full border p-2 rounded mb-2"
                />
                <button
                  onClick={() => submitReview(venue._id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Submit Review
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
