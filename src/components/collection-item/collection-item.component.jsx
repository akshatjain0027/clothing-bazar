import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'

import './collection-item.styles.css'
import CustomButton from '../custom-button/custom-button.component'


const CollectionItem = ({item, addItem}) => {
    const { name, imageUrl, price} = item;
    return(
        <div className='collection-item col-md-3'>
        
            <img src={imageUrl} alt=""/>
            <div className='collection-footer'>
                <span>{name}</span>
                <span className='price'>${price}</span>
                <CustomButton onClick={ ()=>addItem(item) }> ADD TO CART </CustomButton>

            </div>
        </div>
   )}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);