
import { Navbar } from './components/navbar/Navbar'
import { SideBar } from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddCake from './pages/add/addCake/AddCake'
import AddGift from './pages/add/addGift/AddGift'
import AddFlower from './pages/add/addFlower/AddFlower'
import AddCombo from './pages/add/addCombo/AddCombo'
import ListCakes from './pages/list/listCakes/ListCakes'
import ListGifts from './pages/list/listGifts/ListGifts'
import ListFlowers from './pages/list/listFlowers/ListFlowers'
import ListCombos from './pages/list/listCombos/ListCombos'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from "./pages/orders/Orders"



const App = () => {

  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
      <SideBar />
      <Routes>
        <Route path="/addcake" element={<AddCake url={url}/>} />
        <Route path="/addgift" element={<AddGift url={url}/>} />
        <Route path="/addflower" element={<AddFlower url={url}/>} />
        <Route path="/addcombo" element={<AddCombo url={url}/>} />
        <Route path="/listcakes" element={<ListCakes url={url}/>} />
        <Route path="/listgifts" element={<ListGifts url={url}/>} />
        <Route path="/listflowers" element={<ListFlowers url={url}/>} />
        <Route path="/listcombos" element={<ListCombos url={url}/>} />
        <Route path="/order" element={<Orders url={url}/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App
