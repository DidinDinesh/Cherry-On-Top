import './Breadcrum.css'
import { assets }  from "../../assets/assets";

const Breadcrum = ({product}) => { 

  return (
    <div className="breadcrum">
      <p>Home</p> 
      <img src={assets.arrow_right} alt="" /> 
      <p>Cakes</p> 
      <img src={assets.arrow_right} alt="" /> 
      <p>{product.name}</p>
    </div>
  )
}

export default Breadcrum
