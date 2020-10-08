import React from 'react';

import './item.styles.scss';

import item from '../../images/oreo.jpg';

const Item = () => {
    return (
        <li className="item section">
            <div className="image-container">
                <img src={item} alt="item.png"/>
            </div>
            <span className="name">Oreos</span>
            <span className="price">50</span>
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