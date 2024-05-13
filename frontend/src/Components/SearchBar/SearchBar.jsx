import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';
import new_collections from '../Assets/all_product';
import { Link } from "react-router-dom";

export const SearchBar = ({ setResults, results }) => {
  const [input, setInput] = useState('');
  const resultsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setResults([]);
        setInput(''); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [resultsRef, setResults]);

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() !== '') {
      // Filter the movies array based on the input value
      const results = new_collections.filter((movie) =>
        movie.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(results);
    } else {
      // Clear the search results when the input is empty
      setResults([]);
    }
  };

  return (
    <div className="input-wrapper">
      <div className='search-bar'>
        <input
          placeholder="Search movie..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="results-list" ref={resultsRef}>
        {results.map((result) => {
          return (
            <Link to={`/product/${result.id}`} className="search-result" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setResults([])}>
              {result.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
