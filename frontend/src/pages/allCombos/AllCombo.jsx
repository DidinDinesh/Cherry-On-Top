import './AllCombo.css'
import { Link } from "react-router-dom"
import ComboCategory from '../../components/comboCategory/ComboCategory'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const AllCombo = () => {

  const { combo_list, comboGroup, setComboGroup, handleScrollToTop } = useContext(StoreContext);

  const filtered_Combo = comboGroup === "All" ? combo_list : combo_list.filter(item => item.type.toLowerCase() === comboGroup.toLowerCase())
  

  return (
    <>
      <ComboCategory comboGroup = {comboGroup} setComboGroup = {setComboGroup}/>
      <div className="all-combos">
        <div className="combo-container">
          {filtered_Combo.map((item, index) => (
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
