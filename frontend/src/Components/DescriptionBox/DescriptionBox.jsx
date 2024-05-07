import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = (props) => {
  const {product} = props;
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews ({product.review_count})</div>
        </div>
        <div className='descriptionbox-description'>
            <p>
                {product.movie_description}
            </p>
            
        </div>
    </div>
  )
}

export default DescriptionBox