import React from 'react';

import './cart-item.styles.css'

const CartItem = ({item: {name, imageUrl, price, quantity}}) => (
    <div className='cart-item'>
        <img className='image' src={imageUrl} alt='item'/>
        <div className='cart-details'>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>

        </div>
    </div>
)



export default CartItem;