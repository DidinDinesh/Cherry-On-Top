import './AllCombo.css'
import { Link } from "react-router-dom"
import ComboCategory from '../../components/comboCategory/ComboCategory'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const AllCombo = () => {

  const { combo_list } = useContext(StoreContext);
  

  return (
    <>
      <ComboCategory />
      <div className="all-combos">
        <div className="combo-container">
          {combo_list.map((item, index) => (
            <div key={index} className="combo-card">
              <div className="combo-image">
                <Link to={`/combos/${item.id}`}><img src={item.image} /></Link>
              </div>
              <p className="combo-name">{item.name}</p>
              <p className="combo-price">&#8377; {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllCombo
