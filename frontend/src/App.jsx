
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Blog from './pages/blog/Blog'
import ContactUs from './pages/contactUs/ContactUs'
import AboutUs from './pages/aboutUs/AboutUs'
import Cart from './pages/cart/Cart'
import AllCakes from './pages/allCakes/AllCakes'
import AllGifts from './pages/allgifts/AllGIfts'
import AllFlowers  from './pages/allFlowers/AllFlowers'
import AllCombo  from './pages/allCombos/AllCombo'
import CakeCategoryPage from './pages/cakecategorypage/CakeCategoryPage'
import GiftCategoryPage from './pages/giftcategorypage/GiftCategoryPage'
import FlowerCategoryPage from './pages/flowercategorypage/FlowerCategoryPage'
import ComboCategoryPage from './pages/combocategorypage/ComboCategoryPage'
import { useState } from "react"
import LoginPopUp from "./components/loginPopUP/LoginPopUp"
import CakeProduct from './pages/cakeProduct/cakeProduct'
import GiftProduct from "./pages/giftProduct/GiftProduct"
import FlowerProduct from "./pages/flowerProduct/FlowerProduct"
import ComboProduct from "./pages/comboProduct/ComboProduct"


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
              <Route path="/cart" element={<Cart/>} />
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
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

