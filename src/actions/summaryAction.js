import { CALCULATE_SUBTOTAL, CALCULATE_BILL } from './actionTypes';

export const calculateSubtotal = (prevItemTotal, itemTotal) => {
    console.log('prevItemTotal: ', prevItemTotal);
    console.log('itemTotal: ', itemTotal);
    return {
        type: CALCULATE_SUBTOTAL,
        payload: {
            prevItemTotal,
            itemTotal
        }
    }
}

export const calculateBill = (subTotal) => {
    const tax = subTotal * 0.05; // assuming a 5% tax
    const total = subTotal + tax;
    return {
        type: CALCULATE_BILL,
        payload: {
            subTotal,
            tax,
            total
        }
    }
}