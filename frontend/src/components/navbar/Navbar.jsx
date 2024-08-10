import './Navbar.css'
import NavbarBIg from '../navbarbig/NavbarBIg'
import NavbarSmall from '../navbarSmall/NavbarSmall'
import Sidebar from "../sidebar/Sidebar"
import { useState } from "react"

const Navbar = ({setShowLogin},) => {

  const [ toggle, setToggle ] = useState('');

  const handleToggleMenu = () => {
    setToggle(toggle === '' ? 'show-menu' : '');
    };
  

  return (
      <div className="navbar">
        <NavbarBIg setShowLogin = {setShowLogin} handleToggleMenu = {handleToggleMenu}  setToggle = {setToggle}/>
        <NavbarSmall />
        <Sidebar handleToggleMenu = {handleToggleMenu} toggle = {toggle}/>
      </div>
  )
}

export default Navbar
