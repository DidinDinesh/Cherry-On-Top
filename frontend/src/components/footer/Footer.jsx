import './Footer.css'
import { assets  } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>The term dummy tag can have different 
              eanings depending on the context. 
              Here are two possibilities related to 
              web development
          </p>
        </div>
        <div className="footer-content-center">
          <ul>
            <Link to="/" >Home</Link>
            <Link to="blog">Blog</Link>
            <Link to="contact">Contact us</Link>
            <Link>About</Link>
            </ul>
          <ul>
            <Link>Cakes</Link>
            <Link>Gifts</Link>
            <Link>Flowers</Link>
            <Link>Combo</Link>
            <Link>Occasion</Link>
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
              <img src={assets.facebook} alt="" />
              <img src={assets.whatsapp} alt="" />
              <img src={assets.instagram} alt="" />
              <img src={assets.twitter} alt="" />
              <img src={assets.youtube} alt="" />
              <img src={assets.linkdin} alt="" />
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
