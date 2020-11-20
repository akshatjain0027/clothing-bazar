import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.action'

import './checkout-item.styles.css'

const CheckoutItem = ({cartItems, clearItem, addItem, removeItem }) => {
    const {images, name, discountPrice, quantity} = cartItems
    return(
        <div className='checkout-item'>
        <div className='image-container'>
            <img src={images[0]} alt="item" style={{width: "100%", height: "100%"}}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'> 
            <div className='arrow' onClick={ () => removeItem(cartItems)}>&#10094;</div> 
            <span className='value'>{quantity}</span> 
            <div className='arrow' onClick = { () => addItem(cartItems)}>&#10095;</div> 
        </span>
        <span className='price'>&#x20B9; {discountPrice.toPrecision(4)}</span>
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