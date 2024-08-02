import './Navbar.css'
import NavbarBIg from '../navbarbig/NavbarBIg'
import NavbarSmall from '../navbarSmall/NavbarSmall'

const Navbar = ({setShowLogin},) => {
  return (
      <div className="navbar">
        <NavbarBIg setShowLogin = {setShowLogin}/>
        <hr />
        <NavbarSmall />
        <hr />
      </div>
  )
}

export default Navbar
