import React, {useState} from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");

    return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Link to="/">
                <img className="nav-logo-img" src={logo} alt="Logo" />
            </Link>
            <a href='/'><p>BLOCKBUSTER</p></a>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("movies")}}><Link style={{ textDecoration: 'none' }} to="/movies">Movies</Link>{menu === "movies" ? <hr/> : <></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>   
        </div>
    </div>
  )
}

export default Navbar