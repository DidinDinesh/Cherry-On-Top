import './NavbarSmall.css'

const NavbarSmall = () => {
  return (
      <div className="navbar-small">
        <div className="nav-menu">
          <p>Cakes</p>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>By type</strong>
              <ul className="dropdown-column-lists">
                <li>All cakes</li>
                <li>Best Seller</li>
                <li>Eggless</li>
                <li>Photo cake</li>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>By flavour</strong>
              <ul className="dropdown-column-lists">
                <li>Vanilla</li>
                <li>Choclate</li>
                <li>Butterscotch</li>
                <li>Fruit cake</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          <p>Gifts</p>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>By type</strong>
              <ul className="dropdown-column-lists">
                <li>All gifts</li>
                <li>Jewellery</li>
                <li>Home decor</li>
                <li>Dining & Serving</li>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>To Whoom</strong>
              <ul className="dropdown-column-lists">
                <li>For her</li>
                <li>For him</li>
                <li>For kid</li>
                <li>For parents</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          <p>Flowers</p>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>By type</strong>
              <ul className="dropdown-column-lists">
                <li>All Flowers</li>
                <li>Roses</li>
                <li>Lillies</li>
                <li>Orchids</li>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>By color</strong>
              <ul className="dropdown-column-lists">
                <li>Red flower</li>
                <li>Pink flower</li>
                <li>White flower</li>
                <li>Purple flower</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          <p>Combos</p>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>Cake combo</strong>
              <ul className="dropdown-column-lists">
                <li>All cake combo</li>
                <li>Cake & Flower</li>
                <li>Cake & Gift</li>
                <li>Cake & choclate</li>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>Flower combo</strong>
              <ul className="dropdown-column-lists">
                <li>All flower combo</li>
                <li>Flower & cake</li>
                <li>Flower & gift</li>
                <li>Flower & choclate</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          <p>Occasions</p>
          <div className="dropdown">
            <div className="dropdown-column">
              <strong>Personal</strong>
              <ul className="dropdown-column-lists">
                <li>Birtday</li>
                <li>Anniversary</li>
                <li>Valentines day</li>
                <li>Wedding</li>
              </ul>
            </div>
            <div className="dropdown-column">
              <strong>Festivals</strong>
              <ul className="dropdown-column-lists">
                <li>Christmas</li>
                <li>New year</li>
                <li>Onam</li>
                <li>Vishu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NavbarSmall;
