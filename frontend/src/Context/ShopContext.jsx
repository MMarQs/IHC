import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0)
            {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const addPromoCode = (promoCode) => {
        if (promoCode === "blockbuster10" || promoCode === "IHC") {
            alert("Promo code applied successfully!");
            return getTotalCartAmount() * 0.9;
        } else {
            alert("Invalid promo code!");
        }
        return getTotalCartAmount();
    }

    const checkout = () => {
        alert("Checkout successful!");
        setCartItems(getDefaultCart());
        <Link to="/"></Link>
    }

    const trailer = (id) => {
        return all_product.find((product) => product.id === id).trailer;
    }

    const contextValue = {getTotalCartAmount, getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, trailer, addPromoCode, checkout};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;