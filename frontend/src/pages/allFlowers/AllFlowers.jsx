import './AllFlowers.css'
import { Link } from "react-router-dom"
import FlowerCategory from '../../components/flowerCategory/FlowerCategory'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const AllFlowers = () => {

  const { flower_list, group } = useContext(StoreContext);

  const filteredFlowers = group === "All" ? flower_list : flower_list.filter(item =>
    item.type.toLowerCase() === group.toLowerCase() || item.color.toLowerCase() === group.toLowerCase())
  

  return (
    <>
      <FlowerCategory />
      <div className="all-flowers">
        <div className="flower-container">
          {filteredFlowers.map((item, index) => (
            <div key={index} className="flower-card">
              <div className="flower-image">
                <Link to={`/flowers/${item.id}`}><img src={item.image} /></Link>
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
