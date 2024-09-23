import React from 'react';

function Dashboard() {
  return (
    <div>

        <div className='dash-header'>
            <div className='profile1'>
                    <img className='profile' src={require('./PASSPORT PHOTO.jpg')} />
            </div>

            <div className='search'>
                    <input type='text' name='search' placeholder='Search...'></input>
               
            </div>

            <div className='mes-icon1'>
                <button>
                <img className='mes-icon' src={require('./message-svgrepo-com.png')} />
                </button>
            </div>
        </div>

      <div className='main-scroll'>
        scroll
      </div>

      <div className='footer1'>
        <button className='home-tab'>1</button>
        <button className='my-network'>2</button>
        <button className='post-tab'>3</button>
        <button className='notifications-tab'>4</button>
        <button className='jobs-tab'>5</button>
      </div>

    </div>
  );
}

export default Dashboard;