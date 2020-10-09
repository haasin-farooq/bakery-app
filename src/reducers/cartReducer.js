import { INCREMENT_CART, DECREMENT_CART } from '../actions/actionTypes';

const INITIAL_STATE = {
    cartQuantity: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INCREMENT_CART:
            return {
                ...state,
                cartQuantity: state.cartQuantity + 1
            }
        case DECREMENT_CART:
            return {
                ...state,
                cartQuantity: state.cartQuantity - 1
            }
        default:
            return state;
    }
}

export default cartReducer;