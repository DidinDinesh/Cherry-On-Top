
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
              <Route path="/" element={<Home/>}/>
              <Route path="/blog" element={<Blog/>} />
              <Route path="/contact" element={<ContactUs/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/cakes" element={<AllCakes/>} />
              <Route path="/gifts" element={<AllGifts/>} />
              <Route path="/flowers" element={<AllFlowers/>} />
              <Route path="/combos" element={<AllCombo/>} />
              <Route path="/cakes" element={<CakeProduct/>}>
                <Route path=":productId" element={<CakeProduct/>} />
              </Route>
              <Route path="/gifts" element={<GiftProduct/>}>
                <Route path=":productId" element={<GiftProduct/>} />
              </Route>
              <Route path="/flowers" element={<FlowerProduct/>}>
                <Route path=":productId" element={<FlowerProduct/>} />
              </Route>
              <Route path="/combos" element={<ComboProduct/>}>
                <Route path=":productId" element={<ComboProduct/>} />
              </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

