import React from 'react';

import './summary-section.styles.scss';

const SummarySection = () => {
    return (
        <div className="summary-section">
            <div className="summary">
                <nav className="summary-nav nav-wrapper red darken-2">
                    <span>Summary</span>
                </nav>
                <div className="container">
                    <p>Subtotal: 100</p>
                    <p>Tax: 8</p>
                    <p>Delivery: FREE</p>
                    <p className="summary-total">Total: 108</p>
                </div>
            </div>
            <button className="waves-effect red darken-2 btn">Proceed To Checkout</button>
        </div>
    )
}

export default SummarySection;