/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios'


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "https://cherry-on-top-backend.onrender.com"

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    
    const [token,setToken] = useState("");

    const [cake_list, setCake_list ] = useState([]);
    const [gift_list, setGift_list ] = useState([]);
    const [flower_list, setFlower_list ] = useState([]);
    const [combo_list, setCombo_list ] = useState([]);

    const [ cakeGroup, setCakeGroup ] = useState("All");
    const [ giftGroup, setGiftGroup ] = useState("All");
    const [ flowerGroup, setFlowerGroup ] = useState("All");
    const [ comboGroup, setComboGroup ] = useState("All");
    const [ occasionGroup, setOccasionGroup ] = useState("All");

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

    const fetchCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get", {}, {headers:{token}})
        setCartItems(response.data.cartData);
    }

    const loadAllData = async () => {

        setLoading(true);

        try {
            const [cakes, gifts, flowers, combos] = await Promise.all([
                axios.get(url + "/api/cakes/list", { params: { limit: 10 } }),
                axios.get(url + "/api/gifts/list", { params: { limit: 10 } }),
                axios.get(url + "/api/flowers/list", { params: { limit: 10 } }),
                axios.get(url + "/api/combos/list", { params: { limit: 10 } }),
            ]);
            setCake_list(cakes.data.data);
            setGift_list(gifts.data.data);
            setFlower_list(flowers.data.data);
            setCombo_list(combos.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        async function loadData() {
            
            await loadAllData();

        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            await fetchCartData(localStorage.getItem("token"));
        }
    }
        loadData();
    },[])

    const Total_Product_List = useMemo(() => {
        return [...cake_list, ...gift_list, ...flower_list, ...combo_list];
    }, [cake_list, gift_list, flower_list, combo_list]);


    const contextValue = useMemo(() => ({
        url,
        handleScrollToTop,
        token,
        setToken,
        cake_list,
        gift_list,
        flower_list,
        combo_list,
        cakeGroup,
        setCakeGroup,
        giftGroup,
        setGiftGroup,
        flowerGroup,
        setFlowerGroup,
        comboGroup,
        setComboGroup,
        occasionGroup,
        setOccasionGroup,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItem,
        getTotalCartAmount,   
        getTotalCartItems,
        loading,
        Total_Product_List
    }), [
        url,
        handleScrollToTop,
        token,
        cake_list,
        gift_list,
        flower_list,
        combo_list,
        cakeGroup,
        giftGroup,
        flowerGroup,
        comboGroup,
        occasionGroup,
        cartItems,
        loading,
        Total_Product_List
    ]);

  
  return (
      <StoreContext.Provider value={contextValue}>
          {props.children}
      </StoreContext.Provider>
  )
}

export default StoreContextProvider;

