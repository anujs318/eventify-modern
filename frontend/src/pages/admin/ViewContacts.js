import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios.get('https://eventify-modern-1.onrender.com/api/contacts')
      .then(res => setContacts(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Messages</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id} className="text-center border-b">
              <td className="p-2">{contact.name}</td>
              <td className="p-2">{contact.email}</td>
              <td className="p-2">{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
