import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../actions/authAction';

import './header.styles.scss';

const Header = () => {
    const dispatch = useDispatch();
    const authState = useSelector(state => state.firebase.auth);
    const cartQuantity = useSelector(state => state.cart.cartQuantity);

    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <Link to='/' className="brand-logo">Bakery App</Link>
                {
                    authState.uid ? 
                    <ul className="right">
                        <li>
                            <div className="item-count">
                                <span><i className="fas fa-shopping-cart fa-lg"></i> {cartQuantity} items in your cart</span>
                            </div>
                        </li>
                        <li>
                            <button className="waves-effect red darken-2 btn signout-button" onClick={() => dispatch(signOut())}>Sign Out</button>
                        </li>
                    </ul>
                    : null
                }
            </div>
        </nav>
    )
}

export default Header;