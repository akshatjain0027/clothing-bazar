import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import './cart-item.styles.css'

const CartItem = ({item: {name, images, discountPrice, quantity}}) => (
    <Grid container direction="column" justify="space-between" style={{height: "100px", marginBottom: "10px"}}>
        <img style={{width: "50%", height: "100%"}} src={images[0]} alt='item'/>
        <Grid direction="row" style={{color: "black", width: "50%", textAlign: "center", padding: "1%"}}>
            <Typography style={{marginBottom: "5px"}}>{name}</Typography>
            <Typography>{quantity} x &#x20B9;{discountPrice.toPrecision(4)}</Typography>
        </Grid>
    </Grid>
)



export default CartItem;