import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './checkoutpage.styles.css'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.components';
import { Card, Typography } from '@material-ui/core';
import background from "../../assets/cart2.jfif";
const CheckoutPage = ({cartItems, total}) => (
    <div>
        <img src={background} style={{position: "relative",width: "100%", height: "600px", opacity: "1"}}/>
        <div style={{top: "150px", position: "absolute", left: "550px", color: "white", textAlign: "center"}}>
            <Typography variant="h1" style={{fontFamily: "cursive", fontWeight: "bold"}}>
                YOUR CART
            </Typography>
            <Typography variant="h4" style={{fontFamily: "cursive", marginTop: "20px"}}>
                Buy your selected items with just one Click
            </Typography>
        </div>
        
        <Card elevation={10} style={{width: "60%", top: "350px", position: "absolute", left: "300px"}}>
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>

                { 
                    cartItems.map(cartItem => 
                        <CheckoutItem key={cartItem.id} cartItems={cartItem}/>
                    )
                }
                <div className='total'>
                    <span>TOTAL: Rs. {total}</span>
                </div>
            </div>
        </Card>
    </div>
    
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);