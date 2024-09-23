import React from 'react';

function ScrollPage() {
  return (
    <div>

        <div className='dash-header1'>
            <div className='profile1'>
                    <img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} />
            </div>

            <div className='search1'>
                <label>Towobola Olakunle</label>
                <p>Budding Mechanical Engineer</p>            
            </div>

            <div className='post'>
                <p>We’re proud to be the stage for Africa’s greatest university athletes. 🌍
                Join us at UNILAG and LASU as we host the 11th FASU Games.
                Come, let’s Unite, Compete and Excel 🙌🏽🥇</p>
                <img className='mes-icon' src={require('./images/message-svgrepo-com.png')} />
                
            </div>
        </div>

      <div className='footer2'>
        <button className='like'>
            <img className='footer-icon' src={require('./images/like-svgrepo-com.png')} />
            <p>Like</p>
        </button>
        <button className='comment'>
            <img className='footer-icon' src={require('./images/comment-2-svgrepo-com.png')} />
            <p>Comment</p>
        </button>
        <button className='share'>
            <img className='footer-icon' src={require('./images/share-arrow-svgrepo-com.png')} />
            <p>Share</p>
        </button>
        <button className='send'>
            <img className='footer-icon' src={require('./images/share-svgrepo-com.png')} />
            <p>Send</p>
        </button>
      </div>

    </div>
  );
}

export default ScrollPage;