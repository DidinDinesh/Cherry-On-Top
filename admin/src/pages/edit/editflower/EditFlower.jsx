import './EditFlower.css'
import { useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const EditFlower = ({url}) => {

  const { itemId } = useParams();

    const navigate = useNavigate();

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

        if (Number(data.price) <= 0 || isNaN(Number(data.price))) {
            toast.error("Price must be greater than zero");
            return;
        }
    
        const response = await axios.post(`${url}/api/flowers/edit`, { itemId, price: Number(data.price)});
    
        if (response.data.success) {
          toast.success("flowr details updated successfully");
          navigate('/listflowers');
        } else {
          toast.error("Error updating flower details");
        }
      };

  return (
    <div className="editflower">
      <form className="flex-col" onSubmit={onSubmitHandler}>
          <div className="edit-price flex-col">
              <p>New price</p>
              <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder="&#8377;20" />
            </div>
        <button type="submit" className="edit-btn">Save Changes</button>
      </form>
    </div>
  )
}

export default EditFlower
