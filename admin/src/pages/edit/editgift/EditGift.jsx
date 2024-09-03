import './EditGift.css'
import { useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { assets } from "../../../assets/assets"

const EditGift = ({url}) => {

  const { itemId } = useParams();

    const navigate = useNavigate();

    const [ image, setImage ] = useState(false);
    const [data, setData] = useState({
        price: ""
      });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
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
        formData.append("image", image)
    
        const response = await axios.post(`${url}/api/gifts/edit`, formData, {headers: {'Content-Type': 'multipart/form-data'}});
    
        if (response.data.success) {
          toast.success("gift details updated successfully");
          navigate('/listgifts');
        } else {
          toast.error("Error updating gift details");
        }
      };

  return (
    <div className="editgift">
      <form className="flex-col" onSubmit={onSubmitHandler}>
          <div className="add-img-upload flex-col">
              <b>Upload Image</b>
              <label htmlFor="image">
                <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
              </label>
              <input onChange={(e) =>setImage(e.target.files[0])} type="file" id="image" hidden />
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

export default EditGift
