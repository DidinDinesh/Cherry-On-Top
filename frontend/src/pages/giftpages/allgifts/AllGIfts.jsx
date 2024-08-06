import './AllGifts.css'
import { Link } from "react-router-dom"
import GiftCategory from '../../../components/gifrCategory/GiftCategory'
import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";


const AllGIfts = () => {

  const { gift_list, giftGroup, setGiftGroup, handleScrollToTop, url, loading } = useContext(StoreContext);

  if (loading) {
    return <p>Loading...</p>; 
  }
  
  return (
    <>
    <GiftCategory giftGroup = {giftGroup} setGiftGroup = {setGiftGroup}/>
      <div className="all-gifts">
        <div className="gift-container">
          {gift_list.map((item, index) => (
            <div key={index} className="gift-card">
              <div className="gift-image">
                <Link to={`/gifts/${item._id}`} onClick={handleScrollToTop}><img src={url + "/images/" + item.image} /></Link>
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
