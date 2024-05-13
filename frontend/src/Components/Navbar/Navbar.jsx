import React, {useState} from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import SearchBar from '../SearchBar/SearchBar'

export const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");

    const [results, setResults] = useState([]);

    return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Link to="/">
                <img className="nav-logo-img" src={logo} alt="Logo" />
            </Link>
            <p>BLOCKBUSTER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("movies")}}><Link style={{ textDecoration: 'none' }} to="/movies">Movies</Link>{menu === "movies" ? <hr/> : <></>}</li>
        </ul>
        <SearchBar setResults={setResults} results={results}/>
        <div className='nav-login-cart'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>   
        </div>
    </div>
  )
}

export default Navbar