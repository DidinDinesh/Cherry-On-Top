import './FlowerCategory.css'
import { flower_cat_list } from '../../assets/assets'

const FlowerCategory = () => {
  return (
    <div className="flower-category">
      <div className="flower-category-header">
        <h3>Flowers</h3>
        <p>Discover the Everlasting Elegance of Flowers</p>
      </div>
      <div className="flower-category-wrapper">
        {flower_cat_list.map((item, index) => (
          <div key={index} className="flower-category-card">
            <div className="flower-category-image">
                <img src={item.image} />
            </div>
            <p className="flower-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlowerCategory
