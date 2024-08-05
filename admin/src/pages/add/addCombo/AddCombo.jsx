import './AddCombo.css'
import { assets } from "../../../assets/assets"
import axios from 'axios'
import { toast } from "react-toastify"
import { useState } from "react"


const AddCombo = ({url}) => {

  const [ image, setImage ] = useState(false);
  const [ data, setData ] = useState({
    name: "",
    description: "",
    price: "",
    category: "Combos",
    type: "Cake & Flower",
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
    formData.append("image", image)

    const response = await axios.post(`${url}/api/combos/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Combos",
        type: "Cake & Flower",
      });
      setImage(false);
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }

  return (
    <div className="addcombo">
      <form className="flex-col" onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
            <input onChange={(e) =>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <select onChange={onChangeHandler} className="add-main-category" name="category" value={data.category}>
            <option value="Combos">Combos</option>
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
              <option value="Cake & Flower">Cake & Flower</option>
              <option value="Cake & gift">Cake & gift</option>
              <option value="Cake & choclate">Cake & choclate</option>
              <option value="Flower & gift">Flower & gift</option>
              <option value="Flower & choclate">Flower & choclate</option>
              <option value="Gift & choclate">Gift & choclate</option>
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

export default AddCombo
