import './FlowerProductDisplay.css'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FlowerProductDisplay = ({product}) => {

    const { addToCart } = useContext(StoreContext);
    
  return (
    <div className="flowerproductdisplay">
        <div className="flowerproductdisplay-left">
            <div className="flowerproductdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="flowerproductdisplay-img">
                <img className="flowerproductdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className="flowerproductdisplay-right">
            <h1>{product.name}</h1>
            <p className="flowerproductdisplay-right-price">&#8377; {product.price}</p>
            <div className="flowerproductdisplay-right-desc">
                {product.description}
            </div>
            <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default FlowerProductDisplay
