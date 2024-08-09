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
    color: "Red flower",
    occasion: []
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'occasion') {
      const updatedOccasion = data.occasion.includes(value)
        ? data.occasion.filter(occasion => occasion !== value)
        : [...data.occasion, value];
      setData(data => ({...data, occasion: updatedOccasion}));
    } else {
      setData(data => ({...data, [name]: value}));
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Validation checks

    if (data.occasion.length === 0) {
      toast.error("Please select at least one occasion");
      return;
    }

    if (Number(data.price) <= 0 || isNaN(Number(data.price))) {
      toast.error("Price must be greater than zero");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("type", data.type)
    formData.append("color", data.color)
    data.occasion.forEach(occasion => formData.append("occasion", occasion))
    formData.append("image", image)

    const response = await axios.post(`${url}/api/flowers/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Flowers",
        type: "Rose",
        color: "Red flower",
        occasion: []
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
          <b>Upload Image</b>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) =>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <select onChange={onChangeHandler} className="add-main-category" name="category" value={data.category}>
          <option value="Flowers">Flowers</option>
        </select>

        <div className="add-product-name flex-col">
          <b>Product Name</b>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" />
        </div>

        <div className="add-product-desc flex-col">
          <b>Product description</b>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Write content here" required></textarea>
        </div>

        <div className="add-category flex-col">

        <div className="add-type flex-col">
            <b>Type</b>
            <select onChange={onChangeHandler} value={data.type} name="type">
              <option value="Rose">Rose</option>
              <option value="Orchid">Orchid</option>
              <option value="Lily">Lily</option>
              <option value="Sunflower">Sunflower</option>
              <option value="Dried Flowers">Dried Flowers</option>
              
            </select>
          </div>

          <div className="add-color flex-col">
            <b>Color</b>
            <select onChange={onChangeHandler} value={data.color} name="color">
              <option value="Red flower">Red flower</option>
              <option value="White flower">White flower</option>
              <option value="Purple flower">Purple flower</option>
              <option value="Blue flower">Blue flower</option>
              <option value="Yellow flower">Yellow flower</option>
              <option value="Mixed Flower">Mixed Flower</option>
            </select>
          </div>

          <div className="add-occasion flex-col">
             <b>Occasion</b>
              <label>
                <input type="checkbox" name="occasion" value="Birthday" onChange={onChangeHandler} checked={data.occasion.includes('Birthday')} /> Birthday
              </label>
              <label>
                <input type="checkbox" name="occasion" value="Anniversary" onChange={onChangeHandler} checked={data.occasion.includes('Anniversary')} /> Anniversary
              </label>
              <label>
                <input type="checkbox" name="occasion" value="Valentines day" onChange={onChangeHandler} checked={data.occasion.includes('Valentines day')} /> Valentines day
              </label>
              <label>
                <input type="checkbox" name="occasion" value="Christmas" onChange={onChangeHandler} checked={data.occasion.includes('Christmas')} /> Christmas
              </label> 
              <label>
                <input type="checkbox" name="occasion" value="New year" onChange={onChangeHandler} checked={data.occasion.includes('New year')} /> New year
              </label>       
              <label>
                <input type="checkbox" name="occasion" value="Onam" onChange={onChangeHandler} checked={data.occasion.includes('Onam')} /> Onam
              </label>   
              <label>
                <input type="checkbox" name="occasion" value="Engagement" onChange={onChangeHandler} checked={data.occasion.includes('Engagement')} /> Engagement
              </label> 
              <label>
                <input type="checkbox" name="occasion" value="Wedding" onChange={onChangeHandler} checked={data.occasion.includes('Wedding')} /> Wedding
              </label> 
          </div>
          
        </div>

        <div className="add-price flex-col">
            <b>Product price</b>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="&#8377;20" required/>
        </div>

        <button type="submit" className="add-btn">ADD</button>
      </form>
    </div>
  )
}

export default AddFlower
