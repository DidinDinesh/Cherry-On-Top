import './OccasionCategory.css'
import { occasion_cat_list } from '../../assets/assets'

const OccasionCategory = () => {
  return (
    <div className="occasion-category">
      <div className="occasion-category-header">
        <h3>Occasion</h3>
        <p>Celebrate the little things</p>
      </div>
      <div className="occasion-category-wrapper">
        {occasion_cat_list.map((item, index) => (
          <div key={index} className="occasion-category-card">
            <div className="occasion-category-image">
                <img src={item.image} />
            </div>
            <p className="occasion-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OccasionCategory
