import React, { useContext, useState } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(all_product.length / itemsPerPage);
  const start = ((currentPage - 1) * itemsPerPage) + 1;
  const end = Math.min(currentPage * itemsPerPage, all_product.length);
  
  const loadPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='shop-category'>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing {start}-{end}</span> out of {all_product.length} products
        </p>
        <div className='shopcategory-sort'>
          Sort by: 
          <select>
            <option value=""> </option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
          </select>
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} streaming_price={item.streaming_price} streaming_old_price={item.streaming_old_price}/>;
        })}
      </div> 

      <div className='shopcategory-pagination'>
        {[...Array(totalPages).keys()].map((page) => (
          <button 
            key={page} 
            onClick={() => loadPage(page + 1)}
            className={currentPage === page + 1 ? 'active' : ''}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ShopCategory
