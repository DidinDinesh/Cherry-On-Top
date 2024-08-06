import './ComboProductDisplay.css'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const ComboProductDisplay = ({product}) => {
    
    const { addToCart, url, loading } = useContext(StoreContext);

    if (loading) {
        return <p>Loading...</p>; 
      }

  return (
    <div className="comboproductdisplay">
        <div className="comboproductdisplay-left">
            <div className="comboproductdisplay-img-list">
                <img src={url + "/images/" + product.image} alt="" />
                <img src={url + "/images/" + product.image} alt="" />
                <img src={url + "/images/" + product.image} alt="" />
                <img src={url + "/images/" + product.image} alt="" />
            </div>
            <div className="comboproductdisplay-img">
                <img className="comboproductdisplay-main-img" src={url + "/images/" + product.image} alt="" />
            </div>
        </div>
        <div className="comboproductdisplay-right">
            <h1>{product.name}</h1>
            <p className="comboproductdisplay-right-price">&#8377; {product.price}</p>
            <div className="comboproductdisplay-right-desc">
                {product.description}
            </div>
            <button onClick={() => addToCart(product._id)}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ComboProductDisplay
