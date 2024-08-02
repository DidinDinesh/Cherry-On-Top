import './NavbarBig.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useContext, useState } from "react"
import { StoreContext } from "../../context/StoreContext"


const NavbarBIg = ({setShowLogin}) => {

  const [ toggle, setToggle ] = useState('');

  const [ menu, setMenu] = useState("home");

  const handleToggleMenu = () => {
  setToggle(toggle === '' ? 'show-menu' : '');
  };

  const { getTotalCartAmount } = useContext(StoreContext);


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
            <button onClick={() => setShowLogin(true)}>Sign In</button>
            <div className="navbar-cart">
              <Link to="/cart">
                <img src={assets.cart_icon} alt="" />
              </Link>
              <div className= {getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <div>
              <img onClick={handleToggleMenu} className="toggle-icon" src={assets.menu_icon} alt="" />
            </div>
          </div>
        </div>
  )
}

export default NavbarBIg
