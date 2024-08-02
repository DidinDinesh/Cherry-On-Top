import './AllGifts.css'
import { Link } from "react-router-dom"
import GiftCategory from '../../components/gifrCategory/GiftCategory'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


const AllGIfts = (props) => {

  const { gift_list } = useContext(StoreContext);
  

  return (
    <>
    <GiftCategory />
      <div className="all-gifts">
        <div className="gift-container">
          {gift_list.map((item, index) => (
            <div key={index} className="gift-card">
              <div className="gift-image">
                <Link to={`/gifts/${item.id}`}><img src={item.image} /></Link>
              </div>
              <p className="gift-name">{item.name}</p>
              <p className="gift-price">&#8377; {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default AllGIfts
