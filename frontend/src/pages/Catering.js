import React from 'react';
import { motion } from 'framer-motion';

export default function Catering() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-3xl mx-auto text-gray-800"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-700">🍽️ Catering</h1>
      <p className="mb-4 text-lg">
        Delight your guests with a variety of delicious food and beverages tailored to your event.
      </p>
      <ul className="list-disc ml-6 text-lg space-y-2">
        <li>Wide range of Maharashtrian, North Indian, and international cuisines</li>
        <li>On-site live food counters and buffet services</li>
        <li>Special arrangements for dietary preferences</li>
        <li>Professional serving staff with hygienic practices</li>
      </ul>
      <p className="mt-6 text-lg font-semibold">
        ✅ Let us serve happiness on your special day!
      </p>
    </motion.div>
  );
}
