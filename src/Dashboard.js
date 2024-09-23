import React from 'react';

function Dashboard() {
  return (
    <div>

        <div className='dash-header'>
            <div className='profile1'>
                    <img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} />
            </div>

            <div className='search'>
                    <input type='text' name='search' placeholder='Search...'></input>
               
            </div>

            <div className='mes-icon1'>
                <button>
                <img className='mes-icon' src={require('./images/message-svgrepo-com.png')} />
                </button>
            </div>
        </div>

      <div className='main-scroll'>
        scroll
      </div>

      <div className='footer1'>
        <button className='home-tab'>
            <img className='footer-icon' src={require('./images/home-1-svgrepo-com.png')} />
            <p>Home</p>
        </button>
        <button className='my-network'>
            <img className='footer-icon' src={require('./images/people-svgrepo-com.png')} />
            <p>My Network</p>
        </button>
        <button className='post-tab'>
            <img className='footer-icon' src={require('./images/plus-square-svgrepo-com.png')} />
            <p>Post</p>
        </button>
        <button className='notifications-tab'>
            <img className='footer-icon' src={require('./images/bell-svgrepo-com.png')} />
            <p>Notifications</p>
        </button>
        <button className='jobs-tab'>
            <img className='footer-icon' src={require('./images/briefcase-svgrepo-com.png')} />
            <p>Jobs</p>
        </button>
      </div>

    </div>
  );
}

export default Dashboard;