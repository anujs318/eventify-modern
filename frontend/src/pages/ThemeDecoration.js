import React from 'react';
import { motion } from 'framer-motion';

export default function ThemeDecoration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-3xl mx-auto text-gray-800"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-700">🎉 Theme & Decoration</h1>
      <p className="mb-4 text-lg">
        We bring your dream event to life with stunning themes, elegant decorations, and mesmerizing setups.
      </p>
      <p className="mb-4 text-lg">
        Whether it's a cultural Maharashtrian wedding, a modern corporate event, or a vibrant birthday party, we customize the decor to match your vision.
      </p>
      <ul className="list-disc ml-6 text-lg space-y-2">
        <li>Stage and floral decorations with a wide variety of themes</li>
        <li>Lighting, sound, and visual effects for a captivating experience</li>
        <li>Custom welcome boards, photo booths, and entry arches</li>
        <li>Theme-based seating arrangements and table settings</li>
      </ul>
      <p className="mt-6 text-lg font-semibold">
        ✅ Let us make your event look magical with our professional decoration services!
      </p>
    </motion.div>
  );
}
