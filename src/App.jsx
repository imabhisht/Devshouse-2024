import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Editor from "./pages/editor/App";
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Initial login state

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoggedIn === 'true');
  }, []);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'password') { // Example credentials
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true'); // Store login state
    } else {
      console.error('Invalid login credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Clear stored data
  };

  return (
    <Router>
      <Routes>
        {/* Protected Routes */}
        {/* <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              () => <h1>Dashboard</h1>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        /> */}

        {/* Editor Route */}
        <Route
          path="/editor"
          element={<Editor />
          }
        />
        
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Public Route */}
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <SignInForm onLogin={handleLogin} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;