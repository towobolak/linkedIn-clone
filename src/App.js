import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Dashboard" element={<Dashboard />} /> {/* Route for Dashboard */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;