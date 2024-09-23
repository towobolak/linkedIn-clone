import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <div className='container'>

        </div>
        <div>
        <Dashboard />
        </div>
      </div>
    </Router>
  );
}

export default App;