import { useState, useEffect, useContext } from "react"
import './LoginPopUp.css'
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'
import { auth, googleProvider } from '../../config/firebase.js'; // Import Firebase config
import { signInWithPopup } from "firebase/auth";

const LoginPopUp = ({setShowLogin, showLogin}) => {

    const {url, setToken} = useContext(StoreContext);

    const [ currentState, setCurrentState ] = useState("Login");
    const [errorMessage, setErrorMessage] = useState("");

    const [data, setData ] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}))
    }

    useEffect(() => {
        showLogin ? document.body.classList.add("no-scroll") 
        : document.body.classList.remove("no-scroll");

        // Cleanup when the component is unmounted

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [showLogin]);


    const onLogin = async (event) => {
        
        event.preventDefault()
        let newUrl = url;

        if(currentState === 'Login') {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }
        else {
            setErrorMessage(response.data.message)
        }

    }

    // Google Sign-In Handler

    const handleGoogleSignIn = async () => {
        try {
        const result = await signInWithPopup(auth, googleProvider);
        const token = await result.user.getIdToken();

        const response = await axios.post(`${url}/api/user/google-login`, {
            idToken: token,
        });

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        } else {
            setErrorMessage(response.data.message);
        }
        } catch (error) {
        console.error("Google Sign-In Error:", error);
        setErrorMessage("Google Sign-In Failed");
        }
    };

  return (
    <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container" >
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.close_icon} alt="" />
            </div>
            <div className="error-message">
                {errorMessage && <p>{errorMessage}</p>}
            </div>
            <div className="login-popup-inputs">
                { currentState === "Login"? <></> 
                : <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required /> }
                <input name="email" onChange={onChangeHandler} value={data.email}  type="text" placeholder="Your Email"  required/>
                <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
            </div>
            <button className="normal-btn" type="submit">{currentState === "Sign up"? "Create account" : "Login"}</button>
            <button className="google-signin-btn" onClick={handleGoogleSignIn}>
                <img src={assets.google_icon} alt="Google Logo" />
                <p>Sign in with Google</p>
            </button>
            
            { currentState === "Login"? 
            <p>Create a new Accout? <span onClick={() => setCurrentState("Sign up")}>Sign up here</span></p>
            : <p>Allready have an account?<span onClick={() => setCurrentState("Login")}>Login here</span></p> 
            }
      </form>
    </div>

  )
}

export default LoginPopUp
