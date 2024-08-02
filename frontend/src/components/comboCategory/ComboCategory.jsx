import './ComboCategory.css'
import { combo_cat_list } from '../../assets/assets'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const ComboCategory = ({comboGroup, setComboGroup}) => {

  const { handleScrollToTop } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setComboGroup(prev => prev === category ? "All" : category);
    navigate("/combos");
    handleScrollToTop();
  };

  return (
    <div className="combo-category">
      <div className="combo-category-header">
        <h3>Combos</h3>
        <p>Double the joy, double the fun</p>
      </div>
      <div className="combo-category-wrapper">
        {combo_cat_list.map((item, index) => (
          <div onClick={() => handleCategoryClick(item.name)} 
            key={index} className="combo-category-card">
            <img className= {comboGroup.toLowerCase() === item.name.toLowerCase() ? "active" : ""} src={item.image} />
            <p className="combo-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComboCategory
