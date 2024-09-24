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
            <div className='my-info'>
                <img className='profile-pic11' src={require('./images/PASSPORT PHOTO.jpg')} />

                    <div>
                        <h3>Towobola Olakunle</h3>
                        <p>Mechanical Engineer</p>
                        <h5>Web3Bridge</h5>
                    </div>
            </div>
                
            <div className='rannn'>
                <p>Reach career heights with Premium</p>
                <h5>Try for NGN0</h5>
            </div>

            <div className='rannn'>
                <h6>Profile viewers</h6>
                <h6>Post impressions</h6>
            </div>

            <div className='rannn'>
                <h6>Saved items</h6>
                <h6>Groups</h6>
                <h6>Events</h6>
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
            <div className='riririr'>
                <h3>Add to your feed.</h3>
            </div>

            <div className='riririri'>
                <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/13.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Adebisi Onolaja</h3><p>Biological Consultant</p></button>           
                    </div>
                </div>
            </div>

            <div className='riririri'>
                <div className='profiler'>
                    <div className='profile-1'>
                    <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/15.jpg')} /></button>
                    </div>

                    <div className='search1'>
                    <button onClick={handleSubmit2}><h3>Ogundero Stephen</h3><p>Full Stack Developer</p></button>           
                    </div>
                    </div>
            </div>

            <div className='riririri'>
                    <div className='profiler'>
                        <div className='profile-1'>
                        <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/20.jpg')} /></button>
                        </div>

                        <div className='search1'>
                        <button onClick={handleSubmit2}><h3>Bodunrin Efeosa</h3><p>Graphic Designer</p></button>           
                        </div>
                    </div>

            </div>

            <div className='riririri'>
                    <div className='profiler'>
                        <div className='profile-1'>
                        <button className='profile-pic' onClick={handleSubmit2}><img className='profile' src={require('./images/24.jpg')} /></button>
                        </div>

                        <div className='search1'>
                        <button onClick={handleSubmit2}><h3>Babarinsa Ifeoluwa</h3><p>H.V.A.C. Installer</p></button>           
                        </div>
                    </div>

            </div>

            <h4 className='riririr'>view all recommendations</h4>
            

            <div>
                
            </div>
            <div>
                
            </div>
       </div>

    </div>
  );
}

export default ScrollPage;