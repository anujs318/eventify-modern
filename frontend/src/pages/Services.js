import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Our Services</h1>
      <ul className="space-y-4 text-gray-700 text-lg">
        <li>
          <Link to="/event-planning" className="hover:text-blue-600 transition duration-300">
            🎯 <strong>Event Planning:</strong> From idea to execution, we help you design the perfect event.
          </Link>
        </li>
        <li>
          <Link to="/venue-booking" className="hover:text-blue-600 transition duration-300">
            🏛️ <strong>Venue Booking:</strong> Choose from top-rated venues with full setup support.
          </Link>
        </li>
        <li>
          <Link to="/theme-decoration" className="hover:text-blue-600 transition duration-300">
            🎉 <strong>Theme & Decoration:</strong> Custom themes, floral decor, stage setups, and lighting.
          </Link>
        </li>
        <li>
          <Link to="/guest-management" className="hover:text-blue-600 transition duration-300">
            🎙️ <strong>Guest Management:</strong> Smooth guest check-ins, invite handling, and seating plans.
          </Link>
        </li>
        <li>
          <Link to="/photography" className="hover:text-blue-600 transition duration-300">
            📸 <strong>Photography & Videography:</strong> Capture every special moment professionally.
          </Link>
        </li>
        <li>
          <Link to="/catering" className="hover:text-blue-600 transition duration-300">
            🍽️ <strong>Catering:</strong> Diverse menu options with on-site service.
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}
