import './Category.css'
import { menu_list } from '../../assets/assets'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const Category = () => {

  const { handleScrollToTop } = useContext(StoreContext);

  return (
    <div className="category">
            {menu_list.map((item, index) => (
                <div key={index} className="category-item">
                    <Link to={item.path} onClick={handleScrollToTop}><img src={item.image} className="category-img" /></Link>
                    <p>{item.name}</p>
                </div>
            ))}
    </div>
  )
}

export default Category
