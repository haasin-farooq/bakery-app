import { 
    INCREMENT_CART,
    DECREMENT_CART
} from '../actions/actionTypes';

export const incrementCartQuantity = () => {
    return {
        type: INCREMENT_CART
    }
}

export const decrementCartQuantity = () => {
    return {
        type: DECREMENT_CART
    }
}