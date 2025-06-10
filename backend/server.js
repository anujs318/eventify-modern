const Event = require('./eventModel');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// MongoDB Connection
mongoose.connect('mongodb+srv://bpro2855203:9876Mongodb@clusterthurst.aechtt1.mongodb.net/?retryWrites=true&w=majority&appName=Clusterthurst')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

const app = express();
app.use(cors());
app.use(express.json());

// Sample API
app.get('/', (req, res) => {
    res.send('Backend API is working!');
});

// ✅ POST API: Create a New Event
app.post('/api/events', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
});

// ✅ GET API: Fetch All Events
app.get('/api/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
});

// Delete Event (DELETE) ✅ Add this here
app.delete('/api/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting event' });
  }
});

// Start Server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
