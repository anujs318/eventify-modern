const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Event = require('./eventModel');
const Contact = require('./contactModel'); // ✅ Add this line

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bpro2855203:9876Mongodb@clusterthurst.aechtt1.mongodb.net/?retryWrites=true&w=majority&appName=Clusterthurst')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Get All Events
app.get('/api/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create New Event
app.post('/api/events', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update Event
app.put('/api/events/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });
        res.json({ message: 'Event updated successfully', updatedEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete Event
app.delete('/api/events/:id', async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.json({ message: 'Event deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Contact API
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json({ message: 'Contact saved successfully', newContact });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
