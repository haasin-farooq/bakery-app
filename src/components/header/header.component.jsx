import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <Link to='/' className="brand-logo">Bakery App</Link>
                <div className="item-count right">
                    <span><i className="fas fa-shopping-cart fa-lg"></i> 19 items in your cart</span>
                </div>
            </div>
        </nav>
    )
}

export default Header;