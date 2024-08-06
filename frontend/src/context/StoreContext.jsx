import { createContext, useEffect, useMemo, useState } from 'react';
import product_list from '../assets/product_list'
import axios from 'axios'


export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const url = "http://localhost:4000"
    
    const [token,setToken] = useState("");

    const [ cakeGroup, setCakeGroup ] = useState("All");
    const [ giftGroup, setGiftGroup ] = useState("All");
    const [ flowerGroup, setFlowerGroup ] = useState("All");
    const [ comboGroup, setComboGroup ] = useState("All");

    const [cake_list, setCake_list ] = useState([]);
    const [gift_list, setGift_list ] = useState([]);
    const [flower_list, setFlower_list ] = useState([]);
    const [combo_list, setCombo_list ] = useState([]);

    const [loading, setLoading] = useState(true);


    const [ cartItems, setCartItems ] = useState({});

    const addToCart =  (Id) => {

        if(!cartItems[Id]) {
            setCartItems((prev) => ({...prev, [Id] : 1}))
        }
        else {
            setCartItems((prev) => ({...prev, [Id]: prev[Id] + 1}))
        }
    }

    const updateCartItem = (Id, value) => {
        if (value > 0) {
            setCartItems((prev) => ({ ...prev, [Id]: value }))
        } else {
            const { [Id]: _, ...rest } = cartItems;
            setCartItems(rest);
        }
    }

    const removeFromCart =  (Id) => {
        const { [Id]: _, ...rest } = cartItems;
        setCartItems(rest);
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

    const fetchCakeList = async () => {
        setLoading(true);
        const response = await axios.get(url+"/api/cakes/list")
        setCake_list(response.data.data)
        setLoading(false);
    }
    const fetchGiftrList = async () => {
        setLoading(true);
        const response = await axios.get(url+"/api/gifts/list")
        setGift_list(response.data.data)
        setLoading(false);
    }

    const fetchFlowerList = async () => {
        setLoading(true);
        const response = await axios.get(url+"/api/flowers/list")
        setFlower_list(response.data.data)
        setLoading(false);
    }

    const fetchComboList = async () => {
        setLoading(true);
        const response = await axios.get(url+"/api/combos/list")
        setCombo_list(response.data.data)
        setLoading(false);
    }


    useEffect(() => {
        async function loadCakeData() {
            await fetchCakeList();
        }
        async function loadGiftData() {
            await fetchGiftrList();
        }
        async function loadFlowerData() {
            await fetchFlowerList();
        }
        async function loadComboData() {
            await fetchComboList();
        }

        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }

        loadCakeData();
        loadGiftData();
        loadFlowerData();
        loadComboData();
    },[])


  const contextValue= {
      url,
      token,
      setToken,
      product_list,
      cake_list,
      gift_list,
      flower_list,
      combo_list,
      handleScrollToTop,
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItem,
      getTotalCartAmount,   
      cakeGroup,
      setCakeGroup,
      giftGroup,
      setGiftGroup,
      flowerGroup,
      setFlowerGroup,
      comboGroup,
      setComboGroup,
      getTotalCartItems,
      loading
  }
  
  return (
      <StoreContext.Provider value={contextValue}>
          {props.children}
      </StoreContext.Provider>
  )
}

export default StoreContextProvider;

