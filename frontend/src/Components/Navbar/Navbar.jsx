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
            <img className="nav-logo-img" src={logo} alt=''/>
            <p>BLOCKBUSTER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("streaming")}}><Link style={{ textDecoration: 'none' }} to="/streaming">Streaming</Link>{menu === "streaming" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("physical-copy")}}><Link style={{ textDecoration: 'none' }} to="/physical-copy">Physical Copy</Link>{menu === "physical-copy" ? <hr/> : <></>}</li>
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
