import './Cart.css'
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const {cartItems, removeFromCart, updateCartItem, getTotalCartAmount, Total_Product_List, url, token } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleInputChange = (event, id) => {
    const value = parseInt(event.target.value);
    if (value > 0) {
    updateCartItem(id, value);
    }
    else {
      event.target.value = cartItems[id];
    }
  };

  const handleKeyDown = (event) => {
    const invalidKeys = ["-", ".", "e"];

    if (invalidKeys.includes(event.key))  {
      event.preventDefault();
    }
  };

  const handleProceedToCheckout = () => {
    if (!token) {
      alert("Please sign in to proceed to checkout."); 
    } else if (getTotalCartAmount() === 0) {
      alert("Your cart is empty. Please add items to your cart before proceeding."); 
    } else {
      navigate("/placeorder");
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title cart-items-header" >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Total_Product_List.map((item,index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>&#8377;{item.price}</p>             
                  <input onChange={(e) => handleInputChange(e,item._id)} onKeyDown={handleKeyDown} type="number" className="counter" value={cartItems[item._id]} />
                  <p>&#8377;{item.price * cartItems[item._id]}</p>
                  <button onClick={() => removeFromCart(item._id)} className="cross">X</button> 
                </div>
                <hr />
              </div>
            );
          }8n
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>&#8377;{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>&#8377;{getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>&#8377;{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
