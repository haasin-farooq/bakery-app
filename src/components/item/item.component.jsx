import React from 'react';

import './item.styles.scss';

import item from '../../images/oreo.jpg';

const Item = ({ title, price }) => {
    return (
        <li className="item section">
            <div className="image-container">
                <img src={item} alt="item.png"/>
            </div>
            <span className="name">{title}</span>
            <span className="price">{price}</span>
            <span className="quantity">
                <div className="arrow">&#10094;</div>
                <span className="value">2</span>
                <div className="arrow">&#10095;</div>
            </span>
            <span className="item-total">100</span>
        </li>
    )
}

export default Item;