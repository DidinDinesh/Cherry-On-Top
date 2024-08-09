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
    type: [],
    occasion: []
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'type') {
      const updatedType = data.type.includes(value)
        ? data.type.filter(type => type !== value)
        : [...data.type, value];
      setData(data => ({...data, type: updatedType}));
    }
    else if (name === 'occasion') {
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
    if (data.type.length === 0) {
      toast.error("Please select at least one type");
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
    formData.append("flavour", data.flavour)
    data.type.forEach(type => formData.append("type", type))
    data.occasion.forEach(occasion => formData.append("occasion", occasion))
    formData.append("image", image)

    const response = await axios.post(`${url}/api/cakes/add`, formData);

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Cakes",
        flavour: "Vanilla",
        type: [],
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
    <div className="addcake">
      <form className="flex-col" onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
          <b>Upload Image</b>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) =>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <select onChange={onChangeHandler} className="add-main-category" name="category" value={data.category}>
          <option value="cakes">Cakes</option>
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

          <div className="add-flavour flex-col">
            <b>Flavour</b>
            <select onChange={onChangeHandler} value={data.flavour} name="flavour">
              <option value="Vanilla">Vanilla</option>
              <option value="Butterscotch">Butterscotch</option>
              <option value="Choclate">Choclate</option>
              <option value="Fruit cake">Fruit cake</option>
              <option value="Pista">Pista</option>
              <option value="Strawberry">Strawberry</option>
              <option value="Black forest">Black forest</option>
              <option value="White forest">White forest</option>
              <option value="Red velvet">Red velvet</option>
              <option value="Pineapple">Pineapple</option>
              <option value="Ferrero rocher">Ferrero rocher</option>
              <option value="Oreo cake">Oreo cake</option>
            </select>
          </div>

          <div className="add-type flex-col">
             <b>Type</b>
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
              <label>
                <input type="checkbox" name="type" value="Designer cake" onChange={onChangeHandler} checked={data.type.includes('Designer cake')} /> Designer cake
              </label>     
              <label>
                <input type="checkbox" name="type" value="Wedding cake" onChange={onChangeHandler} checked={data.type.includes('Wedding cake')} /> Wedding cake
              </label>
              <label>
                <input type="checkbox" name="type" value="Heart cake" onChange={onChangeHandler} checked={data.type.includes('Heart cake')} /> Heart cake
              </label>
              <label>
                <input type="checkbox" name="type" value="Bomb cake" onChange={onChangeHandler} checked={data.type.includes('Bomb cake')} /> Bomb cake
              </label>
              <label>
                <input type="checkbox" name="type" value="Jar cake" onChange={onChangeHandler} checked={data.type.includes('Jar cake')} /> Jar cake
              </label>
              <label>
                <input type="checkbox" name="type" value="Pull Me Up cake" onChange={onChangeHandler} checked={data.type.includes('Pull Me Up cake')} /> Pull Me Up cake
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

export default AddCake
