import './ComboCategory.css'
import { combo_cat_list } from '../../assets/assets'

const ComboCategory = () => {
  return (
    <div className="combo-category">
      <div className="combo-category-header">
        <h3>Combos</h3>
        <p>Double the joy, double the fun</p>
      </div>
      <div className="combo-category-wrapper">
        {combo_cat_list.map((item, index) => (
          <div key={index} className="combo-category-card">
            <img src={item.image} />
            <p className="combo-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComboCategory
