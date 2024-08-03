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
                <Link to={`/cakes/category/${encodeURIComponent("Bestseller")}`} onClick={() => setCakeGroup("Bestseller")}>Best Seller</Link>
                <Link to={`/cakes/category/${encodeURIComponent("Eggless")}`} onClick={() => setCakeGroup("Eggless")}>Eggless</Link>
                <Link to={`/cakes/category/${encodeURIComponent("Photo Cake")}`} onClick={() => setCakeGroup("Photo Cake")}>Photo Cake</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>By flavour</strong>
              <ul className="dropdown-column-lists">
                <Link to={`/cakes/category/${encodeURIComponent("Vanilla")}`} onClick={() => setCakeGroup("vanilla")}>Vanilla</Link>
                <Link to={`/cakes/category/${encodeURIComponent("Choclate")}`} onClick={() => setCakeGroup("Choclate")}>Choclate</Link>
                <Link to={`/cakes/category/${encodeURIComponent("Butterscotch")}`} onClick={() => setCakeGroup("Butterscotch")}>Butterscotch</Link>
                <Link to={`/cakes/category/${encodeURIComponent("Fruit Cake")}`} onClick={() => setCakeGroup("Fruit Cake")}>Fruit Cake</Link>
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
                <Link to={`/gifts/category/${encodeURIComponent("Jewellery")}`} onClick={() => setGiftGroup("Jewellery")}>Jewellery</Link>
                <Link to={`/gifts/category/${encodeURIComponent("Home Decor")}`} onClick={() => setGiftGroup("Home decor")}>Home Decor</Link>
                <Link to={`/gifts/category/${encodeURIComponent("Dining & Serving")}`} onClick={() => setGiftGroup("Dining & Serving")}>Dining & Serving</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>To Whoom</strong>
              <ul className="dropdown-column-lists">
                <Link to={`/gifts/category/${encodeURIComponent("For Her")}`} onClick={() => setGiftGroup("For Her")}>For Her</Link>
                <Link to={`/gifts/category/${encodeURIComponent("For Him")}`} onClick={() => setGiftGroup("For Him")}>For Him</Link>
                <Link to={`/gifts/category/${encodeURIComponent("For Kids")}`} onClick={() => setGiftGroup("For Kid")}>For Kids</Link>
                <Link to={`/gifts/category/${encodeURIComponent("For Parents")}`} onClick={() => setGiftGroup("For Parents")}>For Parents</Link>
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
                <Link to={`/flowers/category/${encodeURIComponent("Rose")}`} onClick={() => setFlowerGroup("rose")}>Rose</Link>
                <Link to={`/flowers/category/${encodeURIComponent("Lily")}`} onClick={() => setFlowerGroup("lily")}>Lily</Link>
                <Link to={`/flowers/category/${encodeURIComponent("Orchid")}`} onClick={() => setFlowerGroup("orchid")}>Orchid</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>By color</strong>
              <ul className="dropdown-column-lists">
                <Link to={`/flowers/category/${encodeURIComponent("Red Flower")}`} onClick={() => setFlowerGroup("red flower")}>Red Flower</Link>
                <Link to={`/flowers/category/${encodeURIComponent("blue Flower")}`} onClick={() => setFlowerGroup("blue flower")}>Blue Flower</Link>
                <Link to={`/flowers/category/${encodeURIComponent("White Flower")}`} onClick={() => setFlowerGroup("white flower")}>White Flower</Link>
                <Link to={`/flowers/category/${encodeURIComponent("Purple Flower")}`} onClick={() => setFlowerGroup("purple flower")}>Purple Flower</Link>
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
                <Link to={`/combos/category/${encodeURIComponent("Cake & Flower")}`} onClick={() => setComboGroup("cake & flower")}>Cake & Flower</Link>
                <Link to={`/combos/category/${encodeURIComponent("Cake & Gift")}`} onClick={() => setComboGroup("cake & gift")}>Cake & Gift</Link>
                <Link to={`/combos/category/${encodeURIComponent("Cake & Choclate")}`} onClick={() => setComboGroup("cake & choclate")}>Cake & Choclate</Link>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>Other Combos</strong>
              <ul className="dropdown-column-lists">
                <Link to={`/combos/category/${encodeURIComponent("Flower & Gift")}`} onClick={() => setComboGroup("flower & gift")}>Flower & Gift</Link>
                <Link to={`/combos/category/${encodeURIComponent("Flower & Choclate")}`} onClick={() => setComboGroup("flower & choclate")}>Flower & Choclate</Link>
                <Link to={`/combos/category/${encodeURIComponent("Gift & Choclate")}`} onClick={() => setComboGroup("gift & choclate")}>Gift & Choclate</Link>
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
