import React from 'react';
import { motion } from 'framer-motion';

export default function Photography() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-3xl mx-auto text-gray-800"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-700">📸 Photography & Videography</h1>
      <p className="mb-4 text-lg">
        Capture the magic of your event with our professional photographers and videographers.
      </p>
      <ul className="list-disc ml-6 text-lg space-y-2">
        <li>High-quality event coverage from multiple angles</li>
        <li>Custom photoshoots and creative video edits</li>
        <li>Instant photo delivery options</li>
        <li>Drone photography and cinematic event filming</li>
      </ul>
      <p className="mt-6 text-lg font-semibold">
        ✅ Let us preserve your memories with stunning visuals!
      </p>
    </motion.div>
  );
}
