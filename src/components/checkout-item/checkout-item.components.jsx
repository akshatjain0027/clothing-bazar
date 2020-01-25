import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.action'

import './checkout-item.styles.css'

const CheckoutItem = ({cartItems, clearItem, addItem, removeItem }) => {
    const {imageUrl, name, price, quantity} = cartItems
    return(
        <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'> 
            <div className='arrow' onClick={ () => removeItem(cartItems)}>&#10094;</div> 
            <span className='value'>{quantity}</span> 
            <div className='arrow' onClick = { () => addItem(cartItems)}>&#10095;</div> 
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={ () => clearItem(cartItems)}>&#10005;</div>

    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);