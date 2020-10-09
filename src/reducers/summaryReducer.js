import { CALCULATE_SUMMARY } from '../actions/actionTypes';

const INITIAL_STATE = {
    subTotal: 0,
    tax: 0,
    total: 0
}

const summaryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CALCULATE_SUMMARY:
            const itemPrice = (action.payload.operator === '+') ? (action.payload.itemPrice * 1) : (action.payload.itemPrice * -1)
            const subTotal = state.subTotal + itemPrice;
            const tax = subTotal * 0.05;
            const total = subTotal + tax;
            return {
                ...state,
                subTotal,
                tax,
                total
            }
        default:
            return state;
    }
}

export default summaryReducer;