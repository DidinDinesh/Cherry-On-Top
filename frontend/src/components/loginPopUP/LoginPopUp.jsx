import { useState } from "react"
import './LoginPopUp.css'

const LoginPopUp = () => {

    const [ slideChange, setSlideChange ] = useState('');

    const handleSlideChange = () => {
        setSlideChange( slideChange === '' ? 'active' : '');
      };

  return (
    <div className="loginpopup">
        <div className={`container ${slideChange}`}>
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>

                    <div className="social-icons">
                        <a href="#" className="icons"><i className='bx bxl-google'></i></a>
                        <a href="#" className="icons"><i className='bx bxl-facebook-circle' ></i></a>
                        <a href="#" className="icons"><i className='bx bxl-github' ></i></a>
                        <a href="#" className="icons"><i className='bx bxl-linkedin' ></i></a>
                    </div>

                    <span>Register With Email</span>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                    <button>SIGN UP</button>
                </form>
            </div>

            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>

                    <div className="social-icons">
                        <a href="#" className="icons"><i className='bx bxl-google'></i></a>
                        <a href="#" className="icons"><i className='bx bxl-facebook-circle' ></i></a>
                        <a href="#" className="icons"><i className='bx bxl-github' ></i></a>
                        <a href="#" className="icons"><i className='bx bxl-linkedin' ></i></a>
                    </div>

                    <span>Login With Email and Password</span>
                    <input type="email" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                    <a href="#">Forgot Password?</a>
                    <button>SIGN IN</button>
                </form>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-pannel toggle-left">
                        <h1>Welcome to Cherry on Top</h1>
                        <p>Sign in with ID and Password</p>
                        <button onClick={handleSlideChange} className="hidden" id="login">SIGN IN</button>
                    </div>

                    <div className="toggle-pannel toggle-right">
                        <h1>New to the Website?</h1>
                        <p>Join using your Mail ID</p>
                        <button onClick={handleSlideChange} className="hidden" id="register">SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default LoginPopUp
