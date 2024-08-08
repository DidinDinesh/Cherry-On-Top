import './Breadcrum.css'
import { assets }  from "../../assets/assets";
import { Link } from "react-router-dom";

const Breadcrum = ({product}) => { 

  return (
    <div className="breadcrum">
      <ul className="breadcrum-links">
      <Link to="/">Home</Link> 
      <img src={assets.arrow_right} alt="" /> 
      <Link to={`/${product.category.toLowerCase()}`}>{product.category}</Link> 
      <img src={assets.arrow_right} alt="" /> 
      <p>{product.name}</p>
      </ul>
    </div>
  )
}

export default Breadcrum
