import React from 'react';
import { motion } from 'framer-motion';

export default function VenueBooking() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-3xl mx-auto text-gray-800"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-700">🏛️ Venue Booking</h1>
      <p className="mb-4 text-lg">
        We offer access to the best venues in Maharashtra, from luxurious banquet halls and beach resorts to traditional cultural grounds and open-air lawns.
      </p>
      <p className="mb-4 text-lg">
        Our venue booking services include hassle-free arrangements, site visits, and complete setup support.
      </p>
      <ul className="list-disc ml-6 text-lg space-y-2">
        <li>Wide selection of venues to fit your theme and budget</li>
        <li>Full setup and technical support at the venue</li>
        <li>Customized seating and stage arrangements</li>
        <li>On-site event coordination for smooth execution</li>
      </ul>
      <p className="mt-6 text-lg font-semibold">
        ✅ Book the perfect venue with us and make your event unforgettable!
      </p>
    </motion.div>
  );
}
