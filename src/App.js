import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <HashRouter>
      <Routes>
       
          <Route path='/' element={ <LoginForm />} />
          <Route path='/Dashboard' element={ <Dashboard />} />
        
      </Routes>
    </HashRouter>
  );
}

export default App;