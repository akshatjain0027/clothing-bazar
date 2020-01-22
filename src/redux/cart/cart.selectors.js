import { createSelector } from 'reselect';

const selectCart = state => state.cart

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartItemsCount = createSelector( 
    [selectCartItems],
    
    // the reduce method on cartItems is used to count the total number of items in our cart
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity , 0)
)