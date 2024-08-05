import './ListCakes.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"

const ListCakes = ({url}) => {

  const [ list, setList ] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/cakes/list`);
    if(response.data.success) {
     setList(response.data.data); 
    }
    else {
      toast.error("Error")
    }
  }

  const removeCake = async (cakeId) => {
    const response = await axios.post(`${url}/api/cakes/remove`, {id:cakeId})
    await fetchList();
    if(response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className="cakelist">
      <h3>All Cakes List</h3>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Categary</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+ item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.flavour}</p>
              <p>&#8377; {item.price}</p>
              <p onClick={() => removeCake(item._id)} className="cursor">X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListCakes
