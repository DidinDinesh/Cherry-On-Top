import './AllGifts.css'
import { cake_list } from '../../../assets/assets'

const AllGifts = () => {
  return (
    <div className="all-gifts">
      <div className="gift-container">
        {cake_list.map((item, index) => (
          <div key={index} className="gift-card">
            <div className="gift-image">
                <img src={item.image} />
            </div>
            <p className="gift-name">{item.name}</p>
            <p className="gift-price">&#8377; {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllGifts
