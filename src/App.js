import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <HashRouter>
      <Routes>
       
          <Route path='/' element={ <Dashboard />} />
        
      </Routes>
    </HashRouter>
  );
}

export default App;