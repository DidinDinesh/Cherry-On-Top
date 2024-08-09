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
    towho: [],
    occasion: []
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'towho') {
      const updatedTowho = data.towho.includes(value)
        ? data.towho.filter(towho => towho !== value)
        : [...data.towho, value];
      setData(data => ({...data, towho: updatedTowho}));
    } 
    else if (name === 'occasion') {
      const updatedOccasion = data.occasion.includes(value)
        ? data.occasion.filter(occasion => occasion !== value)
        : [...data.occasion, value];
      setData(data => ({...data, occasion: updatedOccasion}));
    }
    else {
      setData(data => ({...data, [name]: value}));
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Validation checks
    if (data.towho.length === 0) {
      toast.error("Please select at least one towho");
      return;
    }

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
    data.towho.forEach(towho => formData.append("towho", towho))
    data.occasion.forEach(occasion => formData.append("occasion", occasion))
    formData.append("image", image)

    const response = await axios.post(`${url}/api/gifts/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Gifts",
        type: "Jewellery",
        towho: [],
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
    <div className="addgift">
      <form className="flex-col" onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
          <b>Upload Image</b>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) =>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <select onChange={onChangeHandler} className="add-main-category" name="category" value={data.category}>
          <option value="gifts">Gifts</option>
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
                <option value="Jewellery">Jewellery</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Dining & Serving">Dining & Serving</option>
                <option value="Other">Other</option>
              </select>
            </div>

          <div className="add-towho flex-col">
            <b>To who</b>
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
              <label>
                <input type="checkbox" name="occasion" value="Housewarming" onChange={onChangeHandler} checked={data.occasion.includes('Housewarming')} /> Housewarming
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

export default AddGift
