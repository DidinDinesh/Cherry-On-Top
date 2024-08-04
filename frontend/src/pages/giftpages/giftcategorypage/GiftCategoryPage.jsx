import "./GiftCategoryPage.css"
import { Link, useLocation } from "react-router-dom"
import GiftCategory from '../../../components/gifrCategory/GiftCategory'
import { useContext, useEffect } from "react"
import { StoreContext } from "../../../context/StoreContext"


const GiftCategoryPage = () => {

  const { gift_list, giftGroup, setGiftGroup, handleScrollToTop } = useContext(StoreContext);

  const filtered_Gifts = giftGroup === "All" ? gift_list : gift_list.filter(item =>
    item.toWho.map(type => type.toLowerCase()).includes(giftGroup.toLowerCase()) || item.type.toLowerCase() === giftGroup.toLowerCase())

    const location = useLocation();

    useEffect(() => {
      const pathParts = location.pathname.split('/');
      const category = pathParts[pathParts.length - 1];
      setGiftGroup(decodeURIComponent(category));
      }, [location.pathname, setGiftGroup]);

  return (
    <div>
      <GiftCategory giftGroup = {giftGroup} setGiftGroup = {setGiftGroup} />
      <div className="all-gifts">
        <div className="gift-container">
          {filtered_Gifts.map((item, index) => (
            <div key={index} className="gift-card">
              <div className="gift-image">
                <Link to={`/gifts/${item.id}`} onClick={handleScrollToTop}><img src={item.image} /></Link>
              </div>
              <p className="gift-name">{item.name}</p>
              <p className="gift-price">&#8377; {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GiftCategoryPage
