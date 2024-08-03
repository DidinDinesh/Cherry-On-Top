import './GiftCategory.css'
import { gift_cat_list } from '../../assets/assets'
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

const GiftCategory = ({giftGroup, setGiftGroup}) => {

  const { handleScrollToTop } = useContext(StoreContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    if (category !== giftGroup) {
      setGiftGroup(category);
      navigate(`/gifts/category/${category}`);
      handleScrollToTop();
    }
  };

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const category = pathParts[pathParts.length - 1];
    if (location.pathname === '/gifts') {
      setGiftGroup('All');
    } else {
      setGiftGroup(decodeURIComponent(category));
    }
  }, [location.pathname, setGiftGroup]);

  return (
    <div className="gift-category">
      <div className="gift-category-header">
        <h3>Gifts</h3>
        <p>Spread the joy, one gift at a time</p>
      </div>
      <div className="gift-category-wrapper">
        {gift_cat_list.map((item, index) => (
          <div onClick={() => handleCategoryClick(item.name)} 
            key={index} className="gift-category-card">
            <img className= { decodeURIComponent(location.pathname) === `/gifts/category/${giftGroup}` &&
             giftGroup.toLowerCase() === item.name.toLowerCase() ? "active" : ""} src={item.image} />
            <p className="gift-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GiftCategory
