import React, {useState} from 'react'
import './SearchBar.css'

export const SearchBar = () => {
  const [input, setInput] = useState("")
  return (
    <div className="input-wrapper"> 
      <input placeholder="Search movie..." value={input} onChange={(e) => setInput(e.target.value)}/> 
    </div>
  )
}

export default SearchBar