import './FlowerCategoryPage.css'
import { Link, useLocation } from "react-router-dom"
import FlowerCategory from '../../../components/flowerCategory/FlowerCategory'
import { useContext, useEffect } from "react";
import { StoreContext } from "../../../context/StoreContext";

const FlowerCategoryPage = () => {

  const { flower_list, flowerGroup, setFlowerGroup, handleScrollToTop, url } = useContext(StoreContext);

  const filtered_Flowers = flowerGroup === "All" ? flower_list : flower_list.filter(item =>
    item.type.toLowerCase() === flowerGroup.toLowerCase() || item.color.toLowerCase() === flowerGroup.toLowerCase())

    const location = useLocation();

useEffect(() => {
  const pathParts = location.pathname.split('/');
  const category = pathParts[pathParts.length - 1];
  setFlowerGroup(decodeURIComponent(category));
  }, [location.pathname, setFlowerGroup]);

  return (
    <div>
      <FlowerCategory flowerGroup = {flowerGroup} setFlowerGroup = { setFlowerGroup }/>
      <div className="all-flowers">
        <div className="flower-container">
          {filtered_Flowers.map((item, index) => (
            <div key={index} className="flower-card">
              <div className="flower-image">
                <Link to={`/flowers/${item._id}`} onClick={handleScrollToTop}><img src={url+"/images/"+item.image} /></Link>
              </div>
              <p className="flower-name">{item.name}</p>
              <p className="flower-price">&#8377; {item.price}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default FlowerCategoryPage
