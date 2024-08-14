import './Home.css'
import Header from "../../components/header/Header"
import Category from '../../components/category/Category'
import CakeCategory from '../../components/cakeCategory/CakeCategory'
import FlowerCategory from "../../components/flowerCategory/FlowerCategory"
import GiftCategory from "../../components/gifrCategory/GiftCategory"
import ComboCategory from "../../components/comboCategory/ComboCategory"
import OccasionCategory from "../../components/occasionCategory/OccasionCategory"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"


const Home = () => {

  const { loading, setLoading } = useContext(StoreContext);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="home">
      <Header />
      <Category />
      <CakeCategory />
      <GiftCategory/>
      <FlowerCategory />
      <ComboCategory />
      <OccasionCategory />
    </div>
  )
}

export default Home
