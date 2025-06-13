import React, { useState } from 'react';
import axios from 'axios';

export default function InviteGuest() {
    const [formData, setFormData] = useState({
        guestEmail: '',
        eventTitle: '',
        eventDate: '',
        eventLocation: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://eventify-modern-1.onrender.com/api/send-invite', formData)
            .then(res => alert(res.data.message))
            .catch(err => alert('❌ Failed to send invitation'));
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-blue-700">Send Invitation</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" name="guestEmail" placeholder="Guest Email" onChange={handleChange} className="w-full p-2 border rounded" required />
                <input type="text" name="eventTitle" placeholder="Event Title" onChange={handleChange} className="w-full p-2 border rounded" required />
                <input type="text" name="eventDate" placeholder="Event Date" onChange={handleChange} className="w-full p-2 border rounded" required />
                <input type="text" name="eventLocation" placeholder="Event Location" onChange={handleChange} className="w-full p-2 border rounded" required />
                <textarea name="message" placeholder="Custom Message" onChange={handleChange} className="w-full p-2 border rounded" rows="4"></textarea>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Invitation</button>
            </form>
        </div>
    );
}
