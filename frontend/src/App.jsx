
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import MyOrders from './pages/myOrders/MyOrders'
import ContactUs from './pages/contactUs/ContactUs'
import NavbarSmall from "./components/navbarSmall/NavbarSmall"


const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <NavbarSmall />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/myOrders" element={<MyOrders/>} />
            <Route path="/contactUs" element={<ContactUs/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

