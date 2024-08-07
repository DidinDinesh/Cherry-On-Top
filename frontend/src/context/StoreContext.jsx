import { createContext, useEffect, useState } from 'react';
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

    const addToCart = async (itemId) => {

        if(!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId] : 1}))
        }
        else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }

        if(token) {
            await axios.post(url + "/api/cart/add", {itemId}, {headers:{token}})
        }
    }

    const updateCartItem = async (itemId, value) => {
        if (value > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: value }))
        } else {
            const { [itemId]: _, ...rest } = cartItems;
            setCartItems(rest);
        }

        if (token) {
            await axios.post(url + "/api/cart/update", { itemId, value}, {headers:{token}});
        }
    }

    const removeFromCart = async (itemId) => {
        const { [itemId]: _, ...rest } = cartItems;
        setCartItems(rest);

        if (token) {
            await axios.post(url + "/api/cart/remove", {itemId}, {headers:{token}});
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = Total_Product_List.find((product) => product._id === item);
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

    const fetchCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get", {}, {headers:{token}})
        setCartItems(response.data.cartData);
    }


    useEffect(() => {
        async function loadData() {
            await fetchCakeList();
  
            await fetchGiftrList();
      
            await fetchFlowerList();
      
            await fetchComboList();
        
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            await fetchCartData(localStorage.getItem("token"));
        }
    }
        loadData();
    },[])

    const Total_Product_List = [...cake_list, ...gift_list, ...flower_list, ...combo_list];


  const contextValue= {
      url,
      token,
      setToken,
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
      loading,
      Total_Product_List
  }
  
  return (
      <StoreContext.Provider value={contextValue}>
          {props.children}
      </StoreContext.Provider>
  )
}

export default StoreContextProvider;

