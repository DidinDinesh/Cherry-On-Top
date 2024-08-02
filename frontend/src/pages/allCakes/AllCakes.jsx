import './AllCakes.css'
import { Link } from "react-router-dom"
import CakeCategory from '../../components/cakeCategory/CakeCategory'
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const AllCakes = () => {

  const { cake_list, cakeGroup, setCakeGroup, handleScrollToTop } = useContext(StoreContext); 
  

  const filtered_Cakes = cakeGroup === "All" ? cake_list : cake_list.filter(item =>
    item.type.map(type => type.toLowerCase()).includes(cakeGroup.toLowerCase()) || item.flavour.toLowerCase() === cakeGroup.toLowerCase())
  
  return (
    <>
      <CakeCategory cakeGroup={cakeGroup} setCakeGroup = { setCakeGroup }/>
      <div className="all-cakes">
        <div className="cake-container">
          {filtered_Cakes.map((item, index) => (
            <div key={index} className="cake-card">
              <div className="cake-image">
                <Link to={`/cakes/${item.id}`} onClick={handleScrollToTop}><img src={item.image} /></Link>
              </div>
              <p className="cake-name">{item.name}</p>
              <p className="cake-price">&#8377; {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default AllCakes