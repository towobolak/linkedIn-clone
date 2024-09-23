import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      console.log('Logging in with:', formData.email, formData.password);
      navigate('/Dashboard');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='allDiv'>
      <img className='logoo' src={require('./images/189764.webp')} />
      <h1 className='header'>Sign in</h1>
      <p className='header'>Stay updated on your professional world.</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className='inputMain'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email or phone'
            required
            autoComplete='on'
          />
        </div>
        <div>
          <input
            className='inputMain'
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
            required
            autoComplete='on'
          />
          <button className='showBtn' type="button" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className='forgotP'>
          <a className='forgotP1' href="https://your-other-app.com/forgot-password" target="_blank" rel="noopener noreferrer">
            Forgot Password?
          </a>
        </div>
        <div className='submitBtnn'>
          <button className='submit1' type="submit">Sign in</button>
        </div>  
      </form>
      
      <div className='separator'>
          <div className="line"></div>
            <p>or</p>
          <div className="line"></div>
      </div>

      <div className="info">
          <p>By clicking Continue, you agree to LinkedIn’s 
            <a className='extLinks' href='' target='' rel=''> User Agreement</a>,
            <a className='extLinks' href='' target='' rel=''> Privacy Policy</a>, and
            <a className='extLinks' href='' target='' rel=''> Cookie Policy</a>.</p>
      </div>

      <div className="google">
                <button className='submit' type="submit">
                    <img className='extLogo' src={require('./images/7123025_logo_google_g_icon.png')} />
                    <a className='extBtn' href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact%26gar%3DWzJd%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1676585918%3A1725963445572664&ddm=0" target="_blank">Continue with Google</a>
                </button>
      </div>
            
      <div className="apple">
                <button className='submit' type="submit">
                    <img className='extLogo' src={require('./images/104490_apple_icon.png')} />
                    <a className='extBtn' href="https://icloud.com/" target="_blank">Continue with Apple</a>
                </button>
      </div>
    </div>
  );
};

export default LoginForm;