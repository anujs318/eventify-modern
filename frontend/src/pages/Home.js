import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-6"
      style={{
        backgroundImage:"url('/maharashtra.jpg')",

      }}
    >
      <div className="bg-white/80 p-10 rounded-xl shadow-lg max-w-3xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-blue-800 mb-6 drop-shadow-md"
        >
          Welcome to Eventify 🎉
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl text-gray-700 mb-6"
        >
          Organizing unforgettable events across Mumbai, Pune, Nashik, Nagpur, Ratnagiri, Latur, and Kolhapur with a touch of Maharashtra's rich heritage.
        </motion.p>

        <motion.a
          href="/services"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
            Explore Our Services
          </button>
        </motion.a>
      </div>

      <motion.div
        className="mt-10 bg-white/70 p-6 rounded-xl shadow max-w-3xl text-gray-800 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Why Choose Eventify Maharashtra?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>🎯 Expert planning in <strong>Maharashtra’s iconic cities</strong> like Mumbai, Pune, Nashik, Nagpur and Many More.</li>
          <li>🥁 Traditional <strong>Lezim, Dhol, and Palkhi processions</strong> for cultural events.</li>
          <li>🏛️ Premium venues including <strong>Shivneri, Raigad, and Lavasa</strong>.</li>
          <li>🍽️ Custom <strong>Maharashtrian catering</strong> including Puran Poli, Modak, Misal Pav, and more.</li>
          <li>🎨 Maharashtrian themes with <strong>Paithani sarees, rangoli, and flower decorations</strong>.</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
