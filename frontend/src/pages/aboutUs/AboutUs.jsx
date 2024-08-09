import './AboutUs.css'
import { assets } from '../../assets/assets'

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus-logo">
        <img src={assets.logo} alt="" className="logo" />
      </div>
      <div className="aboutus-desc">
        <div className="aboutus-desc-welcome">
            <h2>Welcome to Cherry on Top!</h2>
            <p>At Cherry on Top, we believe that every celebration deserves a little extra sweetness and joy. 
            We are your one-stop shop for delightful cakes, thoughtful gifts, and beautiful flowers, perfect for any occasion.</p>
        </div>
        <div className="aboutus-desc-story">
            <h2>Our Story</h2>
            <p>Cherry on Top was born out of a passion for bringing happiness to people's lives. 
            Our founders, with a shared love for culinary arts and heartfelt gifting, set out to create a platform where quality and creativity 
            come together. What started as a small bakery has now blossomed into a full-fledged online store, offering a wide array of cakes, gifts, 
            and flowers.</p>
        </div>
      </div>
      <div className="aboutus-values">
        <h2>Values</h2>
        <div className="aboutus-values-container">
            <div className="aboutus-value">
                <img src={assets.quality_img} alt="" />
                <b>Quality</b>
                <p>Delivering the finest cakes, gifts, and flowers</p>
            </div>
            <div className="aboutus-value">
                <img src={assets.trust_img} alt="" />
                <b>Trust</b>
                <p>Ensuring every order is handled with care and reliability</p>
            </div>
            <div className="aboutus-value">
                <img src={assets.happy_img} alt="" />
                <b>Customer Satisfaction</b>
                <p>Going above and beyond to exceed customer expectations</p>
            </div>
        </div>
      </div>
      <div className="aboutus-cultures">
        <h2>Culture</h2>
        <div className="aboutus-cultures-container">
            <div className="aboutus-culture">
                <img src={assets.creativity_img} alt="" />
                <b>Creativity</b>
                <p>Innovating and crafting unique products to make every occasion special.</p>
            </div>
            <div className="aboutus-culture">
                <img src={assets.passion_img} alt="" />
                <b>Passion</b>
                <p>Putting love and enthusiasm into every product we offer.</p>
            </div>
            <div className="aboutus-culture">
                <img src={assets.teamwork_img} alt="" />
                <b>Teamwork</b>
                <p>Collaborating across departments to create the best customer experience.</p>
            </div>
            <div className="aboutus-culture">
                <img src={assets.integrity_img} alt="" />
                <b>Integrirt</b>
                <p>Conducting business with honesty and transparency.</p>
            </div>
            <div className="aboutus-culture">
                <img src={assets.sustainability_img} alt="" />
                <b>Sustainability</b>
                <p>Committed to environmentally friendly practices and products.</p>
            </div>
            <div className="aboutus-culture">
                <img src={assets.dedication_img} alt="" />
                <b>Dedication</b>
                <p>Working tirelessly to provide exceptional service and quality.</p>
            </div>
        </div>
      </div>
      <div className="aboutus-social">
        <div className="aboutus-social-desc">
            <h2>Join Our Community</h2>
            <p>Cherry on Top is more than just a shopping website; it's a community of celebration enthusiasts. 
            Follow us on social media for the latest updates, exclusive offers, and a daily dose of inspiration. 
            Share your Cherry on Top moments with us using #CherryOnTopCelebrations.</p>
        </div>
        <div className="aboutus-social-apps">
            <img onClick={() => window.location.href = "https://www.facebook.com/didin.dineshan/"} src={assets.facebook} alt="" />
            <img onClick={() => window.open("https://wa.me/918156890206?text=Hello! I’m interested in placing an order and would like some assistance. Could you please provide me with information on your available options, pricing, and delivery details? Thank you!")} src={assets.whatsapp} alt="" />
            <img onClick={() => window.location.href = "https://www.instagram.com/cherryontop_homecakes/"} src={assets.instagram} alt="" />
            <img onClick={() => window.location.href = "https://x.com/didindinesh5"} src={assets.twitter} alt="" />
            <img onClick={() => window.location.href = "https://www.youtube.com/@didindinesh5870"} src={assets.youtube} alt="" />
            <img onClick={() => window.location.href = "https://www.linkedin.com/in/didin-a-619714152/"} src={assets.linkdin} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
