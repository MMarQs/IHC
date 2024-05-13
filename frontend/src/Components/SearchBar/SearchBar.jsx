import React, { useState } from 'react';
import './SearchBar.css';
import new_collections from '../Assets/new_collections';

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('');

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
      <input
        placeholder="Search movie..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
