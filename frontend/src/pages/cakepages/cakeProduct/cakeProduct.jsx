import './cakeProduct.css'
import { useContext } from "react"
import { StoreContext } from "../../../context/StoreContext"
import { useParams } from "react-router-dom";
import Breadcrum from "../../../components/breadcrums/Breadcrum";
import CakeProductDisplay from "../../../components/cakeProductDisplay/CakeProductDisplay";


const Product = () => {

    const { cake_list } = useContext(StoreContext);
    const { productId } = useParams();
  
    const product = cake_list.find ((e) => e.id === productId) 

  return (
    <div>
      <Breadcrum product = { product }/>
      <CakeProductDisplay product = {product} />
    </div>
  )
}

export default Product
