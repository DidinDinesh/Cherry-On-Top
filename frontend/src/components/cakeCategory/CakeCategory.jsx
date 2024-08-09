import './CakeCategory.css'
import { cake_cat_list } from '../../assets/assets'
import { useNavigate, useLocation } from "react-router-dom"
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const CakeCategory = () => {

  const { handleScrollToTop, cakeGroup, setCakeGroup } = useContext(StoreContext);


  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
      if (category !== cakeGroup) {
        setCakeGroup(category);
        navigate(`/cakes/category/${category}`);
        handleScrollToTop();
      }
  }

  
  return (
    <div className="cake-category">
      <div className="cake-category-header">
        <h3>Cakes</h3>
        <p>Elegance on a plate</p>
      </div>
      <div className="cake-category-wrapper">
        {cake_cat_list.map((item, index) => (
          <div onClick={() => handleCategoryClick(item.name)} 
            key={index} className={`cake-category-card ${ decodeURIComponent(location.pathname) === `/cakes/category/${cakeGroup}` && 
            cakeGroup.toLowerCase() === item.name.toLowerCase() ? "active" : ""}`}>
            <div className="cake-category-image">
                <img src={item.image} />
            </div>
            <p className="cake-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CakeCategory
