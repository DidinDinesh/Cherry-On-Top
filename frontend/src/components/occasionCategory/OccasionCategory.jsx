import './OccasionCategory.css'
import { occasion_cat_list } from '../../assets/assets'
import { useNavigate, useLocation } from "react-router-dom"
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


const OccasionCategory = () => {

  const { handleScrollToTop, occasionGroup, setOccasionGroup } = useContext(StoreContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
      if (category !== occasionGroup) {
        setOccasionGroup(category);
        navigate(`/occasions/${category}`);
        handleScrollToTop();
      }
  }

  return (
    <div className="occasion-category">
      <div className="occasion-category-header">
        <h3>Occasion</h3>
        <p>Celebrate the little things</p>
      </div>
      <div className="occasion-category-wrapper">
        {occasion_cat_list.map((item, index) => (
          <div onClick={() => handleCategoryClick(item.name)}  
          key={index} className={`occasion-category-card ${ decodeURIComponent(location.pathname) === `/occasions/${occasionGroup}` && 
            occasionGroup.toLowerCase() === item.name.toLowerCase() ? "active" : ""}`} >
            <div className="occasion-category-image">
                <img src={item.image} />
            </div>
            <p className="occasion-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OccasionCategory
