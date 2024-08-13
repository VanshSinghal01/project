import React from 'react'
import './sign.css';
import logo from './Images/logo.png';

const signup = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <div className="nav-content">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </nav>
        <div className="signin-container">
      <div className="signin-background">
        <div className="signin-content">
          <h1>Sign In</h1>
          <form>
            <input type="email" placeholder="Email or mobile number" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <div className="signup">
              <span>New to Netflix? <a href="#">Sign up now.</a></span>
            </div>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
            </small>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default signup
