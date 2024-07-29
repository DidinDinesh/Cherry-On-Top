import { useState, useEffect } from "react"
import './LoginPopUp.css'
import { assets } from "../../assets/assets";

const LoginPopUp = ({setShowLogin}) => {

    const [ currentState, setCurrentState ] = useState("Login");

    useEffect(() => {
        setShowLogin ? document.body.classList.add("no-scroll") 
        : document.body.classList.remove("no-scroll");

        // Cleanup when the component is unmounted
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [setShowLogin]);

  return (
    <div className="login-popup">
        <form className="login-popup-container" >
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.close_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                { currentState === "Login"? <></> 
                : <input name="name" type="text" placeholder="Your name" required /> }
                <input name="email"  type="text" placeholder="Your Email"  required/>
                <input name="password" type="password" placeholder="Password" required />
            </div>
            <button type="submit">{currentState === "Sign up"? "Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing i agree to the terms of use 
                & privacy policy
                </p>
            </div>
            { currentState === "Login"? 
            <p>Create a new Accout? <span onClick={() => setCurrentState("Sign up")}>Sign up here</span></p>
            : <p>Allready have an account?<span onClick={() => setCurrentState("Login")}>Login here</span></p> 
            }
      </form>
    </div>

  )
}

export default LoginPopUp
