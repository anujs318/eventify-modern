import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://eventify-modern-1.onrender.com/api/users')  // Update with your backend URL
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Registered Users</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="p-2">Email</th>
            <th className="p-2">User ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="text-center border-b">
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
