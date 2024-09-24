import React from 'react';
import {useNavigate } from "react-router-dom";


function ScrollPage() {
    const navigate = useNavigate(); 
    const handleSubmit2 = (e) => {e.preventDefault();
        console.log('Personal-Information:');
        navigate('../src/ProfileInformation');
      };
      const showAlert = () => {
        window.alert("You are on a demo account. This function is disabled!");
      };
      
  return (
    <div className='scroller'>

       <div className='leftSide-bar'>
            <div>
            <img className='profile-pic' src={require('./images/PASSPORT PHOTO.jpg')} />
 
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
       </div>

       <div className='content-container'>
       <div className='div1'>
            <div className='dash-header2'>
                
                <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Towobola Olakunle</h3><p>Budding Mechanical Engineer</p></button>           
                    </div>
                </div>

                <div className='post'>
                    <p>We’re proud to be the stage for Africa’s greatest university athletes. 🌍
                    Join us at UNILAG and LASU as we host the 11th FASU Games.
                    Come, let’s Unite, Compete and Excel 🙌🏽🥇</p>
                  <div className='imagess'>
                  <img className='mes-icon2' src={require('./images/2.jpg')} />  
                    <img className='mes-icon3' src={require('./images/3.jpg')} />  
                    <img className='mes-icon4' src={require('./images/4.jpg')} />  
                  </div>
                </div>
            </div>

            <div className='footer2'>
                <button className='like' onClick={showAlert}><img className='footer-icon1' src={require('./images/like-svgrepo-com.png')} /><p>Like</p></button>

                <button className='comment' onClick={showAlert}><img className='footer-icon1' src={require('./images/comment-2-svgrepo-com.png')} /><p>Comment</p></button>

                <button className='share' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-arrow-svgrepo-com.png')} /><p>Share</p></button>

                <button className='send' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-svgrepo-com.png')} /><p>Send</p></button>
            </div>

        </div>
        <div className='div2'>
            <div className='dash-header2'>
                
            <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Towobola Olakunle</h3><p>Budding Mechanical Engineer</p></button>           
                    </div>
                </div>

                <div className='post'>
                    <p>We’re proud to be the stage for Africa’s greatest university athletes. 🌍
                    Join us at UNILAG and LASU as we host the 11th FASU Games.
                    Come, let’s Unite, Compete and Excel 🙌🏽🥇</p>
                    <div className='imagess'>
                    <img className='mes-icon2' src={require('./images/26.jpg')} />  
                    <img className='mes-icon3' src={require('./images/27.jpg')} />  
                    <img className='mes-icon6' src={require('./images/28.jpg')} />
                    <img className='mes-icon6' src={require('./images/29.jpg')} />    
                  </div>                    
                </div>
            </div>

           <div className='footer2'>
                <button className='like' onClick={showAlert}><img className='footer-icon1' src={require('./images/like-svgrepo-com.png')} /><p>Like</p></button>

                <button className='comment' onClick={showAlert}><img className='footer-icon1' src={require('./images/comment-2-svgrepo-com.png')} /><p>Comment</p></button>

                <button className='share' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-arrow-svgrepo-com.png')} /><p>Share</p></button>

                <button className='send' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-svgrepo-com.png')} /><p>Send</p></button>
            </div>
        </div>        
        <div className='div2'>
            <div className='dash-header2'>
                
            <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Towobola Olakunle</h3><p>Budding Mechanical Engineer</p></button>           
                    </div>
                </div>

                <div className='post'>
                    <p>We’re proud to be the stage for Africa’s greatest university athletes. 🌍
                    Join us at UNILAG and LASU as we host the 11th FASU Games.
                    Come, let’s Unite, Compete and Excel 🙌🏽🥇</p>
                    <div className='imagess'>
                      <img className='mes-icon2' src={require('./images/5.jpg')} />  
                      <img className='mes-icon3' src={require('./images/6.jpg')} />  
                      <img className='mes-icon4' src={require('./images/7.jpg')} />  
                  </div>                
                </div>
            </div>

            <div className='footer2'>
                <button className='like' onClick={showAlert}><img className='footer-icon1' src={require('./images/like-svgrepo-com.png')} /><p>Like</p></button>

                <button className='comment' onClick={showAlert}><img className='footer-icon1' src={require('./images/comment-2-svgrepo-com.png')} /><p>Comment</p></button>

                <button className='share' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-arrow-svgrepo-com.png')} /><p>Share</p></button>

                <button className='send' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-svgrepo-com.png')} /><p>Send</p></button>
            </div>
        </div>
        <div className='div2'>
            <div className='dash-header2'>
                
            <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Towobola Olakunle</h3><p>Budding Mechanical Engineer</p></button>           
                    </div>
                </div>

                <div className='post'>
                    <p>We’re proud to be the stage for Africa’s greatest university athletes. 🌍
                    Join us at UNILAG and LASU as we host the 11th FASU Games.
                    Come, let’s Unite, Compete and Excel 🙌🏽🥇</p>
                    <div className='imagess'>
                        <img className='mes-icon2' src={require('./images/8.jpg')} />  
                        <img className='mes-icon3' src={require('./images/9.jpg')} />  
                        <img className='mes-icon4' src={require('./images/10.jpg')} />  
                    </div>                
                  </div>
            </div>

            <div className='footer2'>
                <button className='like' onClick={showAlert}><img className='footer-icon1' src={require('./images/like-svgrepo-com.png')} /><p>Like</p></button>

                <button className='comment' onClick={showAlert}><img className='footer-icon1' src={require('./images/comment-2-svgrepo-com.png')} /><p>Comment</p></button>

                <button className='share' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-arrow-svgrepo-com.png')} /><p>Share</p></button>

                <button className='send' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-svgrepo-com.png')} /><p>Send</p></button>
            </div>
        </div>
        <div className='div2'>
            <div className='dash-header2'>
                
            <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Towobola Olakunle</h3><p>Budding Mechanical Engineer</p></button>           
                    </div>
                </div>

                <div className='post'>
                    <p>We’re proud to be the stage for Africa’s greatest university athletes. 🌍
                    Join us at UNILAG and LASU as we host the 11th FASU Games.
                    Come, let’s Unite, Compete and Excel 🙌🏽🥇</p>
                    <div className='imagess'>
                    <img className='mes-icon2' src={require('./images/11.jpg')} />  
                    <img className='mes-icon3' src={require('./images/12.jpg')} />  
                    <img className='mes-icon4' src={require('./images/13.jpg')} />
                    <img className='mes-icon5' src={require('./images/14.jpg')} />    
                  </div>                    
                </div>
            </div>

            <div className='footer2'>
                <button className='like' onClick={showAlert}><img className='footer-icon1' src={require('./images/like-svgrepo-com.png')} /><p>Like</p></button>

                <button className='comment' onClick={showAlert}><img className='footer-icon1' src={require('./images/comment-2-svgrepo-com.png')} /><p>Comment</p></button>

                <button className='share' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-arrow-svgrepo-com.png')} /><p>Share</p></button>

                <button className='send' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-svgrepo-com.png')} /><p>Send</p></button>
            </div>
        </div>
        <div className='div2'>
            <div className='dash-header2'>
                
            <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Towobola Olakunle</h3><p>Budding Mechanical Engineer</p></button>           
                    </div>
                </div>

                <div className='post'>
                    <p>We’re proud to be the stage for Africa’s greatest university athletes. 🌍
                    Join us at UNILAG and LASU as we host the 11th FASU Games.
                    Come, let’s Unite, Compete and Excel 🙌🏽🥇</p>
                    <div className='imagess'>
                        <img className='mes-icon3' src={require('./images/16.jpg')} />  
                        <img className='mes-icon4' src={require('./images/17.jpg')} />
                        <img className='mes-icon5' src={require('./images/18.jpg')} />
                        <img className='mes-icon2' src={require('./images/15.jpg')} />     
                      </div>                 
                </div>
            </div>

            <div className='footer2'>
                <button className='like' onClick={showAlert}><img className='footer-icon1' src={require('./images/like-svgrepo-com.png')} /><p>Like</p></button>

                <button className='comment' onClick={showAlert}><img className='footer-icon1' src={require('./images/comment-2-svgrepo-com.png')} /><p>Comment</p></button>

                <button className='share' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-arrow-svgrepo-com.png')} /><p>Share</p></button>

                <button className='send' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-svgrepo-com.png')} /><p>Send</p></button>
            </div>
        </div>
        <div className='div2'>
            <div className='dash-header2'>
                
            <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Towobola Olakunle</h3><p>Budding Mechanical Engineer</p></button>           
                    </div>
                </div>

                <div className='post'>
                    <p>We’re proud to be the stage for Africa’s greatest university athletes. 🌍
                    Join us at UNILAG and LASU as we host the 11th FASU Games.
                    Come, let’s Unite, Compete and Excel 🙌🏽🥇</p>
                    <div className='imagess'>
                      <img className='mes-icon2' src={require('./images/19.jpg')} />  
                      <img className='mes-icon3' src={require('./images/20.jpg')} />  
                      <img className='mes-icon4' src={require('./images/21.jpg')} />
                      <img className='mes-icon5' src={require('./images/22.jpg')} />    
                    </div> 
                </div>
            </div>

            <div className='footer2'>
                <button className='like' onClick={showAlert}><img className='footer-icon1' src={require('./images/like-svgrepo-com.png')} /><p>Like</p></button>

                <button className='comment' onClick={showAlert}><img className='footer-icon1' src={require('./images/comment-2-svgrepo-com.png')} /><p>Comment</p></button>

                <button className='share' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-arrow-svgrepo-com.png')} /><p>Share</p></button>

                <button className='send' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-svgrepo-com.png')} /><p>Send</p></button>
            </div>
        </div>
        <div className='div8'>
            <div className='dash-header2'>
                
            <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/PASSPORT PHOTO.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Towobola Olakunle</h3><p>Budding Mechanical Engineer</p></button>           
                    </div>
                </div>

                <div className='post'>
                    <p>We’re proud to be the stage for Africa’s greatest university athletes. 🌍
                    Join us at UNILAG and LASU as we host the 11th FASU Games.
                    Come, let’s Unite, Compete and Excel 🙌🏽🥇</p>
                    <div className='imagess'>
                        <img className='mes-icon2' src={require('./images/24.jpg')} />  
                        <img className='mes-icon3' src={require('./images/25.jpg')} />  
                        <img className='mes-icon4' src={require('./images/1.jpg')} />
                    </div>                    
                </div>
            </div>

            <div className='footer2'>
                <button className='like' onClick={showAlert}><img className='footer-icon1' src={require('./images/like-svgrepo-com.png')} /><p>Like</p></button>

                <button className='comment' onClick={showAlert}><img className='footer-icon1' src={require('./images/comment-2-svgrepo-com.png')} /><p>Comment</p></button>

                <button className='share' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-arrow-svgrepo-com.png')} /><p>Share</p></button>

                <button className='send' onClick={showAlert}><img className='footer-icon1' src={require('./images/share-svgrepo-com.png')} /><p>Send</p></button>
            </div>
        </div>
       </div>

       <div className='rightSide-bar'>
            <div>
            <img className='profile-pic' src={require('./images/PASSPORT PHOTO.jpg')} />
 
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
       </div>

    </div>
  );
}

export default ScrollPage;