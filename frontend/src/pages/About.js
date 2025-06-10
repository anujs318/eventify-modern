import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-3xl mx-auto text-gray-800"
    >
      <h1 className="text-3xl font-bold mb-4 text-blue-700">About Eventify</h1>
      <p className="mb-4 text-lg">
        Eventify is a modern event management platform that helps individuals, organizations, and businesses plan, manage, and celebrate events of all scales.
      </p>
      <p className="mb-4 text-lg">
        From intimate family gatherings to grand corporate conferences, we handle every detail—from invites and venues to catering and coordination.
      </p>
      <p className="mb-4 text-lg">
        Our mission is to make event planning stress-free and enjoyable. With Eventify, your event is in expert hands.
      </p>
      <p className="text-lg font-medium">✨ Let’s bring your dream event to life!</p>
    </motion.div>
  );
}
