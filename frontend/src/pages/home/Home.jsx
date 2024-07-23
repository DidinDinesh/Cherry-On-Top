import Header from "../../components/header/Header"
import './Home.css'
import Category from '../../components/category/Category'
import CakeCategory from '../../components/cakeCategory/CakeCategory'
import FlowerCategory from "../../components/flowerCategory/FlowerCategory"



const Home = () => {
  return (
    <div className="home">
      <Header />
      <Category />
      <CakeCategory />
      <FlowerCategory />
    </div>
  )
}

export default Home
