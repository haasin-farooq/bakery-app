import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
                    <p><strong>Subtotal:</strong> {subTotal}</p>
                    <p><strong>Tax:</strong> {tax}</p>
                    <p><strong>Delivery:</strong> FREE</p>
                    <p className="summary-total"><strong>Total:</strong> {total}</p>
                </div>
            </div>
            <button className="waves-effect red darken-2 btn checkout-button">Proceed To Checkout</button>
        </div>
    )
}

export default SummarySection;