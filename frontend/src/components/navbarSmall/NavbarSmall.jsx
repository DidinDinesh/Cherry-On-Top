import { useContext } from "react";
import './NavbarSmall.css'
import { Link } from 'react-router-dom'
import { StoreContext } from "../../context/StoreContext";

const NavbarSmall = () => {

  const { setCakeGroup, setGiftGroup, setFlowerGroup, setComboGroup } = useContext(StoreContext);

  return (
      <div className="navbar-small">
        <div className="nav-menu">
        <Link className="menu-title" to="/cakes" onClick={() => setCakeGroup("All")}>Cakes</Link>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>By type</strong>
              <ul className="dropdown-column-lists">
                <Link to="/cakes" onClick={() => setCakeGroup("All")}>All cakes</Link>
                <Link to="/cakes" onClick={() => setCakeGroup("bestseller")}>Best Seller</Link>
                <Link to="/cakes" onClick={() => setCakeGroup("eggless")}>Eggless</Link>
                <Link to="/cakes" onClick={() => setCakeGroup("photo cake")}>Photo cake</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>By flavour</strong>
              <ul className="dropdown-column-lists">
                <Link to="/cakes" onClick={() => setCakeGroup("vanilla")}>Vanilla</Link>
                <Link to="/cakes" onClick={() => setCakeGroup("choclate")}>Choclate</Link>
                <Link to="/cakes" onClick={() => setCakeGroup("butterscotch")}>Butterscotch</Link>
                <Link to="/cakes" onClick={() => setCakeGroup("fruit")}>Fruit cake</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          <Link className="menu-title" to="/gifts" onClick={() => setGiftGroup("All")}>Gifts</Link>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>By type</strong>
              <ul className="dropdown-column-lists">
                <Link to="/gifts" onClick={() => setGiftGroup("All")}>All gifts</Link>
                <Link to="/gifts" onClick={() => setGiftGroup("jewellery")}>Jewellery</Link>
                <Link to="/gifts" onClick={() => setGiftGroup("home decor")}>Home decor</Link>
                <Link to="/gifts" onClick={() => setGiftGroup("dining & serving")}>Dining & Serving</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>To Whoom</strong>
              <ul className="dropdown-column-lists">
                <Link to="/gifts" onClick={() => setGiftGroup("for her")}>For her</Link>
                <Link to="/gifts" onClick={() => setGiftGroup("for him")}>For him</Link>
                <Link to="/gifts" onClick={() => setGiftGroup("for kid")}>For kid</Link>
                <Link to="/gifts" onClick={() => setGiftGroup("for parents")}>For parents</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          <Link className="menu-title" to="/flowers" onClick={() => setFlowerGroup("All")}>Flowers</Link>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>By type</strong>
              <ul className="dropdown-column-lists">
                <Link to="/flowers" onClick={() => setFlowerGroup("All")}>All Flowers</Link>
                <Link to="/flowers" onClick={() => setFlowerGroup("rose")}>Roses</Link>
                <Link to="/flowers" onClick={() => setFlowerGroup("lily")}>Lillies</Link>
                <Link to="/flowers" onClick={() => setFlowerGroup("orchid")}>Orchids</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>By color</strong>
              <ul className="dropdown-column-lists">
                <Link to="/flowers" onClick={() => setFlowerGroup("red flower")}>Red flower</Link>
                <Link to="/flowers" onClick={() => setFlowerGroup("blue flower")}>blue flower</Link>
                <Link to="/flowers" onClick={() => setFlowerGroup("white flower")}>White flower</Link>
                <Link to="/flowers" onClick={() => setFlowerGroup("purple flower")}>Purple flower</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
        <Link className="menu-title" to="/combos" onClick={() => setComboGroup("All")}>Combos</Link>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>Cake combo</strong>
              <ul className="dropdown-column-lists">
                <Link to="/combos" onClick={() => setComboGroup("All")}>All combo</Link>
                <Link to="/combos" onClick={() => setComboGroup("cake & flower")}>Cake & Flower</Link>
                <Link to="/combos" onClick={() => setComboGroup("cake & gift")}>Cake & Gift</Link>
                <Link to="/combos" onClick={() => setComboGroup("cake & choclate")}>Cake & choclate</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>Other Combos</strong>
              <ul className="dropdown-column-lists">
                <Link to="/combos" onClick={() => setComboGroup("flower & gift")}>Flower & gift</Link>
                <Link to="/combos" onClick={() => setComboGroup("flower & choclate")}>Flower & choclate</Link>
                <Link to="/combos" onClick={() => setComboGroup("gift & choclate")}>Gift & choclate</Link>
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
