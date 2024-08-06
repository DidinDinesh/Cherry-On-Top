import './GiftProduct.css'
import { useContext } from "react"
import { StoreContext } from "../../../context/StoreContext"
import { useParams } from "react-router-dom";
import Breadcrum from "../../../components/breadcrums/Breadcrum";
import GiftProductDisplay from "../../../components/giftProductDisplay/GiftProductDisplay";

const GiftProduct = () => {

    const { gift_list, loading } = useContext(StoreContext);
    const { productId } = useParams();
  
    const product = gift_list.find ((e) => e._id === productId) 

    if (loading) {
      return <p>Loading...</p>; 
    }

  return (
    <div>
      <Breadcrum product = { product }/>
      <GiftProductDisplay product = {product} />
    </div>
  )
}

export default GiftProduct
