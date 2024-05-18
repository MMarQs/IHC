import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW MOVIES</h1>
        <hr/>
        <div className='collections'>
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} streaming_price={item.streaming_price} streaming_old_price={item.streaming_old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections