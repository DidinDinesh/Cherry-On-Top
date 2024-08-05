import './AddFlower.css'
import { assets } from "../../../assets/assets"
import axios from 'axios'
import { toast } from "react-toastify"
import { useState } from "react"

const AddFlower = ({url}) => {

  const [ image, setImage ] = useState(false);
  const [ data, setData ] = useState({
    name: "",
    description: "",
    price: "",
    category: "Flowers",
    type: "Rose",
    color: "Red flower"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("type", data.type)
    formData.append("color", data.color)
    formData.append("image", image)

    const response = await axios.post(`${url}/api/flowers/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Flowers",
        type: "Rose",
        color: "Red flower"
      });
      setImage(false);
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }

  return (
    <div className="addflower">
      <form className="flex-col" onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) =>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <select onChange={onChangeHandler} className="add-main-category" name="category" value={data.category}>
          <option value="Flowers">Flowers</option>
        </select>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" />
        </div>

        <div className="add-product-desc flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Write content here" required></textarea>
        </div>

        <div className="add-category">

        <div className="add-type flex-col">
            <p>Type</p>
            <select onChange={onChangeHandler} value={data.type} name="type">
              <option value="Rose">Rose</option>
              <option value="Orchid">Orchid</option>
              <option value="Lily">Lily</option>
              <option value="Sunflower">Sunflower</option>
            </select>
          </div>

          <div className="add-color flex-col">
            <p>Color</p>
            <select onChange={onChangeHandler} value={data.color} name="color">
              <option value="Red flower">Red flower</option>
              <option value="White flower">White flower</option>
              <option value="Purple flower">Purple flower</option>
              <option value="Blue flower">Blue flower</option>
              <option value="Yellow flower">Yellow flower</option>
              <option value="Mixed Flower">Mixed Flower</option>
            </select>
          </div>
          
        </div>

        <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="$20" />
        </div>

        <button type="submit" className="add-btn">ADD</button>
      </form>
    </div>
  )
}

export default AddFlower
