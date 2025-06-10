import React from 'react';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515162305283-8f1fbd7b9a98?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-white/80 p-10 rounded-xl shadow-lg max-w-2xl">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6 drop-shadow-md">
          Welcome to Eventify 🎉
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          We create unforgettable events with expert planning, beautiful themes, and flawless execution.
        </p>
        <a href="/services">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
            Explore Our Services
          </button>
        </a>
      </div>
    </div>
  );
}
