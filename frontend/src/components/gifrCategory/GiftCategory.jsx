import './GiftCategory.css'
import { gift_cat_list } from '../../assets/assets'

const GiftCategory = () => {
  return (
    <div className="gift-category">
      <div className="gift-category-header">
        <h3>Gifts</h3>
        <p>Spread the joy, one gift at a time</p>
      </div>
      <div className="gift-category-wrapper">
        {gift_cat_list.map((item, index) => (
          <div key={index} className="gift-category-card">
            <img src={item.image} />
            <p className="gift-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GiftCategory
