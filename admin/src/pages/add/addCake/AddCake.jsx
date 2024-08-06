import './AddCake.css'
import { assets } from "../../../assets/assets"
import axios from 'axios'
import { toast } from "react-toastify"
import { useState } from "react"

const AddCake = ({url}) => {
  const [ image, setImage ] = useState(false);
  const [ data, setData ] = useState({
    name: "",
    description: "",
    price: "",
    category: "Cakes",
    flavour: "vanilla",
    type: []
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'type') {
      const updatedType = data.type.includes(value)
        ? data.type.filter(type => type !== value)
        : [...data.type, value];
      setData(data => ({...data, type: updatedType}));
    } else {
      setData(data => ({...data, [name]: value}));
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("flavour", data.flavour)
    data.type.forEach(type => formData.append("type", type))
    formData.append("image", image)

    const response = await axios.post(`${url}/api/cakes/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Cakes",
        flavour: "Vanilla",
        type: []
      });
      setImage(false);
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }
  
  return (
    <div className="addcake">
      <form className="flex-col" onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) =>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <select onChange={onChangeHandler} className="add-main-category" name="category" value={data.category}>
          <option value="cakes">Cakes</option>
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
              <label>
                <input type="checkbox" name="type" value="Bestseller" onChange={onChangeHandler} checked={data.type.includes('Bestseller')} /> Bestseller
              </label>
              <label>
                <input type="checkbox" name="type" value="Eggless" onChange={onChangeHandler} checked={data.type.includes('Eggless')} /> Eggless
              </label>        
          </div>

          <div className="add-flavour flex-col">
            <p>Flavour</p>
            <select onChange={onChangeHandler} value={data.flavour} name="flavour">
              <option value="Vanilla">Vanilla</option>
              <option value="Butterscotch">Butterscotch</option>
              <option value="Choclate">Choclate</option>
              <option value="Fruit cake">Fruit cake</option>
              <option value="Pista">Pista</option>
              <option value="strawberry">Strawberry</option>
            </select>
          </div>
          
        </div>

        <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="&#8377;20" required/>
        </div>

        <button type="submit" className="add-btn">ADD</button>
      </form>
    </div>
  )
}

export default AddCake
