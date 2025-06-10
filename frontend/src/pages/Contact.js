import React from 'react';

export default function Contact() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h1>
      <p className="text-gray-700 mb-4">Have a question or need a quote? Reach out to us:</p>
      <div className="text-lg space-y-2 text-gray-800">
        <p>📞 Phone: +91 98765 43210</p>
        <p>✉️ Email: eventify@support.com</p>
        <p>📍 Address: 123 Main Road, Mumbai, Maharashtra, India</p>
      </div>

      <form className="mt-8 space-y-4 bg-white shadow-md p-6 rounded">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Your Message" rows="4" className="w-full border p-2 rounded"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
}
