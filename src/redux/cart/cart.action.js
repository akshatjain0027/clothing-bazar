// This file contains all the actions that could be done on our cart state

import { cartActionType } from "./cart.types";


export const toggleCartHidden = () => ({
    type: cartActionType.TOGGLE_STATE_HIDDEN
});

export const addItem = item => ({
    type: cartActionType.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: cartActionType.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: cartActionType.CLEAR_ITEM_FROM_CART,
    payload: item
})