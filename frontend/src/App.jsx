
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import Blog from './pages/blog/Blog'
import ContactUs from './pages/contactUs/ContactUs'


const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="app-content">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/contactUs" element={<ContactUs/>} />
              <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App

