import Header from "../../components/header/Header"
import './Home.css'
import Category from '../../components/category/Category'
import CakeCategory from '../../components/cakeCategory/CakeCategory'
import FlowerCategory from "../../components/flowerCategory/FlowerCategory"
import GiftCategory from "../../components/gifrCategory/GiftCategory"
import ComboCategory from "../../components/comboCategory/ComboCategory"
import OccasionCategory from "../../components/occasionCategory/OccasionCategory"
import {  useContext } from "react"
import { StoreContext } from "../../context/StoreContext"


const Home = () => {

  const { cakeGroup, setCakeGroup, giftGroup, setGiftGroup, flowerGroup, setFlowerGroup, comboGroup, setComboGroup } = useContext(StoreContext); 

  return (
    <div className="home">
      <Header />
      <Category />
      <CakeCategory cakeGroup={cakeGroup} setCakeGroup={setCakeGroup} />
      <GiftCategory giftGroup={giftGroup} setGiftGroup={setGiftGroup}/>
      <FlowerCategory flowerGroup={flowerGroup} setFlowerGroup={setFlowerGroup} />
      <ComboCategory comboGroup={cakeGroup} setComboGroup={setComboGroup}/>
      <OccasionCategory />
    </div>
  )
}

export default Home
