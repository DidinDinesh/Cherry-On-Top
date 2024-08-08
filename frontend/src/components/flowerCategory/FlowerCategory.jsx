import './FlowerCategory.css'
import { flower_cat_list } from '../../assets/assets'
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

const FlowerCategory = () => {

  const { handleScrollToTop, flowerGroup, setFlowerGroup } = useContext(StoreContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    if (category !== flowerGroup) {
      setFlowerGroup(category);
      navigate(`/flowers/category/${encodeURIComponent(category)}`);
      handleScrollToTop();
    }
  };

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const category = pathParts[pathParts.length - 1];
    if (location.pathname === '/flowers') {
      setFlowerGroup('All');
    } else {
      setFlowerGroup(decodeURIComponent(category));
    }
  }, [location.pathname, setFlowerGroup]);

  return (
    <div className="flower-category">
      <div className="flower-category-header">
        <h3>Flowers</h3>
        <p>Discover the Everlasting Elegance of Flowers</p>
      </div>
      <div className="flower-category-wrapper">
        {flower_cat_list.map((item, index) => (
          <div onClick={() => handleCategoryClick(item.name)} 
            key={index} className={`flower-category-card ${ decodeURIComponent(location.pathname) === `/flowers/category/${flowerGroup}` && 
            flowerGroup.toLowerCase() === item.name.toLocaleLowerCase() ? "active" : ""}`}>
            <div className="flower-category-image">
                <img src={item.image} />
            </div>
            <p className="flower-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlowerCategory
