import './Navbar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
      <div className="navbar-1">
        <div className="navbar-big">
          <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
          <div className="navbar-left">
              <input type="text" placeholder='Search a product'/>
              <img src={assets.search_icon} alt="search"/>
          </div>
          <div className="navbar-middle">
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
          </div>
        </div>
        <hr />
      </div>
  )
}

export default Navbar
