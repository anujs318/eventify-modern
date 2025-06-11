import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    alert('❌ Please login first!');
    return <Navigate to="/login" />;
  }

  return children;
}
