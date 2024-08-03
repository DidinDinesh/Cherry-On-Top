import './AllCombo.css'
import { Link } from "react-router-dom"
import ComboCategory from '../../components/comboCategory/ComboCategory'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const AllCombo = () => {

  const { combo_list, comboGroup, setComboGroup, handleScrollToTop } = useContext(StoreContext);
  

  return (
    <>
      <ComboCategory comboGroup = {comboGroup} setComboGroup = {setComboGroup}/>
      <div className="all-combos">
        <div className="combo-container">
          {combo_list.map((item, index) => (
            <div key={index} className="combo-card">
              <div className="combo-image">
                <Link to={`/combos/${item.id}`} onClick={handleScrollToTop}><img src={item.image} /></Link>
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
