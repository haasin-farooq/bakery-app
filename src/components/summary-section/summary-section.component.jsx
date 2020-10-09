import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { calculateBill } from '../../actions/summaryAction';

import './summary-section.styles.scss';

const SummarySection = () => {
    const bill = useSelector(state => state.summary)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateBill(bill.subTotal));
    }, [dispatch]);

    return (
        <div className="summary-section">
            <div className="summary">
                <nav className="summary-nav nav-wrapper red darken-2">
                    <span>Summary</span>
                </nav>
                <div className="container">
                    <p>Subtotal: {bill.subTotal}</p>
                    <p>Tax: {bill.tax}</p>
                    <p>Delivery: FREE</p>
                    <p className="summary-total">Total: {bill.total}</p>
                </div>
            </div>
            <button className="waves-effect red darken-2 btn">Proceed To Checkout</button>
        </div>
    )
}

export default SummarySection;