
import './PlaceOrder.css'
import { useContext, useState } from 'react'
import { StoreContext } from "../../context/StoreContext"


const PlaceOrder = () => {

  const { getTotalCartAmount, product_list, cartItems } = useContext(StoreContext);

  const [ data, setData ] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const placeOrder = (event) => {
    event.preventDefault();
    let orderItems = [];
    product_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
  }


  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input onChange={onChangeHandler} name="firstName" value={data.firstName} type="text" placeholder="First name" required/>
          <input onChange={onChangeHandler} name="lastName" value={data.lastName} type="text" placeholder="Last name" required/>
        </div>
        <input onChange={onChangeHandler} name="email" value={data.email} type="email" placeholder="Email address" required/>
        <input onChange={onChangeHandler} name="street" value={data.street} type="text" placeholder="street" required/>
        <div className="multi-fields">
          <input onChange={onChangeHandler} name="city" value={data.city} type="text" placeholder="City" required/>
          <input onChange={onChangeHandler} name="state" value={data.state} type="text" placeholder="State"  required/>
        </div>
        <div className="multi-fields">
          <input onChange={onChangeHandler} name="zipCode" value={data.zipCode} type="text" placeholder="Zip Code" required/>
          <input onChange={onChangeHandler} name="country" value={data.country} type="text" placeholder="Country"  required/>
        </div>
        <input onChange={onChangeHandler} name="phone" value={data.phone} type="text" placeholder="Phone" required/>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>&#8377; {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>&#8377; {getTotalCartAmount() === 0 ? 0 : 50}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>&#8377; {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50 }</b>
              </div>
            </div>
            <button type="submit">PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder;
