import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN STREAMING</h1>
        <hr/>
        <div className='popular-items'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} streaming_price={item.streaming_price} streaming_old_price={item.streaming_old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular