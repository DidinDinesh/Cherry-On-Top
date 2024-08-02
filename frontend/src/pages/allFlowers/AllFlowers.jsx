import './AllFlowers.css'
import { Link } from "react-router-dom"
import FlowerCategory from '../../components/flowerCategory/FlowerCategory'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const AllFlowers = () => {

  const { flower_list, flowerGroup, setFlowerGroup, handleScrollToTop } = useContext(StoreContext);
  

  const filtered_Flowers = flowerGroup === "All" ? flower_list : flower_list.filter(item =>
    item.type.toLowerCase() === flowerGroup.toLowerCase() || item.color.toLowerCase() === flowerGroup.toLowerCase())
  

  return (
    <>
      <FlowerCategory flowerGroup = {flowerGroup} setFlowerGroup = { setFlowerGroup }/>
      <div className="all-flowers">
        <div className="flower-container">
          {filtered_Flowers.map((item, index) => (
            <div key={index} className="flower-card">
              <div className="flower-image">
                <Link to={`/flowers/${item.id}`} onClick={handleScrollToTop}><img src={item.image} /></Link>
              </div>
              <p className="flower-name">{item.name}</p>
              <p className="flower-price">&#8377; {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default AllFlowers
