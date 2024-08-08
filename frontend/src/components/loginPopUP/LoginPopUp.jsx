import { useState, useEffect, useContext } from "react"
import './LoginPopUp.css'
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'

const LoginPopUp = ({setShowLogin, showLogin}) => {

    const {url, setToken} = useContext(StoreContext);

    const [ currentState, setCurrentState ] = useState("Login");

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
            alert(response.data.message)
        }

    }

  return (
    <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container" >
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.close_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                { currentState === "Login"? <></> 
                : <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required /> }
                <input name="email" onChange={onChangeHandler} value={data.email}  type="text" placeholder="Your Email"  required/>
                <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
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
