import './ListFlowers.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"
import { Link } from 'react-router-dom'

const ListFlowers = ({url}) => {

  const [ list, setList ] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/flowers/list`);
    if(response.data.success) {
     setList(response.data.data); 
     setLoading(true);
    }
    else {
      toast.error("Error")
    }
  }

  const removeFlower = async (flowerId) => {
    const response = await axios.post(`${url}/api/flowers/remove`, {id:flowerId})
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

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flowerlist">
      <h3>All Flowers List</h3>
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
                <Link to={`/editflower/${item._id}`} className="cursor list-edit-btn">Edit</Link>
                <p onClick={() => removeFlower(item._id)} className="cursor">X</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListFlowers
