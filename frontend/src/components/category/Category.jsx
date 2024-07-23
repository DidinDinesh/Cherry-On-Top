import './Category.css'
import { menu_list } from '../../assets/assets'

const Category = () => {
  return (
    <div className="category">
            {menu_list.map((item, index) => (
                <div key={index} className="category-item">
                    <img src={item.image} className="category-img" />
                    <p>{item.name}</p>
                </div>
            ))}
    </div>
  )
}

export default Category
