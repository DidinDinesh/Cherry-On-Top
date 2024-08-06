import './AllCakes.css'
import { Link } from "react-router-dom"
import CakeCategory from '../../../components/cakeCategory/CakeCategory'
import { useContext } from "react"
import { StoreContext } from "../../../context/StoreContext"

const AllCakes = () => {

  const { cake_list, cakeGroup, setCakeGroup, handleScrollToTop, url, loading } = useContext(StoreContext); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <CakeCategory cakeGroup={cakeGroup} setCakeGroup = { setCakeGroup }/>
      <div className="all-cakes">
        <div className="cake-container">
          {cake_list.map((item, index) => (
            <div key={index} className="cake-card">
              <div className="cake-image">
                <Link to={`/cakes/${item._id}`} onClick={handleScrollToTop}><img src={url+"/images/"+item.image} /></Link>
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