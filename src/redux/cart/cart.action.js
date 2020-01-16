import { cartActionType } from "./cart.types";


export const toggleCartHidden = () => ({
    type: cartActionType.TOGGLE_STATE_HIDDEN
});

export const addItem = item => ({
    type: cartActionType.ADD_ITEM,
    payload: item
});