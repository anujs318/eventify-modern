import React from 'react';
import { motion } from 'framer-motion';

export default function GuestManagement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-3xl mx-auto text-gray-800"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-700">🎙️ Guest Management</h1>
      <p className="mb-4 text-lg">
        We ensure your guests feel welcomed and well taken care of throughout the event.
      </p>
      <ul className="list-disc ml-6 text-lg space-y-2">
        <li>Seamless guest check-in and registration</li>
        <li>Invitation and RSVP tracking</li>
        <li>Custom seating arrangements</li>
        <li>On-site guest assistance and coordination</li>
      </ul>
      <p className="mt-6 text-lg font-semibold">
        ✅ We handle your guests with care, so you can focus on your event!
      </p>
    </motion.div>
  );
}
