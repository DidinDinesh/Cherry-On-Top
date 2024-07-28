
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import Blog from './pages/blog/Blog'
import ContactUs from './pages/contactUs/ContactUs'
import AllCakes from './pages/cakes/allCakes/AllCakes'
import AllGifts from './pages/gifts/allGifts/AllGifts'
import AllFlowers  from './pages/flowers/allFlowers/AllFlowers'
import { useState } from "react"
import LoginPopUp from "./components/loginPopUP/LoginPopUp"


const App = () => {

  const [ showLogin, setShowLogin ] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopUp/> : <></>}
      <div className="app">
        <Navbar setShowLogin ={setShowLogin} showLogin = { showLogin }/>
        <div className="app-content">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/contact" element={<ContactUs/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/cakes" element={<AllCakes/>} />
              <Route path="/gifts" element={<AllGifts/>} />
              <Route path="/flowers" element={<AllFlowers/>} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App

