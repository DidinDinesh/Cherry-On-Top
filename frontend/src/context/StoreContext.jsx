import { createContext, useMemo, useState } from 'react';
import product_list from '../assets/product_list'


export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const [ cakeGroup, setCakeGroup ] = useState("All");
    const [ giftGroup, setGiftGroup ] = useState("All");
    const [ flowerGroup, setFlowerGroup ] = useState("All");
    const [ comboGroup, setComboGroup ] = useState("All");

    const cake_list = useMemo(() => product_list.filter(item => item.category === 'cake'), [product_list]);
    const gift_list = useMemo(() => product_list.filter(item => item.category === 'gift'), [product_list]);
    const flower_list = useMemo(() => product_list.filter(item => item.category === 'flower'), [product_list]);
    const combo_list = useMemo(() => product_list.filter(item => item.category === 'combo'), [product_list]);


    const [ cartItems, setCartItems ] = useState({});

    const addToCart =  (Id) => {

        if(!cartItems[Id]) {
            setCartItems((prev) => ({...prev, [Id] : 1}))
        }
        else {
            setCartItems((prev) => ({...prev, [Id]: prev[Id] + 1}))
        }
    }

    const removeFromCart =  (Id) => {

        setCartItems((prev) => ({...prev, [Id]: prev[Id] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = product_list.find((product) => product.id === item);
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }




  const contextValue= {
      product_list,
      cake_list,
      gift_list,
      flower_list,
      combo_list,
      handleScrollToTop,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,   
      cakeGroup,
      setCakeGroup,
      giftGroup,
      setGiftGroup,
      flowerGroup,
      setFlowerGroup,
      comboGroup,
      setComboGroup,
      getTotalCartItems
  }
  
  return (
      <StoreContext.Provider value={contextValue}>
          {props.children}
      </StoreContext.Provider>
  )
}

export default StoreContextProvider;

