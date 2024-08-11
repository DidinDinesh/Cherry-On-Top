import { useContext, useState } from "react";
import './CakeProductDisplay.css'
import { StoreContext } from "../../context/StoreContext";

const CakeProductDisplay = ({product}) => {

  const { addToCart, url, loading } = useContext(StoreContext);

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="cakeproductdisplay">
      <div className="cakeproductdisplay-left">
        <div className="cakeproductdisplay-img-list">
            <img src={url+"/images/"+product.image} alt="" />
            <img src={url+"/images/"+product.image} alt="" />
            <img src={url+"/images/"+product.image} alt="" />
            <img src={url+"/images/"+product.image} alt="" />
        </div>
        <div className="cakeproductdisplay-img">
            <img className="cakeproductdisplay-main-img" src={url+"/images/"+product.image} alt="" />
        </div>
      </div>
      <div className="cakeproductdisplay-right">
        <h1>{product.name}</h1>
        <p className="cakeproductdisplay-right-price">&#8377; {product.price}</p>
        <div className="cakeproductdisplay-right-desc">
          {product.description}
        </div>
        <div className="cakeproductdisplay-right-weight">
          <h1>Weight</h1>
          <div className="cakeproductdisplay-right-weights">
            <div>0.5kg</div>
          </div>
        </div>
        <button onClick={() => addToCart(product._id)}>ADD TO CART</button>
        <p className="cakeproductdisplay-right-flavour"><span>Flavour: {product.flavour}</span></p>
      </div>
    </div>
  )
}

export default CakeProductDisplay