import React, { useContext, useState } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const itemsPerPage = 16;
  

  const filteredProducts = all_product.filter(product => {
    const nameMatchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const genreMatchesFilter = !selectedGenre || product.genre.toLowerCase().includes(selectedGenre.toLowerCase());
    return nameMatchesSearch && genreMatchesFilter;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const start = ((currentPage - 1) * itemsPerPage) + 1;
  const end = Math.min(currentPage * itemsPerPage, filteredProducts.length);
  
  const loadPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className='shop-category'>
      <div className='shopcategory-indexSort'>
        <div className='shopcategory-search'>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className='shopcategory-sort'>
          Sort by Genre: 
          <select value={selectedGenre} onChange={handleGenreChange}>
            <option value="">All</option>
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
        <p>
          <span>Showing {start}-{end}</span> out of {filteredProducts.length} products
        </p>
      </div>
      <div className='shopcategory-products'>
        {filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, i) => {
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
  );
};

export default ShopCategory;
