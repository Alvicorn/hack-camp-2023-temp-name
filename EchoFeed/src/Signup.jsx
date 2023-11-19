import { useState } from 'react'
import logoImg from './assets/loginlogo.png'
import viteLogo from '/vite.svg'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();


  const handleButtonClick = () => {
    navigate('/login');
  };


  return (
    <>
      <div id="container">
        <div id="padding-image-div">
        <div id="image-sec">
            <div class="logo">EchoFeed</div>
            <img src={logoImg} alt="The logo of EchoFeed" />
        </div>
      </div>

      <form action="" method="">
        <div id="login-sec">
          <h1 class="form-header">Welcome to EchoFeed!</h1>

          <div class="input-container">
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" required />
          </div>

          <div class="input-container">
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" required />
          </div>

          <div class="input-container">
            <label for="user_email">Email</label>
            <input
              type="email"
              name="email"
              id="user_email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div class="input-container">
            <label for="phone_number">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="(XXX)-XXX-XXXX"
            />
          </div>

          <div class="input-container">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              minlength="3"
            />
          </div>

          <div class="input-container">
            <label for="confirm_password">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              required
              minlength="3"
            />
          </div>

          <div id="btn">
            <button type="submit" class="submit-btn">Create Account</button>

            <div class="btn-text">
              Already have an account?
              
              <a onClick={handleButtonClick} class="btn-text-highlight" ahref="" >Log in</a>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup
