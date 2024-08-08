import './Header.css';
import { banners } from '../../assets/assets'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out"
  };

  return (
    <div className="header">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="header-slide">
            <img src={banner.image} alt="" />
            <div className="header-content">
              <h2>{banner.text}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Header;