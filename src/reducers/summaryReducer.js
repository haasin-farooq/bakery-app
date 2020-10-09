import { CALCULATE_SUBTOTAL, CALCULATE_BILL } from '../actions/actionTypes';

const INITIAL_STATE = {
    subTotal: 0,
    tax: 0,
    total: 0
}

const summaryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CALCULATE_SUBTOTAL:
            state.subTotal = state.subTotal - action.payload.prevItemTotal;
            return {
                ...state,
                subTotal: state.subTotal + action.payload.itemTotal
            }
        case CALCULATE_BILL:
            return {
                ...state,
                subTotal: action.payload.subTotal,
                tax: action.payload.tax,
                total: action.payload.total
            }
        default:
            return state;
    }
}

export default summaryReducer;