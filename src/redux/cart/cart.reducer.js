import { cartActionType } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionType.TOGGLE_STATE_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };

        case cartActionType.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        
        case cartActionType.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            } 

        case cartActionType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)  // The filter will add only those items to cart whose id doesnt match with the id of the item we want to remove.
            }
        default:
            return state;
    }
}

export default cartReducer;