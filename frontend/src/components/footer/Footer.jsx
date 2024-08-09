import './Footer.css'
import { assets  } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const Footer = () => {

  const { handleScrollToTop } = useContext(StoreContext);

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>At Cherry on Top, every cake tells a story of joy, 
            crafted with love and the finest ingredients. 
            Let us sweeten your celebrations, one slice at a time.
          </p>
        </div>
        <div className="footer-content-center">
          <ul>
            <Link to="/" onClick={handleScrollToTop}>Home</Link>
            <Link to="/blog" onClick={handleScrollToTop}>Blog</Link>
            <Link to="/contact" onClick={handleScrollToTop}>Contact us</Link>
            <Link to="/about" onClick={handleScrollToTop}>About us</Link>
            </ul>
          <ul>
            <Link to="/cakes" onClick={handleScrollToTop}>Cakes</Link>
            <Link to="/gifts" onClick={handleScrollToTop}>Gifts</Link>
            <Link to="/flowers" onClick={handleScrollToTop}>Flowers</Link>
            <Link to="/combos" onClick={handleScrollToTop}>Combos</Link>
          </ul>
        </div>
        <div className="footer-content-right">
          <div className="footer-content-right-app">
            <p>Simplify your gifting experience with our app</p>
            <div className="footer-app-download">
              <img src={assets.play_store} alt="" />
              <img src={assets.app_store} alt="" />
            </div>
          </div>
          <div>
            <div className="footer-content-right-social">
              <p>Spread The Love On Social Media</p>
              <img onClick={() => window.location.href = "https://www.facebook.com/didin.dineshan/"} src={assets.facebook} alt="" />
              <img onClick={() => window.open("https://wa.me/918156890206?text=Hello! I’m interested in placing an order and would like some assistance. Could you please provide me with information on your available options, pricing, and delivery details? Thank you!")}  src={assets.whatsapp} alt="" />
              <img onClick={() => window.location.href = "https://www.instagram.com/cherryontop_homecakes/"} src={assets.instagram} alt="" />
              <img onClick={() => window.location.href = "https://x.com/didindinesh5"} src={assets.twitter} alt="" />
              <img onClick={() => window.location.href = "https://www.youtube.com/@didindinesh5870"} src={assets.youtube} alt="" />
              <img onClick={() => window.location.href = "https://www.linkedin.com/in/didin-a-619714152/"} src={assets.linkdin} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &#9400; cherryontop - All Right Reserved. </p>
    </div>
  )
}

export default Footer
