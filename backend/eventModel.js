const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  location: String,
  description: String,
  createdBy: String, // ✅ New field to store user ID or email
});

module.exports = mongoose.model('Event', eventSchema);
