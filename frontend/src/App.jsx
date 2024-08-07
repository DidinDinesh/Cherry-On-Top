
import { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Blog from './pages/blog/Blog'
import ContactUs from './pages/contactUs/ContactUs'
import AboutUs from './pages/aboutUs/AboutUs'
import AllCakes from './pages/cakepages/allCakes/AllCakes'
import AllGifts from './pages/giftpages/allgifts/AllGIfts'
import AllFlowers  from './pages/flowerpages/allFlowers/AllFlowers'
import AllCombo  from './pages/combopages/allCombos/AllCombo'
import CakeCategoryPage from './pages/cakepages/cakecategorypage/CakeCategoryPage'
import GiftCategoryPage from './pages/giftpages/giftcategorypage/GiftCategoryPage'
import FlowerCategoryPage from './pages/flowerpages/flowercategorypage/FlowerCategoryPage'
import ComboCategoryPage from './pages/combopages/combocategorypage/ComboCategoryPage'
import CakeProduct from './pages/cakepages/cakeProduct/CakeProduct'
import GiftProduct from "./pages/giftpages/giftProduct/GiftProduct"
import FlowerProduct from "./pages/flowerpages/flowerProduct/FlowerProduct"
import ComboProduct from "./pages/combopages/comboProduct/ComboProduct"
import LoginPopUp from "./components/loginPopUP/LoginPopUp"
import Cart from './pages/cart/Cart'
import PlaceOrder from "./pages/placeorder/PlaceOrder"
import Verify from "./pages/verify/Verify"


const App = () => {

  const [ showLogin, setShowLogin ] = useState(false);


  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin ={setShowLogin} showLogin = { showLogin }/>
        <div className="app-content">
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/blog" element={<Blog/>} />
              <Route path="/contact" element={<ContactUs/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/cakes" element={<AllCakes/>} />
              <Route path="/cakes/category/:categoryName" element={<CakeCategoryPage/>} />
              <Route path="/cakes/:productId" element={<CakeProduct/>} />
              <Route path="/gifts" element={<AllGifts/>} />
              <Route path="/gifts/category/:categoryName" element={<GiftCategoryPage/>} />
              <Route path="/gifts/:productId" element={<GiftProduct/>} />
              <Route path="/flowers" element={<AllFlowers/>} />
              <Route path="/flowers/category/:categoryName" element={<FlowerCategoryPage/>} />
              <Route path="/flowers/:productId" element={<FlowerProduct/>} />
              <Route path="/combos" element={<AllCombo/>} />
              <Route path="/combos/category/:categoryName" element={<ComboCategoryPage/>} />
              <Route path="/combos/:productId" element={<ComboProduct/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/placeorder" element={<PlaceOrder/>} />
              <Route path="/verify" element={<Verify/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

