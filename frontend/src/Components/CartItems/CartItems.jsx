import React, {useContext} from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { useState } from 'react'

export const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart, checkout} = useContext(ShopContext)
    const [promocode, setPromoCode] = useState('');
    const [totalAmount, discount, totalAmount1, percentage, promoApplied] = getTotalCartAmount(promocode);

    const handleInputChange = (event) => {
        setPromoCode(event.target.value);
    };

    return (
        <div className='cartitems'>
            <div className='caritems-format-main'> 
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Category</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0)
                {
                    return <div>
                                <div className='cartitems-format caritems-format-main'>
                                    <img src={e.image} alt="" className='carticon-product-icon'/>
                                    <p>{e.name}</p>
                                    <p>€{e.price}</p>
                                    <p>{e.category}</p>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <p>€{e.price * cartItems[e.id]}</p>
                                    <img className="cartitems-remove-icon" src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                                </div>
                                <hr/>
                            </div>
                }    
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>€{totalAmount1}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Discount</p>
                            <p>€{discount}</p>
                        </div>
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>€{totalAmount}</h3>
                        </div>
                    </div>
                    <button onClick={() => checkout()}>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitems-promocode'>
                    <h3>If you have a promo code, enter it here</h3>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='Promo code' value={promocode} onChange={handleInputChange}/>
                        {promoApplied && <p>The promocode has been applied! ({percentage})</p>}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CartItems