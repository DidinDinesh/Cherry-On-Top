
import { Navbar } from './components/navbar/Navbar'
import { SideBar } from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home"
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
import EditCake from "./pages/edit/editcake/EditCake"
import EditGift from "./pages/edit/editgift/EditGift"
import EditFlower from "./pages/edit/editflower/EditFlower"
import EditCombo from "./pages/edit/editcombo/EditCombo"




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
          <Route path="/" element={<Home/>} />
          <Route path="/addcake" element={<AddCake url={url}/>} />
          <Route path="/addgift" element={<AddGift url={url}/>} />
          <Route path="/addflower" element={<AddFlower url={url}/>} />
          <Route path="/addcombo" element={<AddCombo url={url}/>} />
          <Route path="/listcakes" element={<ListCakes url={url}/>} />
          <Route path="/listgifts" element={<ListGifts url={url}/>} />
          <Route path="/listflowers" element={<ListFlowers url={url}/>} />
          <Route path="/listcombos" element={<ListCombos url={url}/>} />
          <Route path="/order" element={<Orders url={url}/>} />
          <Route path="/editcake/:itemId" element={<EditCake url={url} />} />
          <Route path="/editgift/:itemId" element={<EditGift url={url} />} />
          <Route path="/editflower/:itemId" element={<EditFlower url={url} />} />
          <Route path="/editcombo/:itemId" element={<EditCombo url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
