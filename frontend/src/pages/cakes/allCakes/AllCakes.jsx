import './AllCakes.css'
import { cake_list } from '../../../assets/assets'

const AllCakes = () => {
  return (
    <div className="all-cakes">
      <div className="cake-container">
        {cake_list.map((item, index) => (
          <div key={index} className="cake-card">
            <div className="cake-image">
                <img src={item.image} />
            </div>
            <p className="cake-name">{item.name}</p>
            <p className="cake-price">&#8377; {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCakes
