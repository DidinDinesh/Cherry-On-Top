import './AllFlowers.css'
import { Link } from "react-router-dom"
import FlowerCategory from '../../../components/flowerCategory/FlowerCategory'
import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";

const AllFlowers = () => {

  const { flower_list, flowerGroup, setFlowerGroup, handleScrollToTop, url, loading } = useContext(StoreContext);
  
  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <FlowerCategory flowerGroup = {flowerGroup} setFlowerGroup = { setFlowerGroup }/>
      <div className="all-flowers">
        <div className="flower-container">
          {flower_list.map((item, index) => (
            <div key={index} className="flower-card">
              <div className="flower-image">
                <Link to={`/flowers/${item._id}`} onClick={handleScrollToTop}><img src={url+ "/images/" + item.image} /></Link>
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
