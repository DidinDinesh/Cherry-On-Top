import './NavbarBig.css'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useContext, useState } from "react"
import { StoreContext } from "../../context/StoreContext"


const NavbarBIg = ({setShowLogin}) => {

  const [ toggle, setToggle ] = useState('');

  const [ menu, setMenu] = useState("home");

  const handleToggleMenu = () => {
  setToggle(toggle === '' ? 'show-menu' : '');
  };

  const { getTotalCartAmount, getTotalCartItems, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }


  return (
        <div className="navbar-big">
          <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
          <div className="navbar-left">
            <div className="navbar-search">
              <input type="text" placeholder='Search a product'/>
              <button className="search-btn">
                <img src={assets.search_icon} alt="search"/>
              </button>
            </div>
          </div>
          <div className={`navbar-middle ${toggle}`}>
            <div className="navbar-close" onClick={handleToggleMenu}>
              <img src={assets.close_icon} alt="" />
            </div>
            <ul className="navbar-menu">
                <Link to="/" onClick={() => setMenu("home")} className={menu==="home"?"active" : ""}>Home</Link>
                <Link to="blog" onClick={() => setMenu("blog")} className={menu==="blog"?"active" : ""}>Blog</Link>
                <Link to="Contact" onClick={() => setMenu("contact")} className={menu==="contact"?"active" : ""}>Conatct us</Link>
            </ul>
          </div>       
          <div className="navbar-right">
            {!token? <button onClick={() => setShowLogin(true)}>Sign In</button> : 
            <div className="navbar-profile">
              <img src={assets.user_icon} alt="" />
              <ul className="navbar-profile-dropdown">
                <li onClick={() => navigate("/myorders")}><img src={assets.order_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
            </div>
            }           
            <div className="navbar-cart">
              <Link to="/cart">
                <img src={assets.cart_icon} alt="" />
              </Link>
              <div className= "navbar-cart-count">{getTotalCartItems()}</div>
            </div>
            <div>
              <img onClick={handleToggleMenu} className="toggle-icon" src={assets.menu_icon} alt="" />
            </div>
          </div>
        </div>
  )
}

export default NavbarBIg
