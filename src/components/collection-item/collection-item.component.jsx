import React from 'react'
import './collection-item.styles.css'
const CollectionItem = ({name, imageUrl, price}) => (
    <div className='collection-item col-md-3'>
        
            <img src={imageUrl} alt=""/>
            <div className='collection-footer'>
                <span>{name}</span>
                <span className='price'>${price}</span>
            </div>
            
        
        
    </div>
   

)

export default CollectionItem