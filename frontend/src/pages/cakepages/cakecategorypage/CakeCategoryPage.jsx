import './CakeCategoryPage.css'
import { Link, useLocation } from "react-router-dom"
import CakeCategory from '../../../components/cakeCategory/CakeCategory'
import { useContext, useEffect } from "react"
import { StoreContext } from "../../../context/StoreContext"

const CakeCategoryPage = () => {

  const { cake_list, cakeGroup, setCakeGroup, handleScrollToTop, url, loading } = useContext(StoreContext); 

  
  const filtered_Cakes = cake_list.filter(item =>
    item.type.map(type => type.toLowerCase()).includes(cakeGroup.toLowerCase()) || item.flavour.toLowerCase() === cakeGroup.toLowerCase())

    const location = useLocation();

    useEffect(() => {
      const pathParts = location.pathname.split('/');
      const category = pathParts[pathParts.length - 1];
      setCakeGroup(decodeURIComponent(category));
      }, [location.pathname, setCakeGroup]);

    if (loading) {
      return (
        <div className="loading">
          <p>Loading...</p>
        </div>
      );
    }

  return (
    <div>
      <CakeCategory cakeGroup={cakeGroup} setCakeGroup = { setCakeGroup } />
      <div className="all-cakes">
        <div className="cake-container">
          {filtered_Cakes.map((item, index) => (
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
    </div>
  )
}

export default CakeCategoryPage
