require('dotenv').config();
const mongoose = require('mongoose');
const Venue = require('./venueModel');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

const venues = [
    { name: 'Grand Palace', city: 'Mumbai', contact: '9876543210', review: 'Excellent venue!' },
    { name: 'Blue Lagoon', city: 'Pune', contact: '9823456789', review: 'Very spacious and well maintained.' },
    { name: 'Royal Garden', city: 'Nashik', contact: '9801234567', review: 'Good service and beautiful decor.' },
    { name: 'Dream Plaza', city: 'Nagpur', contact: '9876501234', review: 'Perfect for weddings.' },
    { name: 'City Banquet', city: 'Aurangabad', contact: '9856473821', review: 'Great food and seating.' },
    { name: 'Celebration Hall', city: 'Solapur', contact: '9865432100', review: 'Affordable and clean.' },
    { name: 'Event Hub', city: 'Kolhapur', contact: '9834567890', review: 'Loved the ambiance.' },
    { name: 'Sunrise Venue', city: 'Amravati', contact: '9898765432', review: 'Fantastic management team.' },
    { name: 'Classic Point', city: 'Latur', contact: '9812345670', review: 'Perfect for corporate events.' },
    { name: 'Golden Hall', city: 'Jalgaon', contact: '9876543215', review: 'Spacious and modern.' }
];

const seedVenues = async () => {
    try {
        await Venue.deleteMany();
        await Venue.insertMany(venues);
        console.log('Sample venues added successfully!');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedVenues();
