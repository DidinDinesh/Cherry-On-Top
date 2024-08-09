import './SearchResults.css'
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import Category from '../../components/category/Category'

const SearchResults = () => {

  const { search } = useLocation();

  const query = new URLSearchParams(search).get('query'); 

  const { Total_Product_List, handleScrollToTop, url } = useContext(StoreContext)

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredResults = Total_Product_List.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query, Total_Product_List]);

  return (
    <div>
        <Category />
        <div className="all-search-results">
        <div className="search-result-container">
            {results.map((item, index) => (
                <div key={index} className="search-result-card">
                <div className="search-result-image">
                    <Link to={`/${item.category}/${item._id}`} onClick={handleScrollToTop}><img src={url+"/images/"+item.image} /></Link>
                </div>
                <p className="search-result-name">{item.name}</p>
                <p className="search-result-price">&#8377; {item.price}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default SearchResults
