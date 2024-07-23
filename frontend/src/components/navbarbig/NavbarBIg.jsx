import './NavbarBig.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useState } from "react"

const NavbarBIg = () => {
  const [ toggle, setToggle ] = useState('');

const handleToggleMenu = () => {
  setToggle(toggle === '' ? 'show-menu' : '');
};

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
                <Link to="/">Home</Link>
                <a href="#explore-menu" >Orders</a>
                <a href="#footer" >Conatct us</a>
            </ul>
          </div>       
          <div className="navbar-right">
            <button>Sign In</button>
            <div className="navbar-cart">
              <img src={assets.cart_icon} alt="" />
              <div className="dot"></div>
            </div>
            <div>
              <img onClick={handleToggleMenu} className="toggle-icon" src={assets.menu_icon} alt="" />
            </div>
          </div>
        </div>
  )
}

export default NavbarBIg
