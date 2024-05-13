import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
import { useState } from "react";


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

    const getTotalCartAmount = (promoCode) => {
        let totalAmount = 0;
        let totalAmount1 = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount1 += itemInfo.price * cartItems[item];
            }
        }
    
        let discount = 0;
        if (promoCode === "blockbuster10" || promoCode === "IHC") {
            discount = totalAmount1 * 0.1;
            totalAmount = 0.9 * totalAmount1;
        } else if (promoCode === "freewtf") {
            discount = totalAmount1 * 1;
            totalAmount = 0 * totalAmount1;
        } else {
            totalAmount = totalAmount1;
        }
    
        return [totalAmount.toFixed(2), discount.toFixed(2), totalAmount1.toFixed(2)];
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

    const checkout = () => {
        alert("Checkout successful!");
        setCartItems(getDefaultCart());
        window.location.href = "/";
    }

    const contextValue = {getTotalCartAmount, getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, checkout};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;