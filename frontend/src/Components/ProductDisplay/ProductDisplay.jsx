import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import half_star_icon from '../Assets/half_star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    const renderStars = (rating) => {
        let stars = [];
        let fullStars = Math.floor(rating);
        let halfStars = ((rating - fullStars) >= 0.5 && (rating - fullStars) < 1) ? 1 : 0;
        let dullStars = 5 - fullStars - halfStars;
        for (let i = 0; i < fullStars; i++) {
            stars.push(<img src={star_icon} alt='star' key={`full${i}`} />);
        }
    
        for (let i = 0; i < halfStars; i++) {
            stars.push(<img src={half_star_icon} alt='half star' key={`half${i}`} />);
        }
    
        for (let i = 0; i < dullStars; i++) {
            stars.push(<img src={star_dull_icon} alt='dull star' key={`dull${i}`} />);
        }
    
        return stars;
    }

    return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                {(product.movie_rating / 2).toFixed(1)}
                {renderStars(product.movie_rating/2)}
                <p>({product.review_count})</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>
                    €{product.old_price}
                </div>
                <div className='productdisplay-right-price-new'>
                    €{product.new_price}
                </div>
            </div>
            <div className='productdisplay-right-description'>
                {product.movie_description}
                <p className='productdisplay-right-category'><span>Category: </span>{product.genre}</p>
                <p className='productdisplay-right-movie-stars'><span>Movie Stars: </span>{product.movie_stars}</p>
                <p className='productdisplay-right-movie-director'><span>Director: </span>{product.movie_director}</p>
                <p className='productdisplay-right-movie-runtime'><span>Runtime: </span>{product.movie_runtime}</p>
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Type</h1>
                <div className='productdisplay-right-sizes'>
                    <div>Streaming</div>
                    <div>Physical Copy</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay