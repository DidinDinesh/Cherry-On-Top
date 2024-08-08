import './ComboCategory.css'
import { combo_cat_list } from '../../assets/assets'
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

const ComboCategory = () => {

  const { handleScrollToTop, comboGroup, setComboGroup } = useContext(StoreContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    if (category !== comboGroup) {
      setComboGroup(category);
      navigate(`/combos/category/${encodeURIComponent(category)}`);
      handleScrollToTop();
    }
  };

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const category = pathParts[pathParts.length - 1];
    if (location.pathname === '/combos') {
      setComboGroup('All');
    } else {
      setComboGroup(decodeURIComponent(category));
    }
  }, [location.pathname, setComboGroup]);

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
            <img className= {decodeURIComponent(location.pathname) === `/combos/category/${comboGroup}` && 
            comboGroup.toLowerCase() === item.name.toLowerCase() ? "active" : ""} src={item.image} />
            <p className="combo-category-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComboCategory
