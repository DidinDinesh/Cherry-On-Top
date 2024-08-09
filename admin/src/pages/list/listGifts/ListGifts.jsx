import './ListGifts.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"
import { Link } from 'react-router-dom'

const ListGifts = ({url}) => {

  const [ list, setList ] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/gifts/list`);
    if(response.data.success) {
     setList(response.data.data); 
    }
    else {
      toast.error("Error")
    }
  }

  const removeGift = async (giftId) => {
    const response = await axios.post(`${url}/api/gifts/remove`, {id:giftId})
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
    <div className="giftlist">
      <h3>All Gifts List</h3>
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
              <p>{item.type}</p>
              <p>&#8377; {item.price}</p>
              <div className="actions">
                <Link to={`/editgift/${item._id}`} className="cursor list-edit-btn">Edit</Link>
                <p onClick={() => removeGift(item._id)} className="cursor">X</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListGifts
