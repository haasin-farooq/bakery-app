import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementCartQuantity, decrementCartQuantity } from '../../actions/cartAction';
import { calculateSummary } from '../../actions/summaryAction';

import './item.styles.scss';

const Item = ({ title, price, imageUrl }) => {
    const [quantity, setQuantity] = useState(0);
    const [itemTotal, setItemTotal] = useState(0);
    
    const dispatch = useDispatch();

    const incrementQuantity = (e) => {
        e.preventDefault();

        setQuantity(quantity + 1);
        setItemTotal((quantity + 1) * price);
        dispatch(incrementCartQuantity());
        dispatch(calculateSummary(price, '+'));
    }

    const decrementQuantity = (e) => {
        e.preventDefault();

        if(quantity > 0) {
            setQuantity(quantity - 1);
            setItemTotal((quantity - 1) * price);
            dispatch(decrementCartQuantity());
            dispatch(calculateSummary(price, '-'));
         } 
         else {
            setQuantity(0);
            setItemTotal(0);
         }
    }

    return (
        <li className="item section">
            <div className="image-container">
                <img src={imageUrl} alt="item.png"/>
            </div>
            <span className="name">{title}</span>
            <span className="price">{price}</span>
            <span className="quantity">
                <div className="arrow" onClick={decrementQuantity}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={incrementQuantity}>&#10095;</div>
            </span>
            <span className="item-total">{itemTotal}</span>
        </li>
    )
}

export default Item;