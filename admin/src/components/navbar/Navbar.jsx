
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to={"/"}><img className="logo" src={assets.logo} alt="" /></Link>
        <p>Admin Panel</p>
      </div>
      
      <img className="profile" src={assets.myImg} alt="" />
    </div>
  )
}



