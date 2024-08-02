import './GiftProductDisplay.css'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const GiftProductDisplay = ({product}) => {
    
    const { addToCart } = useContext(StoreContext);

  return (
        <div className="giftproductdisplay">
            <div className="giftproductdisplay-left">
                <div className="giftproductdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="giftproductdisplay-img">
                    <img className="giftproductdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="giftproductdisplay-right">
                <h1>{product.name}</h1>
                <p className="giftproductdisplay-right-price">&#8377; {product.price}</p>
                <div className="giftproductdisplay-right-desc">
                    {product.description}
                </div>
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default GiftProductDisplay
