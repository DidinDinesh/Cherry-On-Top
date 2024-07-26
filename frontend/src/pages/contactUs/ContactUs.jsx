import './ContactUs.css'
import { assets } from "../../assets/assets"

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-image">
          <img src={assets.contact_img} alt="" />
        </div>
        <div className="contact-item">
          <img src={assets.call_icon} alt="" />
          <p>Call us:</p>
          <b>+91 8156890206</b>
        </div>
        <div className="contact-item">
          <img src={assets.email_icon} alt="" />
          <p>Email:</p>
          <b>didindinesh5@gmail.com</b>
        </div>
        <div className="contact-item">
          <img src={assets.insta_icon} alt="" />
          <p>Instagram:</p>
          <b>cherryontop_homecakes</b>
        </div>
        <div className="contact-time">
          <div className="contact-time-item">
            <p>Call & Email</p>
            <b>9am - 11pm</b>
          </div>
          <div className="contact-time-item">
            <p>WhatsApp & Insta</p>
            <b>8am to 12pm</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
