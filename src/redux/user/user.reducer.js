import { userActionTypes } from "./user.types";

// initialising the current user state to null
const intialState = {
    currentUser : null
}
// the user reducer function
const userReducer = (state = intialState, action) => {
    switch (action.type) {      
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
    
        default:
            return state;
    }
}

export default userReducer;