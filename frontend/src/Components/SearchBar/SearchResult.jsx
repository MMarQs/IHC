import React from "react";
import { Link } from "react-router-dom";

import './SearchResult.css';

export const SearchResult = ({ result }) => {
  return (
    <Link to={`/product/${result.id}`} className="search-result" style={{ textDecoration: 'none', color: 'inherit' }}>
      {result.name}
    </Link>
  );
};
