import './ComboProduct.css'
import { useContext } from "react"
import { StoreContext } from "../../../context/StoreContext"
import { useParams } from "react-router-dom";
import Breadcrum from "../../../components/breadcrums/Breadcrum";
import ComboProductDisplay from "../../../components/comboProductDisplay/ComboProductDisplay"


const ComboProduct = () => {

  const { combo_list } = useContext(StoreContext);
    const { productId } = useParams();
  
    const product = combo_list.find ((e) => e.id === productId) 


  return (
    <div>
      <Breadcrum product = { product }/>
      <ComboProductDisplay product = {product} />
    </div>
  )
}

export default ComboProduct
