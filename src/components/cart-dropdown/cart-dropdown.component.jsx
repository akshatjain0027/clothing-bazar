import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'   // this function by default passes the top level state to our selectors without our explicitly mentioning the state.


import './cart-dropdown.styles.css'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-items/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                : <span className='empty-message'>Your cart is empty</span>     // if cart is empty then this span will render
            }
        </div>
        <CustomButton onClick={()=> 
            { 
                history.push('/checkout')
                dispatch(toggleCartHidden()) 
            }}>
            Go To Checkout
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));