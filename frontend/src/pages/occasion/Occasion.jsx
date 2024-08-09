import './Occasion.css'
import { Link, useLocation } from "react-router-dom"
import { useContext, useEffect } from "react"
import { StoreContext } from "../../context/StoreContext"
import OccasionCategory from "../../components/occasionCategory/OccasionCategory"

const Occasion = () => {

    const { Total_Product_List , occasionGroup, setOccasionGroup, handleScrollToTop, url, loading } = useContext(StoreContext); 

    const filtered_occasion_items= Total_Product_List.filter(item =>
        item.occasion.map(occasion => occasion.toLowerCase()).includes(occasionGroup.toLowerCase()))

    const location = useLocation();

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const type = pathParts[pathParts.length - 1];
        setOccasionGroup(decodeURIComponent(type));
        }, [location.pathname, setOccasionGroup]);

    if (loading) {
        return (
        <div className="loading">
            <p>Loading...</p>
        </div>
        );
    }

  return (
    <div>
      <OccasionCategory occasionGroup={occasionGroup} setOccasionGroup = { setOccasionGroup } />
      <div className="all-occasions">
        <div className="occasion-container">
          {filtered_occasion_items.map((item, index) => (
            <div key={index} className="occasion-card">
              <div className="occasion-image">
                <Link to={`/${item.category}/${item._id}`} onClick={handleScrollToTop}><img src={url+"/images/"+item.image} /></Link>
              </div>
              <p className="occasion-name">{item.name}</p>
              <p className="occasion-price">&#8377; {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Occasion
