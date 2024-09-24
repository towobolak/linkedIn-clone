import React from 'react';
import ScrollPage from './ScrollPage';
import {useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate(); 
  const handleSubmit7 = (e) => {e.preventDefault();
    console.log('Personal-Information:');
    window.location.reload();
  };
  const handleSubmit1 = (e) => {e.preventDefault();
      console.log('Inbox:');
      navigate('../src/MessageInbox');
  };
  const handleSubmit2 = (e) => {e.preventDefault();
    console.log('Personal-Information:');
    navigate('../src/ProfileInformation');
  };
  const handleSubmit3 = (e) => {e.preventDefault();
    console.log('Add Friends');
    navigate('../src/MyNetwork');
  };
  const handleSubmit4 = (e) => {e.preventDefault();
    console.log('New Post');
    navigate('../src/AddPost');
  };
  const handleSubmit5 = (e) => {e.preventDefault();
    console.log('Notifications');
    navigate('../src/NotificationTab');
  };
  const handleSubmit6 = (e) => {e.preventDefault();
    console.log('Available Jobs');
    navigate('../src/JobTab');
  };


  return (
    <div>

        <div className='dash-header'>
            <div className='profile1'>
                    <button onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
            </div>

            <div className='search'>
                    <img className='linkedin-logo' src={require('./images/linkedin-svgrepo-com.png')} />
                    <input type='text' name='search' placeholder='Search...'></input>
               
            </div>
            

            <div className='mes-icon1'>
                <button onClick={handleSubmit1}><img className='mes-icon' src={require('./images/message-svgrepo-com.png')} /></button>
            </div>
        </div>

        <div className='dash-header3'>
            <div className='search'>
                <img className='linkedin-logo' src={require('./images/linkedin-svgrepo-com.png')} />
                <input type='text' name='search' placeholder='Search...'></input>
            </div>

            <div>
                <button className='home-tab' onClick={handleSubmit2}><img className='footer-icon' src={require('./images/home-1-svgrepo-com.png')} />Home</button>

                <button className='my-network' onClick={handleSubmit2}><img className='footer-icon' src={require('./images/people-svgrepo-com.png')} />My Network</button>

                <button className='jobs-tab' onClick={handleSubmit2}><img className='footer-icon' src={require('./images/briefcase-svgrepo-com.png')} />Jobs</button>

                <button className='mes-icon1' onClick={handleSubmit1}><img className='mes-icon' src={require('./images/message-svgrepo-com.png')} /></button>

                <button className='notifications-tab' onClick={handleSubmit2}><img className='footer-icon' src={require('./images/bell-svgrepo-com.png')} />Notifications</button>

                <div className='profile1'>
                        <button onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
                </div>
            </div>
        </div>
        
        <ScrollPage />

      <div className='footer1'>
        <button className='home-tab' onClick={handleSubmit7}><img className='footer-icon' src={require('./images/home-1-svgrepo-com.png')} />Home</button>

        <button className='my-network' onClick={handleSubmit3}><img className='footer-icon' src={require('./images/people-svgrepo-com.png')} />My Network</button>

        <button className='post-tab' onClick={handleSubmit4}><img className='footer-icon' src={require('./images/plus-square-svgrepo-com.png')} />Post</button>

        <button className='notifications-tab' onClick={handleSubmit5}><img className='footer-icon' src={require('./images/bell-svgrepo-com.png')} />Notifications</button>

        <button className='jobs-tab' onClick={handleSubmit6}><img className='footer-icon' src={require('./images/briefcase-svgrepo-com.png')} />Jobs</button>
      </div>

    </div>
  );
}

export default Dashboard;