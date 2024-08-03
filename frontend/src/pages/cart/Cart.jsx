import './Cart.css'
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const {cartItems, product_list, removeFromCart, updateCartItem, getTotalCartAmount } = useContext(StoreContext);
  
  const navigate = useNavigate();

  const handleInputChange = (event, id) => {
    const value = parseInt(event.target.value);
    updateCartItem(id, value);
  };

  const handleKeyDown = (event) => {
    if ( event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
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
        {product_list.map((item,index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>&#8377;{item.price}</p>             
                  <input onChange={(e) => handleInputChange(e,item.id)} onKeyDown={handleKeyDown} type="number" className="counter" value={cartItems[item.id]} />
                  <p>&#8377;{item.price * cartItems[item.id]}</p>
                  <button onClick={() => removeFromCart(item.id)} className="cross">X</button> 
                </div>
                <hr />
              </div>
            );
          }
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
          <button onClick={() => navigate("/placeOrder")}>PROCEED TO CHECKOUT</button>
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
