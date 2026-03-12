import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  useEffect(() => {
    // Initialize with sample users for demo purposes
    const existingUsers = localStorage.getItem('spendwise_users');
    if (!existingUsers) {
      const demoUsers = [
        {
          id: 1,
          firstName: 'Demo',
          lastName: 'User',
          email: 'demo@example.com',
          password: 'demo123',
          phone: '+1 (555) 123-4567',
          address: '123 Demo Street',
          createdAt: new Date().toISOString(),
        },
      ];
      localStorage.setItem('spendwise_users', JSON.stringify(demoUsers));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
