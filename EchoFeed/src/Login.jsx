import { useState } from 'react'
import logoImg from './assets/loginlogo.png'
import viteLogo from '/vite.svg'
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();


  const handleButtonSignup = () => {
    navigate('/');
  };

  const handleButtonLogin = () => {
    navigate('/home');
  };

  return (
    <>
      <div id="container">

      <form action="" method="">
        <div id="login-sec">
          <h1 class="form-header">Welcome back!</h1>

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
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              minlength="3"
            />
          </div>

          <div id="btn">
            <button onClick={handleButtonLogin} type="submit" class="submit-btn">Log in</button>

            <div class="btn-text">
              Don't have an account?
              
              <a onClick={handleButtonSignup} class="btn-text-highlight" ahref="" > Sign up</a>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login;
