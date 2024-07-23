import Header from "../../components/header/Header"
import './Home.css'
import Category from '../../components/category/Category'
import CakeCategory from '../../components/cakeCategory/CakeCategory'

const Home = () => {
  return (
    <div  className="home">
      <Header />
      <Category />
      <CakeCategory />
    </div>
  )
}

export default Home
