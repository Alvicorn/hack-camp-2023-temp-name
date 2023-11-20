import logoImg from './assets/loginlogo.png'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleButtonCreate = () => {
    navigate('/onboarding');
  };

  const handleButtonLogin = () => {
    navigate('/login');
  };


  return (
    <>
      <div id="container">
        <div id="padding-image-div">
        <div id="image-sec">
            <div className="logo">EchoFeed</div>
            <img src={logoImg} alt="The logo of EchoFeed" />
        </div>
      </div>

      <form action="" method="">
        <div id="login-sec">
          <h1 className="form-header">Welcome to EchoFeed!</h1>

          <div className="input-container">
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" required />
          </div>

          <div className="input-container">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" required />
          </div>

          <div className="input-container">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              name="email"
              id="user_email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="(XXX)-XXX-XXXX"
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              minLength="3"
            />
          </div>

          <div className="input-container">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              required
              minLength="3"
            />
          </div>

          <div id="btn">
            <button onClick={handleButtonCreate} type="submit" className="submit-btn">Create Account</button>

            <div className="btn-text">
              Already have an account?
              
              <a onClick={handleButtonLogin} className="btn-text-highlight" ahref="" > Log in</a>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup
