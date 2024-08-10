import './Sidebar.css'
import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from "../../context/StoreContext";
import { assets } from '../../assets/assets'
import { useState } from "react";

const Sidebar = ({handleToggleMenu, toggle}) => {

    const { setCakeGroup, setGiftGroup, setFlowerGroup, setComboGroup, setOccasionGroup, handleScrollToTop } = useContext(StoreContext);

    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleCategoryClick = (setGroupFunction, category) => {
      setGroupFunction(category);
      handleScrollToTop();
      handleToggleMenu();
    };

    const toggleDropdown = (menuName) => {
        setActiveDropdown(activeDropdown === menuName ? null : menuName);
    };

  return (
    <div className={`sidebar ${toggle}`}>
        <div className="sidebar-navbar-logo">
            <img src={assets.logo} alt="" />
        </div>
        <div className="sidebar-navbar-close" onClick={handleToggleMenu}>
            <img src={assets.close_icon} alt="" />
        </div>
        <div className="sidebar-navbar-small">
            <div className="sidebar-navbar-menu">
                <div className="sidebar-menu-title" onClick={() => toggleDropdown('Cakes')}>
                    <p> Cakes </p>
                    <img className={`sidebar-icon-down ${activeDropdown === 'Cakes' ? 'active' : ''}`} src={assets.down_icon} alt="" />
                    <img className={`sidebar-icon-up ${activeDropdown === 'Cakes' ? 'active' : ''}`} src={assets.up_icon} alt="" />
                </div>
                <div className={`sidebar-dropdown ${activeDropdown === 'Cakes' ? 'active' : ''}`}>
                    <div className="sidebar-dropdown-column">
                        <strong>By type</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to="/cakes" onClick={() => handleCategoryClick(setCakeGroup, "All")}>All cakes</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Bestseller")}`} onClick={() => handleCategoryClick(setCakeGroup, "Bestseller")}>Best Seller</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Eggless")}`} onClick={() => handleCategoryClick(setCakeGroup, "Eggless")}>Eggless</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Photo Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Photo Cake")}>Photo Cake</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Cartoon Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Cartoon Cake")}>Cartoon Cake</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Bento Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Bento Cake")}>Bento Cake</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Designer Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Designer Cake")}>Designer Cake</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Wedding Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Wedding Cake")}>Wedding Cake</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Heart Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Heart Cake")}>Heart Cake</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Bomb Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Bomb Cake")}>Bomb Cake</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Jar Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Jar Cake")}>Jar Cake</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Pull Me Up Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Pull Me Up Cake")}>Pull Me Up Cake</Link>  
                        </ul>
                    </div>
                    <div className="sidebar-dropdown-column">
                        <strong>By flavour</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to={`/cakes/category/${encodeURIComponent("Vanilla")}`} onClick={() => handleCategoryClick(setCakeGroup, "Vanilla")}>Vanilla</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Choclate")}`} onClick={() => handleCategoryClick(setCakeGroup, "Choclate")}>Choclate</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Butterscotch")}`} onClick={() => handleCategoryClick(setCakeGroup, "Butterscotch")}>Butterscotch</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Fruit Cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Fruit Cake")}>Fruit Cake</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Pista")}`} onClick={() => handleCategoryClick(setCakeGroup, "Pista")}>Pista</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Strawberry")}`} onClick={() => handleCategoryClick(setCakeGroup, "Strawberry")}>Strawberry</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Black forest")}`} onClick={() => handleCategoryClick(setCakeGroup, "Black forest")}>Black forest</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("White forest")}`} onClick={() => handleCategoryClick(setCakeGroup, "White forest")}>White forest</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Red velvet")}`} onClick={() => handleCategoryClick(setCakeGroup, "Red velvet")}>Red velvet</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Pineapple")}`} onClick={() => handleCategoryClick(setCakeGroup, "Pineapple")}>Pineapple</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Ferrero rocher")}`} onClick={() => handleCategoryClick(setCakeGroup, "Ferrero rocher")}>Ferrero rocher</Link>
                            <Link to={`/cakes/category/${encodeURIComponent("Oreo cake")}`} onClick={() => handleCategoryClick(setCakeGroup, "Oreo cake")}>Oreo cake</Link>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="sidebar-navbar-menu">
                <div className="sidebar-menu-title" onClick={() => toggleDropdown('Gifts')}>
                    <p> Gifts </p>
                    <img className={`sidebar-icon-down ${activeDropdown === 'Gifts' ? 'active' : ''}`} src={assets.down_icon} alt="" />
                    <img className={`sidebar-icon-up ${activeDropdown === 'Gifts' ? 'active' : ''}`} src={assets.up_icon} alt="" />
                </div>
                <div className={`sidebar-dropdown ${activeDropdown === 'Gifts' ? 'active' : ''}`}>
                    <div className="sidebar-dropdown-column">
                        <strong>By type</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to="/gifts" onClick={() => handleCategoryClick(setGiftGroup, "All")}>All gifts</Link>
                            <Link to={`/gifts/category/${encodeURIComponent("Jewellery")}`} onClick={() => handleCategoryClick(setGiftGroup, "Jewellery")}>Jewellery</Link>
                            <Link to={`/gifts/category/${encodeURIComponent("Home Decor")}`} onClick={() => handleCategoryClick(setGiftGroup, "Home Decor")}>Home Decor</Link>
                            <Link to={`/gifts/category/${encodeURIComponent("Dining & Serving")}`} onClick={() => handleCategoryClick(setGiftGroup, "Dining & Serving")}>Dining & Serving</Link>
                        </ul>
                    </div>
                    <div className="sidebar-dropdown-column">
                        <strong>To Whom</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to={`/gifts/category/${encodeURIComponent("For Her")}`} onClick={() => handleCategoryClick(setGiftGroup, "For Her")}>For Her</Link>
                            <Link to={`/gifts/category/${encodeURIComponent("For Him")}`} onClick={() => handleCategoryClick(setGiftGroup, "For Him")}>For Him</Link>
                            <Link to={`/gifts/category/${encodeURIComponent("For Kids")}`} onClick={() => handleCategoryClick(setGiftGroup, "For Kids")}>For Kids</Link>
                            <Link to={`/gifts/category/${encodeURIComponent("For Parents")}`} onClick={() => handleCategoryClick(setGiftGroup, "For Parents")}>For Parents</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sidebar-navbar-menu">
                <div className="sidebar-menu-title" onClick={() => toggleDropdown('Flowers')}>
                    <p> Flowers </p>
                    <img className={`sidebar-icon-down ${activeDropdown === 'Flowers' ? 'active' : ''}`} src={assets.down_icon} alt="" />
                    <img className={`sidebar-icon-up ${activeDropdown === 'Flowers' ? 'active' : ''}`} src={assets.up_icon} alt="" />
                </div>
                <div className={`sidebar-dropdown ${activeDropdown === 'Flowers' ? 'active' : ''}`}>
                    <div className="sidebar-dropdown-column">
                        <strong>By type</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to="/flowers" onClick={() => handleCategoryClick(setFlowerGroup, "All")}>All Flowers</Link>
                            <Link to={`/flowers/category/${encodeURIComponent("Rose")}`} onClick={() => handleCategoryClick(setFlowerGroup, "Rose")}>Rose</Link>
                            <Link to={`/flowers/category/${encodeURIComponent("Lily")}`} onClick={() => handleCategoryClick(setFlowerGroup, "Lily")}>Lily</Link>
                            <Link to={`/flowers/category/${encodeURIComponent("Orchid")}`} onClick={() => handleCategoryClick(setFlowerGroup, "Orchid")}>Orchid</Link>
                            <Link to={`/flowers/category/${encodeURIComponent("Sunflower")}`} onClick={() => handleCategoryClick(setFlowerGroup, "Sunflower")}>Sunflower</Link>
                            <Link to={`/flowers/category/${encodeURIComponent("Dried Flowers")}`} onClick={() => handleCategoryClick(setFlowerGroup, "Dried Flowers")}>Dried Flowers</Link>
                        </ul>
                    </div>
                    <div className="sidebar-dropdown-column">
                        <strong>By color</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to={`/flowers/category/${encodeURIComponent("Red Flower")}`} onClick={() => handleCategoryClick(setFlowerGroup, "Red Flower")}>Red Flower</Link>
                            <Link to={`/flowers/category/${encodeURIComponent("Blue Flower")}`} onClick={() => handleCategoryClick(setFlowerGroup, "Blue Flower")}>Blue Flower</Link>
                            <Link to={`/flowers/category/${encodeURIComponent("Pink Flower")}`} onClick={() => handleCategoryClick(setFlowerGroup, "Pink Flower")}>Pink Flower</Link>
                            <Link to={`/flowers/category/${encodeURIComponent("Yellow Flower")}`} onClick={() => handleCategoryClick(setFlowerGroup, "Yellow Flower")}>Yellow Flower</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sidebar-navbar-menu">
                <div className="sidebar-menu-title" onClick={() => toggleDropdown('Combos')}>
                    <p> Combos </p>
                    <img className={`sidebar-icon-down ${activeDropdown === 'Combos' ? 'active' : ''}`} src={assets.down_icon} alt="" />
                    <img className={`sidebar-icon-up ${activeDropdown === 'Combos' ? 'active' : ''}`} src={assets.up_icon} alt="" />
                </div>
                <div className={`sidebar-dropdown ${activeDropdown === 'Combos' ? 'active' : ''}`}>
                    <div className="sidebar-dropdown-column">
                        <strong>Cake combo</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to="/combos" onClick={() => handleCategoryClick(setComboGroup, "All")}>All combo</Link>
                            <Link to={`/combos/category/${encodeURIComponent("Cake & Flower")}`} onClick={() => handleCategoryClick(setComboGroup, "Cake & Flower")}>Cake & Flower</Link>
                            <Link to={`/combos/category/${encodeURIComponent("Cake & Gift")}`} onClick={() => handleCategoryClick(setComboGroup, "Cake & Gift")}>Cake & Gift</Link>
                            <Link to={`/combos/category/${encodeURIComponent("Cake & Choclate")}`} onClick={() => handleCategoryClick(setComboGroup, "Cake & Choclate")}>Cake & Choclate</Link>
                        </ul>
                    </div>
                    <div className="sidebar-dropdown-column">
                        <strong>Other Combos</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to={`/combos/category/${encodeURIComponent("Flower & Gift")}`} onClick={() => handleCategoryClick(setComboGroup, "Flower & Gift")}>Flower & Gift</Link>
                            <Link to={`/combos/category/${encodeURIComponent("Flower & Choclate")}`} onClick={() => handleCategoryClick(setComboGroup, "Flower & Choclate")}>Flower & Choclate</Link>
                            <Link to={`/combos/category/${encodeURIComponent("Gift & Choclate")}`} onClick={() => handleCategoryClick(setComboGroup, "Gift & Choclate")}>Gift & Choclate</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sidebar-navbar-menu">
                <div className="sidebar-menu-title" onClick={() => toggleDropdown('Occasions')}>
                    <p> Occasions </p>
                    <img className={`sidebar-icon-down ${activeDropdown === 'Occasions' ? 'active' : ''}`} src={assets.down_icon} alt="" />
                    <img className={`sidebar-icon-up ${activeDropdown === 'Occasions' ? 'active' : ''}`} src={assets.up_icon} alt="" />
                </div>
                <div className={`sidebar-dropdown ${activeDropdown === 'Occasions' ? 'active' : ''}`}>
                    <div className="sidebar-dropdown-column">
                    <strong>Personal</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to={`/occasions/${encodeURIComponent("Birthday")}`} onClick={() => handleCategoryClick(setOccasionGroup, "Birthday")}>Birthday</Link>
                            <Link to={`/occasions/${encodeURIComponent("Anniversary")}`} onClick={() => handleCategoryClick(setOccasionGroup, "Anniversary")}>Anniversary</Link>
                            <Link to={`/occasions/${encodeURIComponent("Valentines day")}`} onClick={() => handleCategoryClick(setOccasionGroup, "Valentines day")}>Valentines day</Link>
                            <Link to={`/occasions/${encodeURIComponent("Engagement")}`} onClick={() => handleCategoryClick(setOccasionGroup, "Engagement")}>Engagement</Link>
                            <Link to={`/occasions/${encodeURIComponent("Wedding")}`} onClick={() => handleCategoryClick(setOccasionGroup, "Wedding")}>Wedding</Link>
                            <Link to={`/occasions/${encodeURIComponent("Housewarming")}`} onClick={() => handleCategoryClick(setOccasionGroup, "Housewarming")}>Housewarming</Link>
                        </ul>
                    </div>
                    <div className="sidebar-dropdown-column">
                        <strong>Festivals</strong>
                        <ul className="sidebar-dropdown-column-lists">
                            <Link to={`/occasions/${encodeURIComponent("Christmas")}`} onClick={() => handleCategoryClick(setOccasionGroup, "Christmas")}>Christmas</Link>
                            <Link to={`/occasions/${encodeURIComponent("New year")}`} onClick={() => handleCategoryClick(setOccasionGroup, "New year")}>New year</Link>
                            <Link to={`/occasions/${encodeURIComponent("Onam")}`} onClick={() => handleCategoryClick(setOccasionGroup, "Onam")}>Onam</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="sidebar-navbar-middle">
            <ul className="sidebar-navbar-menu">
                <NavLink to="/" onClick={handleToggleMenu}>Home</NavLink>
                <NavLink to="/blog" onClick={handleToggleMenu} >Blog</NavLink>
                <NavLink to="/about" onClick={handleToggleMenu} >About us</NavLink>
                <NavLink to="/Contact" onClick={handleToggleMenu} >Conatct us</NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
