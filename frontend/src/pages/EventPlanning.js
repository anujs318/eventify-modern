import React from 'react';
import { motion } from 'framer-motion';

export default function EventPlanning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-3xl mx-auto text-gray-800"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-700">🎯 Event Planning</h1>
      <p className="mb-4 text-lg">
        We help you plan the perfect event from start to finish, whether it's a corporate meeting, wedding, birthday, or cultural festival.
      </p>
      <p className="mb-4 text-lg">
        Our experienced team works closely with you to design, coordinate, and execute your event with precision and creativity.
      </p>
      <ul className="list-disc ml-6 text-lg space-y-2">
        <li>Personalized event planning consultation</li>
        <li>Detailed timeline and budget management</li>
        <li>Vendor coordination and scheduling</li>
        <li>Theme, decor, and guest management planning</li>
      </ul>
      <p className="mt-6 text-lg font-semibold">
        ✅ Let’s turn your ideas into unforgettable experiences.
      </p>
    </motion.div>
  );
}
