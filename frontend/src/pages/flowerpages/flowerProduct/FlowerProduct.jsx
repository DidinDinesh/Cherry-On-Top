import './FlowerProduct.css'
import { useContext } from "react"
import { StoreContext } from "../../../context/StoreContext"
import { useParams } from "react-router-dom";
import Breadcrum from "../../../components/breadcrums/Breadcrum";
import FlowerProductDisplay from "../../../components/flowerProductDisplay/FlowerProductDisplay";

function FlowerProduct() {

    const { flower_list, loading } = useContext(StoreContext);
    const { productId } = useParams();
  
    const product = flower_list.find ((e) => e._id === productId) 

    if (loading) {
        return <p>Loading...</p>; 
     }

    return (
        <div>
            <Breadcrum product = { product }/>
            <FlowerProductDisplay product = {product} />
        </div>
    );
}

export default FlowerProduct;