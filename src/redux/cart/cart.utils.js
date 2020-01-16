// This files contain utility functions that are needed in our cart reducer. Utility functions are extra functions that are written 
// separately to make our code clean

// cartItems are the existing cart items. cartItemsToadd is the item that has to be added in our cart
// the addItemToCart function is basically used to group the similar elements in the cart together and it defines a variable quantity to count the number of duplicarte items.
// if there are no similar elements present in the cart similar to the new element then the new element is added to the cart with quantity=1/

export const addItemToCart = (cartItems , cartItemToAdd) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id)  // find function finds the first existing element in an array that satisfys the given condition

    if(existingCartItem){
        return cartItems.map( cartItem => 
            cartItem.id === cartItemToAdd.id?
            { ...cartItem, quantity: cartItem.quantity + 1}:
            cartItem
        )
    }

    // if there are no existing cart items equal to the new cart item 
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1}]
} 