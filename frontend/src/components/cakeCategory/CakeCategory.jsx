import './CakeCategory.css'
import { cake_cat_list } from '../../assets/assets'
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const cakeCategory = () => {
  
  const { setGroup } = useContext(StoreContext);
  

  return (
    <div className="cake-category">
      <div className="cake-category-header">
        <h3>Cakes</h3>
        <p>Elegance on a plate</p>
      </div>
      <div className="cake-category-wrapper">
        {cake_cat_list.map((item, index) => (
          <div onClick={() => setGroup(prev => 
            prev===item.name? "All" : item.name)} 
            key={index} className="cake-category-card">
            <div className="cake-category-image">
                <img src={item.image} />
            </div>
            <p className="cake-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default cakeCategory
