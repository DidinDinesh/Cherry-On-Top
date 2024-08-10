import './NavbarBig.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useContext, useState } from "react"
import { StoreContext } from "../../context/StoreContext"


const NavbarBIg = ({setShowLogin, handleToggleMenu}) => {

  

  const [searchQuery, setSearchQuery] = useState('');

  
  const { getTotalCartItems, token, setToken, handleScrollToTop } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); 
    }
  };

  return (
      <div className="navbar-big">
        <div>
          <img onClick={handleToggleMenu} className="toggle-icon" src={assets.menu_icon} alt="" />
        </div>
        <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
        <div className="navbar-left">
          <form onSubmit={handleSearchSubmit} className="navbar-search">
            <input onChange={(event) => setSearchQuery(event.target.value)} value={searchQuery} type="text" placeholder='Search a product'/>
            <button onClick={handleScrollToTop} type="submit" className="search-btn">
              <img src={assets.search_icon} alt="search"/>
          </button>
          </form>
        </div>
        <div className={"navbar-middle"}>
          <div className="navbar-close" onClick={handleToggleMenu}>
            <img src={assets.close_icon} alt="" />
          </div>
          <ul className="navbar-menu">
              <NavLink to="/" >Home</NavLink>
              <NavLink to="/blog" >Blog</NavLink>
              <NavLink to="/about" >About us</NavLink>
              <NavLink to="/Contact" >Conatct us</NavLink>
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
        </div>
      </div>
  )
}

export default NavbarBIg
