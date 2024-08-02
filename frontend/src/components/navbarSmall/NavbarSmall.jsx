import './NavbarSmall.css'
import { Link } from 'react-router-dom'

const NavbarSmall = () => {
  return (
      <div className="navbar-small">
        <div className="nav-menu">
        <Link className="menu-title" to="/cakes">Cakes</Link>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>By type</strong>
              <ul className="dropdown-column-lists">
                <Link to="/cakes">All cakes</Link>
                <Link>Best Seller</Link>
                <Link>Eggless</Link>
                <Link>Photo cake</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>By flavour</strong>
              <ul className="dropdown-column-lists">
                <Link>Vanilla</Link>
                <Link>Choclate</Link>
                <Link>Butterscotch</Link>
                <Link>Fruit cake</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          <Link className="menu-title" to="/gifts">Gifts</Link>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>By type</strong>
              <ul className="dropdown-column-lists">
                <Link to="/gifts">All gifts</Link>
                <Link>Jewellery</Link>
                <Link>Home decor</Link>
                <Link>Dining & Serving</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>To Whoom</strong>
              <ul className="dropdown-column-lists">
                <Link>For her</Link>
                <Link>For him</Link>
                <Link>For kid</Link>
                <Link>For parents</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          <Link className="menu-title" to="/flowers">Flowers</Link>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>By type</strong>
              <ul className="dropdown-column-lists">
                <Link to="/flowers">All Flowers</Link>
                <Link>Roses</Link>
                <Link>Lillies</Link>
                <Link>Orchids</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>By color</strong>
              <ul className="dropdown-column-lists">
                <Link>Red flower</Link>
                <Link>Pink flower</Link>
                <Link>White flower</Link>
                <Link>Purple flower</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
        <Link className="menu-title" to="/combos">Combos</Link>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>Cake combo</strong>
              <ul className="dropdown-column-lists">
                <Link>All cake combo</Link>
                <Link>Cake & Flower</Link>
                <Link>Cake & Gift</Link>
                <Link>Cake & choclate</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>Flower combo</strong>
              <ul className="dropdown-column-lists">
                <Link>All flower combo</Link>
                <Link>Flower & cake</Link>
                <Link>Flower & gift</Link>
                <Link>Flower & choclate</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
        </div>
      </div>
  )
}

export default NavbarSmall;
