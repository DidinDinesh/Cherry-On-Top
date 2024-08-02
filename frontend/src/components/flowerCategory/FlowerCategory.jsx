import './FlowerCategory.css'
import { flower_cat_list } from '../../assets/assets'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FlowerCategory = ({flowerGroup, setFlowerGroup}) => {

  const { handleScrollToTop } = useContext(StoreContext);


  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setFlowerGroup(prev => prev === category ? "All" : category);
    navigate("/flowers");
    handleScrollToTop();
  };

  return (
    <div className="flower-category">
      <div className="flower-category-header">
        <h3>Flowers</h3>
        <p>Discover the Everlasting Elegance of Flowers</p>
      </div>
      <div className="flower-category-wrapper">
        {flower_cat_list.map((item, index) => (
          <div onClick={() => handleCategoryClick(item.name)} 
            key={index} className={`flower-category-card ${ flowerGroup.toLowerCase() === item.name.toLocaleLowerCase() ? "active" : ""}`}>
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
