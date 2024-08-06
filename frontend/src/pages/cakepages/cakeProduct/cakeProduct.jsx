
import './CakeProduct.css'
import { useContext } from "react"
import { StoreContext } from "../../../context/StoreContext"
import { useParams } from "react-router-dom";
import Breadcrum from "../../../components/breadcrums/Breadcrum";
import CakeProductDisplay from "../../../components/cakeProductDisplay/CakeProductDisplay";


const CakeProduct = () => {

    const { cake_list, loading } = useContext(StoreContext);
    const { productId } = useParams();

    if (loading) {
      return <p>Loading...</p>; 
   }
  
    const product = cake_list.find ((e) => e._id === productId) 

  return (
    <div>
      <Breadcrum product = { product }/>
      <CakeProductDisplay product = { product } />
    </div>
  )
}

export default CakeProduct