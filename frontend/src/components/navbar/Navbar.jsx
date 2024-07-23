import './Navbar.css'
import NavbarBIg from '../navbarbig/NavbarBIg'
import NavbarSmall from '../navbarSmall/NavbarSmall'

const Navbar = () => {
  return (
      <div className="navbar">
        <NavbarBIg />
        <hr />
        <NavbarSmall />
        <hr />
      </div>
  )
}

export default Navbar
