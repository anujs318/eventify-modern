const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  city: String,
  contact: String,
  review: String, // Existing review field
  image: String, // ⭐ Image URL
  rating: Number,//⭐ Star rating (1-5)
  reviews: [      // ✅ Add this: Array of reviews
    {
      user: String,
      comment: String,
      createdAt: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('Venue', venueSchema);
