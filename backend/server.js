require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const Event = require('./eventModel');
const Contact = require('./contactModel');
const User = require('./userModel');
const ResetToken = require('./resetTokenModel');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// ✅ Nodemailer Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

// ======================== AUTH ROUTES ========================

// ✅ Register User
app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', newUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Login User
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        res.json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Forgot Password - Send Email
app.post('/api/request-reset', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        await ResetToken.deleteMany({ userId: user._id });

        const token = crypto.randomBytes(32).toString('hex');
        await ResetToken.create({ userId: user._id, token });

        const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

        await transporter.sendMail({
            from: 'Eventify <bpro855203@gmail.com>',
            to: email,
            subject: 'Password Reset Request - Eventify',
            html: `<p>Click the link to reset your password: <a href="${resetLink}">${resetLink}</a></p>`
        });

        res.json({ message: '✅ Reset link sent to your email.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '❌ Error sending reset link' });
    }
});

// ✅ Reset Password
app.post('/api/reset-password/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        const resetToken = await ResetToken.findOne({ token });
        if (!resetToken) return res.status(400).json({ message: 'Invalid or expired token' });

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate(resetToken.userId, { password: hashedPassword });
        await ResetToken.deleteOne({ token });

        res.json({ message: '✅ Password reset successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '❌ Error resetting password' });
    }
});

// ======================== EVENT ROUTES ========================

// ✅ Create New Event with userId
app.post('/api/events', async (req, res) => {
    try {
        const newEvent = await Event.create({
            title: req.body.title,
            date: req.body.date,
            location: req.body.location,
            description: req.body.description,
            createdBy: req.body.userId
        });
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get Events specific to userId
app.get('/api/events', async (req, res) => {
    try {
        const { userId } = req.query;
        const events = await Event.find({ createdBy: userId });
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Update Event
app.put('/api/events/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });
        res.json({ message: 'Event updated successfully', updatedEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Delete Event
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

// ✅ Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
