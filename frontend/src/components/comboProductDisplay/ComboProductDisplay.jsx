import './ComboProductDisplay.css'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const ComboProductDisplay = ({product}) => {
    
    const { addToCart } = useContext(StoreContext);

  return (
    <div className="comboproductdisplay">
        <div className="comboproductdisplay-left">
            <div className="comboproductdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="comboproductdisplay-img">
                <img className="comboproductdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className="comboproductdisplay-right">
            <h1>{product.name}</h1>
            <p className="comboproductdisplay-right-price">&#8377; {product.price}</p>
            <div className="comboproductdisplay-right-desc">
                {product.description}
            </div>
            <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ComboProductDisplay
