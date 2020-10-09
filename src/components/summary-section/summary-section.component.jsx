import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { calculateBill } from '../../actions/summaryAction';

import './summary-section.styles.scss';

const SummarySection = () => {
    const { subTotal, tax, total } = useSelector(state => state.summary)

    return (
        <div className="summary-section">
            <div className="summary">
                <nav className="summary-nav nav-wrapper red darken-2">
                    <span>Summary</span>
                </nav>
                <div className="container">
                    <p>Subtotal: {subTotal}</p>
                    <p>Tax: {tax}</p>
                    <p>Delivery: FREE</p>
                    <p className="summary-total">Total: {total}</p>
                </div>
            </div>
            <button className="waves-effect red darken-2 btn">Proceed To Checkout</button>
        </div>
    )
}

export default SummarySection;