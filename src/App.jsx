import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Home from './pages/Home';  // Home or any other component
import Login from './pages/LoginPage';  // Home or any other component
import Jobs from './pages/jobListing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
