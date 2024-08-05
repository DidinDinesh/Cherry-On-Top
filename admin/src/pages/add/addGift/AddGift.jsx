import './AddGift.css'
import { assets } from "../../../assets/assets"
import axios from 'axios'
import { toast } from "react-toastify"
import { useState } from "react"



const AddGift = ({url}) => {

  const [ image, setImage ] = useState(false);
  const [ data, setData ] = useState({
    name: "",
    description: "",
    price: "",
    category: "Gifts",
    type: "Jewellery",
    towho: []
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'towho') {
      const updatedTowho = data.towho.includes(value)
        ? data.towho.filter(towho => towho !== value)
        : [...data.towho, value];
      setData(data => ({...data, towho: updatedTowho}));
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
    formData.append("type", data.type)
    data.towho.forEach(towho => formData.append("towho", towho))
    formData.append("image", image)

    const response = await axios.post(`${url}/api/gifts/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Gifts",
        type: "Jewellery",
        towho: []
      });
      setImage(false);
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }


  return (
    <div className="addgift">
      <form className="flex-col" onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) =>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <select onChange={onChangeHandler} className="add-main-category" name="category" value={data.category}>
          <option value="gifts">Gifts</option>
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
            <p>To who</p>
              <label>
                <input type="checkbox" name="towho" value="For Her" onChange={onChangeHandler} checked={data.towho.includes('For Her')} /> For Her
              </label>
              <label>
                <input type="checkbox" name="towho" value="For Him" onChange={onChangeHandler} checked={data.towho.includes('For Him')} /> For Him
              </label>      
              <label>
                <input type="checkbox" name="towho" value="For Kids" onChange={onChangeHandler} checked={data.towho.includes('For Kids')} /> For Kids
              </label>    
              <label>
                <input type="checkbox" name="towho" value="For Parents" onChange={onChangeHandler} checked={data.towho.includes('For Parents')} /> For Parents
              </label>      
          </div>

          <div className="add-flavour flex-col">
            <p>Type</p>
            <select onChange={onChangeHandler} value={data.type} name="type">
              <option value="Jewellery">Jewellery</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Dining & Serving">Dining & Serving</option>
              <option value="Other">Other</option>
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

export default AddGift
