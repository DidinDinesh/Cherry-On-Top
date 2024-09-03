import './EditCake.css'
import { useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { assets } from "../../../assets/assets"

const EditCake = ({url}) => {

    const { itemId } = useParams();

    const navigate = useNavigate();

    const [ image, setImage ] = useState(false);
    const [data, setData] = useState({
        price: "",
        type: []
      });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        if (name === 'type') {
        const updatedType = data.type.includes(value)
            ? data.type.filter(type => type !== value)
            : [...data.type, value];
        setData(data => ({ ...data, type: updatedType }));
        } else {
        setData(data => ({ ...data, [name]: value }));
        }
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // Validation checks

        if(data.price) {
          if (Number(data.price) <= 0 || isNaN(Number(data.price))) {
            toast.error("Price must be greater than zero");
            return;
          }
        }
        
        const formData = new FormData();
        formData.append("itemId", itemId)
        formData.append("price", Number(data.price))
        data.type.forEach(type => formData.append("type", type))
        formData.append("image", image)
    
        const response = await axios.post(`${url}/api/cakes/edit`, formData, {headers: {'Content-Type': 'multipart/form-data'}});
    
        if (response.data.success) {
          toast.success("Cake details updated successfully");
          navigate('/listcakes');
        } else {
          toast.error("Error updating cake details");
        }
      };

  return (
    <div className="editcake">
      <form className="flex-col" onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
            <b>Upload Image</b>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
            <input onChange={(e) =>setImage(e.target.files[0])} type="file" id="image" hidden />
        </div>

        <div className="edit-type flex-col">
            <p>All Type</p>
            <label>
                <input type="checkbox" name="type" value="Bestseller" onChange={onChangeHandler} checked={data.type.includes('Bestseller')} /> Bestseller
            </label>
            <label>
                <input type="checkbox" name="type" value="Eggless" onChange={onChangeHandler} checked={data.type.includes('Eggless')} /> Eggless
            </label>
            <label>
                <input type="checkbox" name="type" value="Photo cake" onChange={onChangeHandler} checked={data.type.includes('Photo cake')} /> Photo cake
            </label>
            <label>
                <input type="checkbox" name="type" value="Cartoon cake" onChange={onChangeHandler} checked={data.type.includes('Cartoon cake')} /> Cartoon cake
            </label>
            <label>
                <input type="checkbox" name="type" value="Bento cake" onChange={onChangeHandler} checked={data.type.includes('Bento cake')} /> Bento cake
            </label>
        </div>
        

        <div className="edit-price flex-col">
            <p>New price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder="&#8377;20" />
        </div>

        <button type="submit" className="edit-btn">Save Changes</button>
        
      </form>
    </div>
  )
}

export default EditCake
