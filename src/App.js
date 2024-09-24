import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import MessageInbox from './MessageInbox';
import ProfileInformation from './ProfileInformation';
import MyNetwork from './MyNetwork';
import NotificationTab from './NotificationTab';
import JobTab from './JobTab';
import AddPost from './AddPost';

const App = () => {
  return (
    <HashRouter>
      <Routes>
       
          <Route path='/' element={ <LoginForm />} />
          <Route path='/Dashboard' element={ <Dashboard />} />
          <Route path='/src/MessageInbox' element={ <MessageInbox />} />
          <Route path='/src/ProfileInformation' element={ <ProfileInformation />} />
          <Route path='/src/MyNetwork' element={ <MyNetwork />} />
          <Route path='/src/NotificationTab' element={ <NotificationTab />} />
          <Route path='/src/JobTab' element={ <JobTab />} />
          <Route path='/src/AddPost' element={ <AddPost />} />

      </Routes>
    </HashRouter>
  );
}

export default App;