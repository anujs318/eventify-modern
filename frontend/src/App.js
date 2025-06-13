import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';

import EventPlanning from './pages/EventPlanning';
import VenueBooking from './pages/VenueBooking';
import ThemeDecoration from './pages/ThemeDecoration';
import GuestManagement from './pages/GuestManagement';
import Photography from './pages/Photography';
import Catering from './pages/Catering';

import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './pages/AdminDashboard';

import ViewUsers from './pages/admin/ViewUsers'; 
import ViewContacts from './pages/admin/ViewContacts'; // ✅ Import
import ViewVenues from './pages/admin/ViewVenues'; // ✅ Import
import AddVenue from './pages/admin/AddVenue'; // ✅ Import
import VenueList from './pages/VenueList';
import InviteGuest from './pages/InviteGuest';









<Route path="/admin/users" element={<ViewUsers />} /> 


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/event-planning" element={<EventPlanning />} />
          <Route path="/venue-booking" element={<VenueBooking />} />
          <Route path="/theme-decoration" element={<ThemeDecoration />} />
          <Route path="/guest-management" element={<GuestManagement />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<ViewUsers />} />     
          <Route path="/admin/contacts" element={<ViewContacts />} />
          <Route path="/admin/venues" element={<ViewVenues />} />
          <Route path="/admin/add-venue" element={<AddVenue />} />
          <Route path="/venues" element={<VenueList />} />
          <Route path="/invite" element={<InviteGuest />} />

          {/* 🔐 Route Protection added here */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
