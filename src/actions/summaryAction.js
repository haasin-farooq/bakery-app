import { CALCULATE_SUMMARY } from './actionTypes';

export const calculateSummary = (itemPrice, operator) => {
    return {
        type: CALCULATE_SUMMARY,
        payload: {
            operator,
            itemPrice
        }
    }
}